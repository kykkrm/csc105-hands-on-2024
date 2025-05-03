import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();

todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.get("/user/:userId", todoController.fetchUserTodos);
todoRouter.patch("/:id/complete", todoController.completeTodo);
todoRouter.patch("/:id/title", todoController.changeTodoTitle);
todoRouter.delete("/", todoController.deleteTodo);

export { todoRouter };