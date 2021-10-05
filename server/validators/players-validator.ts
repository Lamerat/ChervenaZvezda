import { validatorType } from "../types/validatorType";
import playersPositions from "../common/players-positions";

const messages = {
  INVALID_FIRST_NAME: 'Invalid first name!',
  INVALID_LAST_NAME: 'Invalid last name!',
  INVALID_NUMBER: 'Invalid number, must be in range 0 - 99',
  INVALID_DATE: 'Invalid birth date!',
  INVALID_GROWTH: 'Invalid growth, must be in range 1 - 2.5',
  INVALID_WEIGHT: 'Invalid weight, must be in range 40 - 200',
  INVALID_HAND: 'Invalid hand must be лява or дясна',
  INVALID_INFO: 'Invalid player info',
  INVALID_POSITION: 'Invalid position',
}

const playersValidator: validatorType = {
  firstName: (value: any): boolean | string => value && typeof value === 'string' && value.length > 0 ? true : messages.INVALID_FIRST_NAME,
  lastName: (value: any): boolean | string => value && typeof value === 'string' && value.length > 0 ? true : messages.INVALID_LAST_NAME,
  number: (value: any): boolean | string => value && typeof +value === 'number' && value >= 0 && value < 100 ? true : messages.INVALID_NUMBER,
  birthDate: (value: any): boolean | string => !value ? true : new Date(value).toString() !== 'Invalid Date' ? true : messages.INVALID_DATE,
  growth: (value: any): boolean | string => !value ? true : typeof +value === 'number' && +value >= 1 && +value <= 2.5 ? true : messages.INVALID_GROWTH,
  weight: (value: any): boolean | string => !value ? true : typeof +value === 'number' && value > 40 && value < 200 ? true : messages.INVALID_WEIGHT,
  mainHand: (value: any): boolean | string => !value ? true : value === 'лява' || value === 'дясна' ? true : messages.INVALID_HAND,
  playerInfo: (value: any): boolean | string => !value ? true : typeof value === 'string' && value.length > 0 ? true : messages.INVALID_INFO,
  position: (value: any): boolean | string => Object.values(playersPositions).includes(+value) ? true : messages.INVALID_POSITION,
}

export default playersValidator;