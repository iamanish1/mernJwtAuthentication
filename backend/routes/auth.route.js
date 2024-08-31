import express from 'express';
import { userAuthentication} from '../controllers/auth.controller.js';
import { userDataGet } from '../controllers/userdataGet.controller.js';

const authRouter = express.Router(); 

authRouter.post('/singup',userAuthentication)
authRouter.get('/user',userDataGet)



export default authRouter