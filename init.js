const Chat=require("./models/chat");
const mongoose=require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connection to MongoDB successful"))
  .catch((err) => console.error(err));

const seedChats=[
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
];

const seedDB = async () => {
  try {
    // Optional: clear old chats first
    await Chat.deleteMany({});
    
    // Insert seed chats
    const res = await Chat.insertMany(seedChats);
    console.log("Seed data inserted successfully:", res);
  } catch (err) {
    console.error("Error seeding DB:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();