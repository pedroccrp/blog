import { Router } from 'express';

import userRoute from './routes/user.route';

const routes = Router();

routes.use('/', userRoute);

export default routes;
