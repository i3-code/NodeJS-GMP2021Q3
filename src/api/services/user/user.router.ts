import express from 'express';

import { getUsers, getUserById, addUser, updateUser, deleteUser } from './controllers';

const router = express.Router();

router.get('/user', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', addUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
