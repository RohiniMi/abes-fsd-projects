import express from 'express';
import { users } from '../user.js';

const router = express.Router();

const userLogin = async (req, res) => {
    const data = req.body;
    const userLoginData = await loginService(data);
    res.json({message:userLoginData});
    
}
const loginService = async (data) => {
    const {email,password} = users.find((e) => e.email === data.email);  
    // const{id,name,email}=req.body;
    
    if (!email){
        return "ID does not exist. Please click on signup";
    }      
    else{
        if(password === data.password) return "login successful";
        else return "Password or username error";
    } 
}
// userLogin();
router.post('/', userLogin);
export default router;