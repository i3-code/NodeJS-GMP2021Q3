import { Request, Response, NextFunction } from 'express';

const updateUser = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send('updateUser');
  } catch (error) {
    next(error);
  }
};

export default updateUser;
