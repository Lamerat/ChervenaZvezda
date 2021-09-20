import pool from '../../data/pool';

type result = {
  [key: string]: [value: any],
}

type dataResult = Promise<result | null>;

export default class GamesData {
  private readonly db = pool;

  async getGameById (id: number): dataResult {
    const sqlQuery = `
    SELECT
    g.id as gameId,
    ht.id as homeTeamId,
    ht.name as homeTeamName,
    ht.logo_url as homeTeamLogo,
    gt.id as guestTeamId,
    gt.name as guestTeamName,
    gt.logo_url as guestTeamLogo,
    p.id as playgroundId,
    p.name as playgroundName,
    p.city as playgroundCity,
    g.date as gameDate,
    g.first_part_score as firstPartScore,
    g.second_part_score as secondPartScore,
    g.third_part_score as thirdPartScore,
    g.additional_info as gameInfo
    FROM games AS g
    JOIN playgrounds AS p ON g.playgrounds_id = p.id
    JOIN teams AS ht ON g.home_teams_id=ht.id
    JOIN teams AS gt ON g.guest_teams_id=gt.id
    WHERE g.id = ?`;

    try {
      return (await this.db.query(sqlQuery, [id]))[0];
    } catch (e) {
      console.log (e)
      return null;
    }
  }
}