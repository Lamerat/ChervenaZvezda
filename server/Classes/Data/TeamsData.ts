import { teamData } from './../../types/teamsTypes';
import pool from '../../data/pool';


type result = {
  [key: string]: [value: any],
}

type dataResult = Promise<result | null>;

export default class TeamsData {
  private readonly db = pool;


  public async getTeamByName (name: string, id?: number): Promise<boolean | null> {
    const sqlQuery = `
    SELECT
    id as teamId,
    name as teamName,
    city as teamCity,
    logo_url as logoURL
    FROM teams
    WHERE name=? AND is_deleted = 0`;

    const sqlQuerySecond = `
    SELECT
    id as teamId,
    name as teamName,
    city as teamCity,
    logo_url as logoURL
    FROM teams
    WHERE name=? AND is_deleted = 0 AND id != ?`;

    let result: any[];

    try {
      if (id) {
        result = await this.db.query(sqlQuerySecond, [name, id]);
      } else {
        result = await this.db.query(sqlQuery, [name]);
      }
      return result.length ? true : false
    } catch (e) {
      return null;
    }
  }


  public async getAllTeams(): Promise<result [] | null> {
    const sqlQuery = `
      SELECT
      id as teamId,
      name as teamName,
      city as teamCity,
      logo_url as logoURL
      FROM teams
      WHERE is_deleted = 0`;

    try {
      return await this.db.query(sqlQuery);
    } catch (e) {
      return null;
    }
  }


  public async getTeamById (id: number): dataResult {
    const sqlQuery = `
      SELECT
      id as teamId,
      name as teamName,
      city as teamCity,
      logo_url as logoURL
      FROM teams
      WHERE id=? AND is_deleted = 0`;

    try {
      return (await this.db.query(sqlQuery, [id]))[0];
    } catch (e) {
      return null;
    }
  }


  public async createTeam (teamData: teamData): dataResult {
    const sqlQuery: string = `
      INSERT INTO teams(name, city, logo_url)
      VALUES (?, ?, ?)`;

    try {
      const newTeam = await this.db.query(sqlQuery, [teamData.name, teamData.city, teamData.logoURL]);
      return await this.getTeamById(newTeam.insertId);
    } catch (e) {
      return null;
    }
  }


  public async deleteTeam(id: number): dataResult {
    const sqlQuery = `UPDATE teams SET is_deleted = 1 WHERE id = ?`;

    try {
      await this.db.query(sqlQuery, [id]);
      return {}
    } catch (e) {
      return null;
    }
  }


  public async updateTeamById(id: number, teamData: teamData): dataResult {
    const sqlQuery = `UPDATE teams SET name = ?, city = ?, logo_url = ? WHERE is_deleted = 0 AND id = ?`;

    try {
      await this.db.query(sqlQuery, [teamData.name, teamData.city, teamData.logoURL, id]);
      return await this.getTeamById(id);
    } catch (e) {
      return null;
    }
  }
}