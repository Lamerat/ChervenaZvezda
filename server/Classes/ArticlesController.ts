import { Request, Response, NextFunction } from 'express';
import Controller, { Methods } from './Controller';
import ArticlesServices from './Services/ArticlesServices';
import paramIsNumber from '../middlewares/paramIsNumber';
import errors from '../common/errors';
import bodyValidator from '../middlewares/bodyValidator';
import articleValidator from '../validators/article-validator';

export default class ArticlesController extends Controller {
  path = '/articles';
  routes = [
    {
      path: '/:id',
      method: Methods.GET,
      handler: this.getArticle,
      localMiddleware: [paramIsNumber]
    },
    {
      path: '/:id',
      method: Methods.PUT,
      handler: this.updateArticle,
      localMiddleware: [paramIsNumber, bodyValidator(articleValidator)]
    },

  ];

  async getArticle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const service = new ArticlesServices();
    const id = parseInt(req.params.id);
    const { error, data } = await service.getArticleById(id);

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
  };

  async updateArticle(req: Request, res: Response): Promise<void> {
    const service = new ArticlesServices();
    const id = parseInt(req.params.id);
    const text = req.body.text;
    const { error, data } = await service.updateArticleById(id, text);

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