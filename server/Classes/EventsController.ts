import { Request, Response, NextFunction } from 'express';
import Controller, { Methods } from './Controller';
import paramIsNumber from '../middlewares/paramIsNumber';
import errors from '../common/errors';
import EventsServices from './Services/EventsServices';

export default class EventsController extends Controller {
  path = '/events';
  routes = [
    {
      path: '/:id',
      method: Methods.GET,
      handler: this.getEvent,
      localMiddleware: [paramIsNumber]
    },
  ];

  async getEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
    const service = new EventsServices();
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