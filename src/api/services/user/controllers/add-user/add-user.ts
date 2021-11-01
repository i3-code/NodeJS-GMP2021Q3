import { Request, Response, NextFunction } from 'express';

const addUser = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send('addUser');
  } catch (error) {
    next(error);
  }
};

export default addUser;
