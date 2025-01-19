import express from 'express';
var router = express.Router();

import usersRouter from './users.js'
import timesheetRouter from './timesheets.js'


router.use('/users', usersRouter)
router.use('/timesheets', timesheetRouter)


router.get('/', (req, res) => res.send('Welcome to the API'));



export default router;
