import { playerType } from './../../types/playerType';
import pool from '../../data/pool';


export default class PlayersData {
  private readonly db = pool;


  public async checkPlayerNumber(number: number, id?: number): Promise<boolean | null> {
    let sqlQuery = `SELECT * FROM players WHERE number = ?`;
    if (id) {
      sqlQuery = `SELECT * FROM players WHERE number = ? AND id != ${id}`;
    }

    try {
      const result = await this.db.query(sqlQuery, [number]);
      return result.length ? true : false;
    } catch (e) {
      return null;
    }
  }

  public async getAllPlayers() {
    const sqlQuery = `
    SELECT
    pl.id as playerId,
    pl.first_name as firstName,
    pl.last_name as lastName,
    pl.number as number,
    pl.birth_date as birthDate,
    pl.growth as growth,
    pl.weight as weight,
    pl.hand as mainHand,
    pl.info as playerInfo,
    pl.photo_url as photoURL,
    po.name as position
    FROM players as pl
    JOIN positions as po ON pl.position_id = po.id`;

    try {
      return await this.db.query(sqlQuery);
    } catch (e) {
      return null;
    }
  }

  public async createPlayer(data: playerType) {
    const sqlQuery = `
    INSERT INTO players(first_name, last_name, number, birth_date, growth, weight, hand, info, photo_url, position_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      data.firstName,
      data.lastName,
      data.number,
      data.birthDate,
      data.growth,
      data.weight,
      data.mainHand,
      data.playerInfo,
      data.photoURL,
      data.position,
    ];

    try {
      const newPlayer = await this.db.query(sqlQuery, values);
      return await this.getPlayerById(newPlayer.insertId);
    } catch (e) {
      return null;
    }
  }

  public async getPlayerById(id: number) {
    const sqlQuery = `
    SELECT
    pl.id as playerId,
    pl.first_name as firstName,
    pl.last_name as lastName,
    pl.number as number,
    pl.birth_date as birthDate,
    pl.growth as growth,
    pl.weight as weight,
    pl.hand as mainHand,
    pl.info as playerInfo,
    pl.photo_url as photoURL,
    po.name as position
    FROM players as pl
    JOIN positions as po ON pl.position_id = po.id
    WHERE pl.id = ?`;

    try {
      return await this.db.query(sqlQuery, [id]);
    } catch (e) {
      return null;
    }
  }

  public async deletePlayerById(id: number) {
    const sqlQuery = `DELETE FROM players WHERE id = ?`;

    try {
      return await this.db.query(sqlQuery, [id]);
    } catch (e) {
      return null;
    }
  }

  public async updatePlayerById(id: number, data: playerType) {
    const sqlQuery = `
      UPDATE players SET
      first_name = ?,
      last_name = ?,
      number = ?,
      birth_date = ?,
      growth = ?,
      weight = ?,
      hand = ?,
      info = ?,
      photo_url = ?,
      position_id = ?
      WHERE id = ?`;

    const values = [
      data.firstName,
      data.lastName,
      data.number,
      data.birthDate,
      data.growth,
      data.weight,
      data.mainHand,
      data.playerInfo,
      data.photoURL,
      data.position,
      id,
    ];
    
    try {
      await this.db.query(sqlQuery, values)
      return await this.getPlayerById(id);
    } catch (e) {
      console.log (e);
      return null;
    }
  }
}