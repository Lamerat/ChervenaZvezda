import { Application, RequestHandler, Request, Response } from 'express';
import Controller from './Controllers/Controller';

class Server {
  private app: Application;
  private readonly port: number;

  constructor(app: Application, port: number) {
      this.app = app;
      this.port = port;
  };

  public run() {
    return this.app.listen(this.port, () => console.log(`Server is arm and ready on port ${this.port}`));
  };

  public loadMiddleware(middlewares: Array<RequestHandler>): void {
    middlewares.forEach(middleware => this.app.use(middleware));
  };

  public loadControllers(controllers: Array<Controller>): void {
    controllers.forEach(controller => this.app.use(controller.path, controller.setRoutes()));
  };
}

export default Server;