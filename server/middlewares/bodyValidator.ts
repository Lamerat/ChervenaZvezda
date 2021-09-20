import { validatorType } from './../types/validatorType';
import { Request, Response, NextFunction } from 'express';


const bodyValidator = (validator: validatorType) => (req: Request, res: Response, next: NextFunction) => {
  const validatorFields: Array<string> = Object.keys(validator);
  
  let errorMessage: string | boolean = false;

  validatorFields.forEach(key => {
    const result = validator[key](req.body[key]);
    if (result !== true && !errorMessage) {
      errorMessage = result;
    }
  });

  if (errorMessage) {
    return res.status(400).send({ message: errorMessage })
  }

  next();
}

export default bodyValidator;