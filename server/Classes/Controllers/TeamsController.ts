import { serviceResult } from './../../types/serviceResult';
import { Request, Response } from 'express';
import Controller, { Methods } from './Controller';
import fileUpload, { UploadedFile } from 'express-fileupload';
import bodyValidator from '../../middlewares/bodyValidator';
import fileValidator from '../../middlewares/fileValidator';
import teamsValidator from '../../validators/teams-validator';
import TeamsServices from '../Services/TeamsServices';
import errors from '../../common/errors';
import paramIsNumber from '../../middlewares/paramIsNumber';


export default class TeamsController extends Controller {
  path = '/teams';
  routes = [
    {
      path: '/',
      method: Methods.GET,
      handler: this.getAllTeams,
      localMiddleware: []
    },
    {
      path: '/create',
      method: Methods.POST,
      handler: this.createTeam,
      localMiddleware: [fileUpload({createParentPath: true}), fileValidator, bodyValidator(teamsValidator)]
    },
    {
      path: '/:id',
      method: Methods.GET,
      handler: this.getTeamById,
      localMiddleware: [paramIsNumber]
    },
    {
      path: '/:id',
      method: Methods.DELETE,
      handler: this.deleteTeamById,
      localMiddleware: [paramIsNumber]
    },
    {
      path: '/:id',
      method: Methods.PUT,
      handler: this.updateTeam,
      localMiddleware: [paramIsNumber, fileUpload({createParentPath: true}), fileValidator, bodyValidator(teamsValidator)]
    },
  ];


  async getAllTeams(req: Request, res: Response): Promise<void> {
    const service = new TeamsServices();
    const {error, data} = await service.getAllTeams();

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 200);
    }
  }


  async getTeamById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id || '0');
    const service = new TeamsServices();
    const {error, data} = await service.getTeamById(id);

    if (error === errors.NOT_FOUND) {
      super.sendError(res, `Can't find team with id ${id}`, 404)
      return;
    }

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 200);
    }
  }


  async createTeam(req: Request, res: Response): Promise<void> {
    const service = new TeamsServices();
    let sendData: serviceResult;
    if (req.files) {
      sendData = await service.createTeam(req.body, req.files.logo as UploadedFile);
    } else {
      sendData = await service.createTeam(req.body);
    }

    const {error, data} = sendData;
    
    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.DUPLICATE_RECORD) {
      super.sendError(res, 'This name already exists!', 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 201);
    }
  };


  async deleteTeamById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id || '0');
    const service = new TeamsServices();
    const {error, data} = await service.deleteTeamById(id);

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.NOT_FOUND) {
      super.sendError(res, `Can't find team with id ${id}`, 404)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 201);
    }
  }


  async updateTeam(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id || '0');
    const service = new TeamsServices();
    let sendData: serviceResult;
    if (req.files) {
      sendData = await service.updateTeamById(id, req.body, req.files.logo as UploadedFile);
    } else {
      sendData = await service.updateTeamById(id,req.body);
    }

    const {error, data} = sendData;

    if (error === errors.SERVER_ERROR) {
      super.sendError(res, 'SERVER PROBLEM', 500)
      return;
    }

    if (error === errors.DUPLICATE_RECORD) {
      super.sendError(res, 'This name already exists!', 500)
      return;
    }

    if (data !== null) {
      super.sendSuccess(res, data, 201);
    }
  }
}