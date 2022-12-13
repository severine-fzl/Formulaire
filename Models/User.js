import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email : String,
    password: String
})

const collectionName = 'users';
export const UserModel = mongoose.model('User', UserSchema, collectionName)