const Chat=require("./models/chat");
const mongoose=require("mongoose");


main()
.then(()=>{
    console.log("Connection to Mongodb Successful...");
})
.catch((err)=>{
    consolelog(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ChatBox");
}


Chat.insertMany([
  {
    from: "Akshi",
    to: "Manager",
    mesg: "I wanted to check on the expected return time. Please let me know if there is any delay. Thanks."
  },
  {
    from: "Pragya",
    to: "Akshi",
    mesg: "Let’s plan a short break to recharge. Please share your availability so we can align schedules."
  },
  {
    from: "Khushi",
    to: "Pragya",
    mesg: "Sounds good to me. I am happy to join and coordinate as needed. Let me know the details."
  }
])

.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})