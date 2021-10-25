import express from 'express';
import helmet from 'helmet';

import apiRouter from './api/router';

const PUBLIC_PORT = Number(process.env.PORT || 3000);

const server = express();
server.use(helmet({ contentSecurityPolicy: false, referrerPolicy: false }));
server.use(express.json({ limit: '300kb' }));
server.use(express.urlencoded({ limit: '300kb', extended: true }));
server.use(apiRouter);

server.listen(PUBLIC_PORT, (): void => {
  console.log(`> Ready on http://localhost:${PUBLIC_PORT}`);
});
