const User = require("../models/User");

/* REGISTER */

exports.registerUser = async (req,res)=>{

try{

const { email } = req.body;

/* CHECK IF USER EXISTS */

const existingUser = await User.findOne({ email });

if(existingUser){
return res.status(400).json({ message: "User already exists" });
}

const user = new User(req.body);

await user.save();

res.json(user);

}
catch(error){

res.status(500).json({ message: "Server error" });

}

};



/* LOGIN */

exports.loginUser = async (req,res)=>{

try{

const { email, password } = req.body;

const user = await User.findOne({ email, password });

if(!user){
return res.status(400).json({ message: "Invalid credentials" });
}

res.json(user);

}
catch(error){

res.status(500).json({ message: "Server error" });

}

};



/* GET ALL USERS */

exports.getUsers = async (req,res)=>{

try{

const users = await User.find();

res.json(users);

}
catch(error){

res.status(500).json({ message: "Error fetching users" });

}

};



/* GET SINGLE USER */

exports.getUserById = async (req,res)=>{

try{

const user = await User.findById(req.params.id);

res.json(user);

}
catch(error){

res.status(500).json({ message: "User not found" });

}

};



/* DELETE USER */

exports.deleteUser = async (req,res)=>{

try{

await User.findByIdAndDelete(req.params.id);

res.json({ message: "User deleted" });

}
catch(error){

res.status(500).json({ message: "Error deleting user" });

}

};