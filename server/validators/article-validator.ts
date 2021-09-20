import { validatorType } from "../types/validatorType";

const messages = {
  WRONG_TEXT: 'invalid text!',
}

const articleValidator: validatorType = {
  text: (value: any): boolean | string => value && typeof value === 'string' && value.length > 0 ? true : messages.WRONG_TEXT,
}

export default articleValidator;