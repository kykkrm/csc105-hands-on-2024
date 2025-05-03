import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
  title: string;
  userId: number;
};

type updateTodoTitleBody = {
  title: string;
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<createTodoBody>();
    if (!body.title || !body.userId)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    const newTodo = await todoModel.createTodo(body.title, body.userId);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Created new Todo!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
}

const getTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.getTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  }
  catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
}

const completeTodo = async (c: Context) => {
  try {
    const todoId = parseInt(c.req.param('id'));
    const updatedTodo = await todoModel.setTodoCompleted(todoId);
    
    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Todo marked as completed",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const changeTodoTitle = async (c: Context) => {
  try {
    const todoId = parseInt(c.req.param('id'));
    const body = await c.req.json<updateTodoTitleBody>();
    
    if (!body.title) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing title field",
        },
        400
      );
    }
    
    const updatedTodo = await todoModel.editTodoTitle(todoId, body.title);
    
    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Todo title updated",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const fetchUserTodos = async (c: Context) => {
  try {
    const userId = parseInt(c.req.param('userId'));
    const todos = await todoModel.findTodosByUserId(userId);
    
    return c.json({
      success: true,
      data: todos,
      msg: "Retrieved user todos",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const deleteTodo = async (c: Context) => {
    try {
        const query = c.req.query("id");
        if (query !== undefined && query !== null) {
            const data = await todoModel.deleteTodo(parseInt(query));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

export { createTodo, getTodo, completeTodo, changeTodoTitle, fetchUserTodos, deleteTodo };