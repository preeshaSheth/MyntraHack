const mongoose = require("mongoose");
const initData = require("./db.js");
const Listing= require("./item.js");


//connect to database
const ATLAS_URL = "mongodb+srv://lavanyap5904:DhPM7wGN7kzZO76M@cluster0.jdu8vyu.mongodb.net/Myntra?retryWrites=true&w=majority&appName=Cluster0";
//made function
async function main(){
    await mongoose.connect(ATLAS_URL);
}
//called function
main().then(()=>{
console.log("connected to db")
}).catch((err)=>{
    console.log(err);
});


const initDB = async ()=>{
   await Listing.deleteMany({});
  // initData.data=initData.data.map((obj)=>({...obj,Owner:"66696cfe06626e08017db06a"}));
   await Listing.insertMany(initData);
   console.log("data was initialised");
}

initDB();