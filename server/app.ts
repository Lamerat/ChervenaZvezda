import express, { RequestHandler } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Server from './Classes/Server';
import ArticlesController from './Classes/Controllers/ArticlesController';
import Controller from './Classes/Controllers/Controller';
import EventsController from './Classes/Controllers/EventsController';
import GamesController from './Classes/Controllers/GamesController';
import TeamsController from './Classes/Controllers/TeamsController';
import ImageController from './Classes/Controllers/ImageController';
import PlayersController from './Classes/Controllers/PlayersController';

dotenv.config();

const PORT = parseInt(process.env.EXPRESS_PORT || '5555');

const app = express();
const server = new Server(app, PORT);

const controllers: Array<Controller> = [
  new ArticlesController(),
  new EventsController(),
  new GamesController(),
  new TeamsController(),
  new ImageController(),
  new PlayersController(),
];

const globalMiddleware: Array<RequestHandler> = [
  express.json(),
  cors(),
];

Promise.resolve()
  .then(() => {
    server.loadMiddleware(globalMiddleware);
    server.loadControllers(controllers);
    server.run();
  });