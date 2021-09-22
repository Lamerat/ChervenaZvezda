import { serviceResult } from './../../types/serviceResult';
import EventsData from '../Data/EventsData';
import errors from '../../common/errors'
import eventsTypes from '../../common/eventsTypes';
import GamesData from '../Data/GamesData';

interface eventData {
  eventType: number,
  eventDate: string,
  eventText: string | null,
  gameId: number | null,
}

export default class EventsServices {
  private readonly data: EventsData;

  constructor() {
    this.data = new EventsData();
  }
  
  async getEventById (id: number): Promise<serviceResult> {
    const result = await this.data.getEventById(id);
    
    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    if (result === undefined) {
      return {error: errors.NOT_FOUND, data: null}
    }
    
    if (parseInt(result.eventTypeId.toString()) === eventsTypes.match) {
      const game = new GamesData();
      result.gameData = (await game.getGameById(parseInt(result.eventTypeId.toString()))) as any;
    }

    result.eventDate = new Date(result.eventDate as any).toLocaleString('bg-BG') as any;

    return {error: null, data: result};
  }


  async createEvent (eventData: eventData): Promise<serviceResult> {
    const result = await this.data.createEvent(eventData);
    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    if (parseInt(result.eventTypeId.toString()) === eventsTypes.match) {
      const game = new GamesData();
      result.gameData = (await game.getGameById(parseInt(result.eventTypeId.toString()))) as any;
    }

    return {error: null, data: result};
  }


  async getMountEvents (startDate: string, endDate: string): Promise<serviceResult> {
    const result = await this.data.getMountEvents(startDate, endDate);
    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    const correctDate = result.map(row => {
      row.eventDate = new Date(row.eventDate as any).toLocaleString('fr-CA') as any
      return row;
    })

    await Promise.all(correctDate.map(async x => {
      if (parseInt(x.eventTypeId.toString()) === eventsTypes.match) {
        const game = new GamesData();
        x.gameData = (await game.getGameById(parseInt(x.eventTypeId.toString()))) as any;
      }
    }))

    return {error: null, data: correctDate};
  }
}