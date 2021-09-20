import pool from '../../data/pool';

type result = {
  [key: string]: [value: any],
}

type dataResult = Promise<result | null>;

export default class EventsData {
  private readonly db = pool;

  async getEventById (id: number): dataResult {
    const sqlQuery = `
      SELECT
      e.id as eventId,
      et.id as eventTypeId,
      et.name as eventName,
      e.date as eventDate,
      e.text as eventText,
      e.games_id as gameId
      FROM events as e
      JOIN events_type as et
      ON e.events_type_id=et.id
      WHERE e.id = ?`;

    try {
      return (await this.db.query(sqlQuery, [id]))[0];
    } catch (e) {
      return null;
    }
  }
}