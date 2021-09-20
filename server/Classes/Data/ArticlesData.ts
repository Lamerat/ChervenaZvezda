import pool from '../../data/pool';

type dataResult = Promise<object | null>;

export default class ArticlesData {
  private readonly db = pool;

  async getArticleById (id: number): dataResult {
    const sqlQuery = `SELECT id as id, name as name, text as text FROM articles WHERE is_deleted = 0 AND id = ?`;

    try {
      return  (await this.db.query(sqlQuery, [id]))[0]; 
    } catch (e) {
      return null;
    }
  }
}