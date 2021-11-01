import { Request, Response, NextFunction } from 'express';

const deleteUser = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send('deleteUser');
  } catch (error) {
    next(error);
  }
};

export default deleteUser;
