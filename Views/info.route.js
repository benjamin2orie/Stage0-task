
import express from 'express';
import { info } from '../Controller/lib/basic.info.js';

const router = express.Router();


router.get('/info', info);


export default router;