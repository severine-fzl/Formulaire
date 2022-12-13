import { UserModel } from '../Models/User.js';

export default async function UserController(req, res){
    const {email, password} = req.body

    const User = await UserModel({email, password});
    req.session.user = User;

    }