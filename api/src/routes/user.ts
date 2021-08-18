import { Router } from 'express';

import UserController from 'src/controllers/user';

const router = Router();

router.get('/users', UserController.getAll);

router.get('/users/:id', UserController.getOne);

router.post('/users', UserController.create);

router.put('/users/:id', UserController.update);

router.delete('/users/:id', UserController.delete);

export default router;
