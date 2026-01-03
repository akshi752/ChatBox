const mongoose = require("mongoose");
const Chat = require("./models/chat");

const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connection to MongoDB successful"))
  .catch((err) => console.error(err));



app.use(methodOverride("_method"));
//used for post /patch request in forms

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting paths
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () => {
  console.log(`Port ${PORT} is listening`);
});
//index page
app.get("/chats", async (req, res) => {
  let chats = await Chat.find({}); // these function are asynchronous either need .then or need async await
  let status = req.query.status;
  let messg=req.query.messg;
    console.log("Chats from DB:", chats); 
  res.render("chats", { chats, status,messg });
});

//new chat
app.get("/chats/new", (req, res) => {
  res.render("new");
});

//post request for new chat

app.post("/chats", async (req, res) => {
  let { from, to, mesg } = req.body;
  let newChat = {
    from: from,
    to: to,
    mesg: mesg,
  };
  try{
      await Chat.create(newChat);
  res.redirect("/chats?status=added");
  }
  catch(err){
    if(err.name==="ValidationError"){
    const message=Object.values(err.errors)[0].message;
    res.redirect(`/chats?status=error&messg=${encodeURIComponent(message)}`);
    }
  }

});

//edit get request
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit", { chat });
});

//edit patch request
app.patch("/chats/:id", async (req, res) => {
  let { mesg } = req.body;
  let { id } = req.params;
  try{
  await Chat.findByIdAndUpdate(id, { mesg: mesg }, { new: true ,runValidators:true});
   res.redirect("/chats?status=edited");
  }
  catch(err){
  if(err.name==="ValidationError"){
  const message=Object.values(err.errors)[0].message;
  res.redirect(`/chats?status=error&messg=${encodeURIComponent(message)}`)
  }
  }

});
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats?status=deleted");
});
//adding check to delete
