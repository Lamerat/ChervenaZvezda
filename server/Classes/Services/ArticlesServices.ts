import ArticlesData from "../Data/ArticlesData";
import errors from '../../common/errors'

type serviceResult = {
  error: null | number,
  data: null | object,
}

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
}