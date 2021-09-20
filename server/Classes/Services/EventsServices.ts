import { serviceResult } from './../../types/serviceResult';
import EventsData from '../Data/EventsData';
import errors from '../../common/errors'
import eventsTypes from '../../common/eventsTypes';
import GamesData from '../Data/GamesData';


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

    return {error: null, data: result};
  }
}