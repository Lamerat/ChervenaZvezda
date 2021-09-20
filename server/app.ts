import express, { RequestHandler } from 'express';
import cors from 'cors';
import Server from './Classes/Server';
import ArticlesController from './Classes/ArticlesController';
import Controller from './Classes/Controller';

const PORT = 5000;

const app = express();
const server = new Server(app, PORT);

const controllers: Array<Controller> = [
  new ArticlesController(),
];

const globalMiddleware: Array<RequestHandler> = [
  cors(),
];

Promise.resolve()
  .then(() => {
    server.loadMiddleware(globalMiddleware);
    server.loadControllers(controllers);
    server.run();
  });