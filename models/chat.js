const mongoose=require("mongoose");
//this is to define schemas for collections

const chatSchema=mongoose.Schema({
from:{
type:String,
required:true,
},
to:{
type:String,
required:true,

},
mesg:{
type:String,
maxLength:[150,"The message is too Long"],

},
},
{
    timestamps:true
});

const Chat=mongoose.model("Chat",chatSchema);
//created model/collection(chats)


module.exports=Chat;


