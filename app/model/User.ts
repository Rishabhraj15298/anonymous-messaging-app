import mongoose  from 'mongoose';
import {Schema , Document} from 'mongoose';

export interface Message extends Document {
    content : string;
    createdAt : Date;
}


const MessageSchema : Schema<Message> = new mongoose.Schema ({
    content : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now,
    }

})

export interface User extends Document {
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified : boolean;
    isAcceptingMessages : boolean;
    messages : Message[];
}


const UserSchema : Schema<User> = new mongoose.Schema ( {
    username : {
        type : String ,
        required : true,
        unique : true, 
        trim : true,
    },
    email : {
        type : String ,
        required : true, 
        unique : true,
        match  : [/.+\@.+\..+/, 'Please use a valid email address'],
    } ,
    password : {
        type : String , 
        required : [ true , 'Password is required'],  

    },
    verifyCode : {
        type : String , 
        required :  [ true , 'Verification code is required'], 
    },
    verifyCodeExpiry : { 
        type : Date , 
        required : [ true , 'Verification code expiry  is required'], 
    },
    isVerified: {
        type : Boolean , 
        default : false,

    },
    isAcceptingMessages : {
        type : Boolean , 
        default : false,
    },
    messages : [MessageSchema],

    

})

const Usermodel = (mongoose.models.User as mongoose.Model<User> || mongoose.model<User> ("User" , UserSchema))

export default Usermodel;