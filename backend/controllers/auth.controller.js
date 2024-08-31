import {User} from '../models/userModel.js';
import bcryptjs from 'bcryptjs' ; 

const userAuthentication =async(req,res)=>{
try {
    const {username ,email,password} = req.body ; 
    const hasPassword = bcryptjs.hashSync(password,10);
    const newUser =new User (
        {
        username,
        email,
        password : hasPassword,
    })
    await newUser.save(); 
    res.status(200).json(
        {
            message : 'Success',
            error :false,
            super : true ,
        }
    )
} catch (error) {
    res.json({
        message: error.message,
        error: true,
        success: false
    });
}
}

export {userAuthentication}