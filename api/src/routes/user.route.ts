import { Router } from 'express';

import userController from 'src/controllers/user.controller';

const router = Router();

router.get('/users', userController.getAll);

router.get('/users/:id', userController.getOne);

router.post('/users', userController.create);

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.delete);

export default router;
