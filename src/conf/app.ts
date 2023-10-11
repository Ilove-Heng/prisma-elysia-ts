import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { db } from "../utils/db";
import { PrismaClient } from "@prisma/client"
import { cookie } from '@elysiajs/cookie'
import { Status, Message } from "../errors";
import { handleResponse } from "../utils/responseHandler";
import { handleJWT } from "../utils/jwt";
import { login, signup } from "../models/users/users";

import {
  UserApi
} from "../api/users/users.services";

const userApi = new UserApi();

const app = new Elysia()
  .model(login)
  .model(signup)
  .use(cors())
  .use(handleJWT())
  .use(cookie())
  .decorate("db", new PrismaClient())

  .group("/api/v1/users", (app) => app

    .post('/login', ({ body }) => {
      return userApi.login(body);
    }, {
      body: 'login',
    })

    .post("/add", ({ body }) => {
      return userApi.signup(body);
    }, {
      body: 'signup'
    })

    .get("", () => {
      return userApi.getUsers();
    })

    .get("/:id", ({ params: { id } }) => {
      return userApi.getUsersById(parseInt(id));
    })

    .put("/add/:id", ({ params: { id } }) => {
      return userApi.updateUsers(parseInt(id));
    })

  )


export default app;


