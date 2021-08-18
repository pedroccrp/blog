import { Router } from 'express';

import userRoute from './routes/user';

const routes = Router();

routes.use('/', userRoute);

export default routes;
