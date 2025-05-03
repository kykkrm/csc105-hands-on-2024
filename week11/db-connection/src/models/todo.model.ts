import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
  const todo = await db.todo.create({
    data: {
      title: title,
      userId: userId,
    },
  });
  return todo;
}

const getTodo = async (id: number) => {
  const todo = await db.todo.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return todo;
}

const setTodoCompleted = async (id: number) => {
  return await db.todo.update({
    where: { id },
    data: { completed: true }
  });
};

const editTodoTitle = async (id: number, title: string) => {
  return await db.todo.update({
    where: { id },
    data: { title }
  });
};

const findTodosByUserId = async (userId: number) => {
  return await db.todo.findMany({
    where: {
      userId: userId,
    },
    include: {
      user: true,
    }
  });
};

const deleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;
}

export { createTodo, getTodo, setTodoCompleted, editTodoTitle, findTodosByUserId, deleteTodo };