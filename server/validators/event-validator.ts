import { validatorType } from "../types/validatorType";
import eventsTypes from '../common/eventsTypes'

const validEventsType: number[] = Object.values(eventsTypes);

const messages = {
  WRONG_TYPE: `Wrong event type, must be someone of this numbers (${validEventsType.join(',')})!`,
  INVALID_DATE: `Wrong date!`,
  INVALID_TEXT: 'Invalid text!',
  INVALID_GAME: 'Invalid game ID (must be number bigger from zero!',
}

const checkValidDate = (date: string): boolean => {
  if (new Date(date).toString() === 'Invalid Date') {
    return false;
  }
  return true;
}

const validateText = (value: string): boolean | string => {
  if (typeof value !== 'string' || value.length < 1) {
    return messages.INVALID_TEXT;
  }
  return true;
};

const validateGameId = (value: number): boolean | string => {
  if (typeof value !== 'number' || value <= 0) {
    return messages.INVALID_GAME;
  }
  return true;
}

const eventValidator: validatorType = {
  eventType: (value: any): boolean | string => value && typeof value === 'number' && validEventsType.includes(value) ? true : messages.WRONG_TYPE,
  eventDate: (value: string):  boolean | string => checkValidDate(value) ? true : messages.INVALID_DATE,
  eventText: (value: any):boolean | string => value !== null ? validateText(value) : true,
  gameId: (value: any):boolean | string => value !== null ? validateGameId(value) : true,
}

export default eventValidator;