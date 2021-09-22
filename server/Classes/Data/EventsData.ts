import pool from '../../data/pool';

type result = {
  [key: string]: [value: any],
}
interface eventData {
  eventType: number,
  eventDate: string,
  eventText: string | null,
  gameId: number | null,
}

type dataResult = Promise<result | null>;

type arrayResult = Promise<result[] | null>

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

  async createEvent (eventData: eventData): dataResult {
    const sqlQuery: string = `
      INSERT INTO events(events_type_id, date, text, games_id)
      VALUES (?, ?, ?, ?)`;

      try {
        const newEvent = await this.db.query(sqlQuery, [eventData.eventType, eventData.eventDate, eventData.eventText, eventData.gameId]);
        return await this.getEventById(newEvent.insertId);
      } catch (e) {
        return null;
      }
  }

  async getMountEvents (start: string, end: string): arrayResult {
    const sqlQuery: string = `
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
      WHERE e.date >= ? AND e.date < ?`;

    try {
      return await this.db.query(sqlQuery, [start, end]);
    } catch (e) {
      return null;
    }
  }
}