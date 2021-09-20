export interface validatorType {
  [key: string]: (value: any) => string | boolean
}
