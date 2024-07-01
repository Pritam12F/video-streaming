import { Hono } from "hono";
import multer from "multer";
import { cors } from "hono/cors";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { stderr, stdin } from "process";

const app = new Hono();

app.use(cors());
app.use(async (c, next) => {
  const contentType = c.req.header("Access-Control-Allow-Origin");

  if (contentType === "video") {
    next();
  }
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
