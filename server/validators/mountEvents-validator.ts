import { validatorType } from "../types/validatorType";

const messages = {
  INVALID_YEAR: `Wrong year!`,
  INVALID_MOUNT: `Wrong mount!`,
}

interface interval {
  min: number,
  max: number,
}

const yearInterval: interval = {
  min: 2020,
  max: 2050,
}

const mountInterval: interval = {
  min: 1,
  max: 12,
}

const checkValues = (value: number, interval: interval): boolean => {
  if (!value || typeof value !== 'number' || value < interval.min || value > interval.max) {
    return false;
  }
  return true;
}

const mountEventsValidator: validatorType = {
  year: (value: any): boolean | string => checkValues(value, yearInterval) ? true : messages.INVALID_YEAR,
  mount: (value: any): boolean | string => checkValues(value, mountInterval) ? true : messages.INVALID_MOUNT,
}

export default mountEventsValidator;