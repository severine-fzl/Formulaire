import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js';
import ResultController from '../controllers/result.js'
import UserController from '../controllers/user.js'

router.get('/', HomeController);
router.get('/result', UserController)


router.post('/result', ResultController);


export default router;