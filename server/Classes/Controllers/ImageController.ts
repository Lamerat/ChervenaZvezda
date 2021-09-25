import { Request, Response, NextFunction, ErrorRequestHandler, Errback as Errname } from 'express';
import Controller, { Methods } from './Controller';
import path from 'path'


export default class ImageController extends Controller {
  path = '/images';
  routes = [
    {
      path: '/teams/:id',
      method: Methods.GET,
      handler: this.getTeamLogo,
      localMiddleware: []
    },
  ];


  private async getTeamLogo(req: Request, res: Response): Promise<void> {
    res.sendFile(`${req.params.id}`, { root: path.join('images/teams') }, (err: Error) => {
      if (err) {
        super.sendError(res, `can't load ${req.params.id}`, 404)
      }
    });
  };

}