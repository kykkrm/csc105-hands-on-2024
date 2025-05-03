import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
  firstName: string;
  lastName: string;
};

type updateNameBody = {
  firstName: string;
  lastName: string;
};

const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (await userModel.isDuplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: "firstName or lastName is duplicated",
      });
    }
    const newUser = await userModel.createUser(
      body.firstName,
      body.lastName
    );
    return c.json({
      success: true,
      data: newUser,
      msg: "Created new User!",
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

const listAllUsers = async (c: Context) => {
  try {
    const users = await userModel.getAllUsers();
    return c.json({
      success: true,
      data: users,
      msg: "Retrieved all users",
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

const modifyUserName = async (c: Context) => {
  try {
    const userId = parseInt(c.req.param('id'));
    const body = await c.req.json<updateNameBody>();
    
    if (!body.firstName || !body.lastName) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }
    
    const updatedUser = await userModel.editUserName(userId, body.firstName, body.lastName);
    
    return c.json({
      success: true,
      data: updatedUser,
      msg: "User updated successfully",
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

export { createUser, listAllUsers, modifyUserName };