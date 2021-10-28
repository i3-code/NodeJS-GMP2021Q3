import express from 'express';

import { userRouter } from './services';

const apiRouter = express.Router();
apiRouter.use(userRouter);

export default apiRouter;
