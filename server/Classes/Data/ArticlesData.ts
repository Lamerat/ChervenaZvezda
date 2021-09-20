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

  async updateArticleById (id: number, text: string) {
    const sqlQuery = `UPDATE articles SET text = ? WHERE is_deleted = 0 AND id = ?`;

    try {
      await this.db.query(sqlQuery, [text, id]);
      return await this.getArticleById(id);
    } catch (e) {
      return null;
    }
  }
}