import Controller, { Methods } from './Controller';
import { serviceResult } from './../../types/serviceResult';
import { Request, Response } from 'express';
import PlayersServices from '../Services/PlayersServices';
import fileUpload, { UploadedFile } from 'express-fileupload';
import fileValidator from '../../middlewares/fileValidator';
import bodyValidator from '../../middlewares/bodyValidator';
import errors from '../../common/errors';
import playersValidator from '../../validators/players-validator';
import paramIsNumber from '../../middlewares/paramIsNumber';

export default class PlayersController extends Controller {
  path = '/players';

  routes = [
    {
      path: '/',
      method: Methods.GET,
      handler: this.getAllPlayers,
      localMiddleware: []
    },
    {
      path: '/create',
      method: Methods.POST,
      handler: this.createPlayer,
      localMiddleware: [fileUpload({createParentPath: true}), fileValidator('photoURL'), bodyValidator(playersValidator)]
    },
    {
      path: '/:id',
      method: Methods.GET,
      handler: this.getPlayerById,
      localMiddleware: [paramIsNumber]
    },
    {
      path: '/:id',
      method: Methods.DELETE,
      handler: this.deletePlayerById,
      localMiddleware: [paramIsNumber]
    },
    {
      path: '/:id',
      method: Methods.PUT,
      handler: this.updatePlayerById,
      localMiddleware: [fileUpload({createParentPath: true}), fileValidator('photoURL'), paramIsNumber, bodyValidator(playersValidator)]
    },
  ];

  async getAllPlayers(req: Request, res: Response): Promise<void> {
    const service = new PlayersServices();
    const {error, data} = await service.getAllPlayers();
    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 200);
    }
  }

  async createPlayer(req: Request, res: Response): Promise<void> {
    const service = new PlayersServices();
    for (const [key, value] of Object.entries(req.body)) {
      req.body[key] = value || null;
      if (!isNaN(req.body[key]) && req.body[key] !== null) {
        req.body[key] = Number(value);
      }
    }
    
    let sendData: serviceResult;
    if (req.files) {
      sendData = await service.createPlayer(req.body, req.files.photoURL as UploadedFile);
    } else {
      sendData = await service.createPlayer(req.body);
    }
    const {error, data} = sendData;
    
    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.DUPLICATE_RECORD) {
      super.sendError(res, `Already have player with number ${req.body.number}!`, 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 201);
    }
  }

  public async getPlayerById(req: Request, res: Response): Promise<void> {
    const service = new PlayersServices();
    const {error, data} = await service.getPlayerById(parseInt(req.params.id));
    
    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.NOT_FOUND) {
      super.sendError(res, `Can't find player with id ${req.params.id}`, 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 201);
    }
  }

  public async deletePlayerById(req: Request, res: Response): Promise<void> {
    const service = new PlayersServices();
    const {error, data} = await service.deletePlayerById(parseInt(req.params.id));

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.NOT_FOUND) {
      super.sendError(res, `Can't find player with id ${req.params.id}`, 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 201);
    }
  }

  public async updatePlayerById(req: Request, res: Response): Promise<void> {
    for (const [key, value] of Object.entries(req.body)) {
      req.body[key] = value || null;
      if (!isNaN(req.body[key]) && req.body[key] !== null) {
        req.body[key] = Number(value);
      }
    }
    let sendData: serviceResult;
    const id = parseInt(req.params.id);
    const service = new PlayersServices();
    if (req.files) {
      sendData = await service.updatePlayerById(id, req.body, req.files.photoURL as UploadedFile);
    } else {
      sendData = await service.updatePlayerById(id, req.body);
    }

    const {error, data} = sendData;
    
    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.NOT_FOUND) {
      super.sendError(res, `Player with id ${id} don't exists!`, 500)
      return;
    }

    if (error === errors.DUPLICATE_RECORD) {
      super.sendError(res, `Already have other player with number ${req.body.number}!`, 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 201);
    }
  }
}