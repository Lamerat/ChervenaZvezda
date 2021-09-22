import { Request, Response, NextFunction } from 'express';
import Controller, { Methods } from './Controller';
import paramIsNumber from '../../middlewares/paramIsNumber';
import errors from '../../common/errors';
import EventsServices from '../Services/EventsServices';
import bodyValidator from '../../middlewares/bodyValidator';
import eventValidator from '../../validators/event-validator';
import eventsTypes from '../../common/eventsTypes';
import mountEventsValidator from '../../validators/mountEvents-validator';

export default class EventsController extends Controller {
  path = '/events';
  routes = [
    {
      path: '/create',
      method: Methods.POST,
      handler: this.createEvent,
      localMiddleware: [bodyValidator(eventValidator)]
    },
    {
      path: '/mount',
      method: Methods.GET,
      handler: this.getMountEvents,
      localMiddleware: [bodyValidator(mountEventsValidator)]
    },
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

  private async createEvent(req: Request, res: Response): Promise<void> {
    const {eventType, eventText, gameId} = req.body;
    if (eventType === eventsTypes.other && eventText === null) {
      super.sendError(res, 'other event must have a text', 400);
      return;
    }

    if (eventType === eventsTypes.match && gameId === null) {
      super.sendError(res, 'game events must have valid game ID', 400);
      return;
    }

    const service = new EventsServices();
    const { error, data } = await service.createEvent(req.body);

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data);
    }
  }

  private async getMountEvents(req: Request, res: Response): Promise<void> {
    const {year, mount} = req.body;
    const formatStartMount: string = mount < 10 ? `0${mount}` : `${mount}`;
    const formatEndMount: string = mount === 12 ? `01` : mount + 1 < 10 ? `0${mount + 1}` : `${mount + 1}`;
    const startDate = `${year}-${formatStartMount}-01`;
    const endDate = `${mount === 12 ? year + 1 : year}-${formatEndMount}-01`;
    
    const service = new EventsServices();
    const { error, data } = await service.getMountEvents(startDate, endDate);

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data);
    }
  }
}