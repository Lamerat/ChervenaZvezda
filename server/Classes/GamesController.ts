import { Request, Response, NextFunction } from 'express';
import Controller, { Methods } from './Controller';
import GamesServices from './Services/GamesServices';
import paramIsNumber from '../middlewares/paramIsNumber';
import errors from '../common/errors';


export default class GamesController extends Controller {
  path = '/games';
  routes = [
    {
      path: '/:id',
      method: Methods.GET,
      handler: this.getEvent,
      localMiddleware: [paramIsNumber]
    },
  ];

  async getEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
    const service = new GamesServices();
    const id = parseInt(req.params.id);
    const { error, data } = await service.getEventById(id);

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.NOT_FOUND) {
      super.sendError(res, `Can't find record with id: ${id}`, 404);
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data);
    }
  }
}