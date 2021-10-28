import { Request, Response, NextFunction } from 'express';

const getUserById = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send('getUserById');
  } catch (error) {
    next(error);
  }
};

export default getUserById;
