import { Request, Response, NextFunction } from 'express';

const getUsers = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send('getUsers');
  } catch (error) {
    next(error);
  }
};

export default getUsers;
