import { serviceResult } from './../../types/serviceResult';
import ArticlesData from "../Data/ArticlesData";
import errors from '../../common/errors'



export default class ArticlesServices {
  private readonly data: ArticlesData;

  constructor() {
    this.data = new ArticlesData();
  }
  
  async getArticleById (id: number): Promise<serviceResult> {
    const result = await this.data.getArticleById(id);
    
    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    if (result === undefined) {
      return {error: errors.NOT_FOUND, data: null}
    }
    
    return {error: null, data: result};
  }

  async updateArticleById (id: number, text: string): Promise<serviceResult> {
    const checkArticle = await this.data.getArticleById(id);
    
    if (checkArticle === null) {
      return {error: errors.SERVER_ERROR, data: null};
    }

    if (checkArticle === undefined) {
      return {error: errors.NOT_FOUND, data: null};
    }
    
    const result = await this.data.updateArticleById(id, text);
    
    if (!result) {
      return {error: errors.SERVER_ERROR, data: null};
    }

    return {error: null, data: result};
  }
}