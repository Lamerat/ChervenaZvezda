import { Request, Response, NextFunction } from 'express';

const paramIsNumber = (req: Request, res: Response, next: NextFunction) => {
  const checkParam = Object.values(req.params).map(Number);
  if (checkParam.some(value => isNaN(value) || value < 1)) {
    return res.status(400).send({ message: 'Invalid param!'});
  }
  next();
}

export default paramIsNumber;