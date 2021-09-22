import { validatorType } from "../types/validatorType";

const messages = {
  INVALID_NAME: 'Invalid name!',
  INVALID_CITY: 'Invalid city!'
}

const teamsValidator: validatorType = {
  name: (value: any): boolean | string => value && typeof value === 'string' && value.length > 0 ? true : messages.INVALID_NAME,
  city: (value: any): boolean | string => value && typeof value === 'string' && value.length > 0 ? true : messages.INVALID_CITY,
}

export default teamsValidator;