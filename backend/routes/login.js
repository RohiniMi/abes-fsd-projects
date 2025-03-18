import express from 'express';
import { users } from '../user.js';

const router = express.Router();

const userLogin = async (req, res) => {
    const data = req.body;
    const userLoginData = await loginService(data);
    res.json({message:userLoginData});
}
const loginService = async (data) => {
    const existingUser = users.find((e) => e.email === data.email);
    if (!existingUser[0]){
        if(existingUser.username === data.username && existingUser.password === data.password) return "login successful";
        else return "Password or email error";
    } 
        
    else "user does not exist";
}
router.post('/', userLogin);
export default router;