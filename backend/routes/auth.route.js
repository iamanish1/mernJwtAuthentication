import express from 'express';
import { userAuthentication} from '../controllers/auth.controller.js';

const authRouter = express.Router(); 

authRouter.post('/singup',userAuthentication)



export default authRouter