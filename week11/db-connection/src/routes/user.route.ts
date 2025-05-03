import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.listAllUsers);
userRouter.patch("/:id", userController.modifyUserName);

export { userRouter };