// ----------------------
// REGISTER USER
// ----------------------

async function addUser(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let offer = document.getElementById("offer").value;
let want = document.getElementById("want").value;

if(!name || !email || !password || !offer || !want){
Swal.fire("Please fill all fields");
return;
}

let user = {
name,
email,
password,
offer: offer.toLowerCase(),
want: want.toLowerCase()
};

try{

let response = await fetch("http://localhost:5000/api/users/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
});

let data = await response.json();

localStorage.setItem("userId", data._id);

Swal.fire("Profile Created!").then(()=>{
goToPage("profile.html");
});

}
catch(error){
console.log(error);
}

}



// ----------------------
// LOGIN USER
// ----------------------

async function loginUser(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(!email || !password){
Swal.fire("Enter email & password");
return;
}

try{

let response = await fetch("http://localhost:5000/api/users/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({email,password})
});

let data = await response.json();

if(response.status !== 200){
Swal.fire(data.message);
return;
}

localStorage.setItem("userId", data._id);

Swal.fire("Login Successful").then(()=>{
goToPage("profile.html");
});

}
catch(error){
console.log(error);
}

}



// ----------------------
// LOAD PROFILE
// ----------------------

async function loadProfile(){

let id = localStorage.getItem("userId");
let profile = document.getElementById("profile");

if(!profile) return;

if(!id){
profile.innerHTML = "<p>No profile found</p>";
return;
}

try{

let response = await fetch("http://localhost:5000/api/users/"+id);
let user = await response.json();

profile.innerHTML = `
<div class="profile-container">
<div class="profile-card">

<img class="profile-avatar"
src="https://i.pravatar.cc/150?u=${user.name}">

<h2>${user.name}</h2>

<p>💻 Offers: ${user.offer}</p>
<p>🎯 Wants: ${user.want}</p>

<button class="delete-btn" onclick="deleteProfile()">
Delete Profile
</button>

</div>
</div>
`;

}
catch(error){
console.log(error);
}

}



// ----------------------
// DELETE PROFILE
// ----------------------

async function deleteProfile(){

let id = localStorage.getItem("userId");

if(!id){
Swal.fire("No Profile Found");
return;
}

let confirm = await Swal.fire({
title:"Delete Profile?",
icon:"warning",
showCancelButton:true
});

if(confirm.isConfirmed){

await fetch("http://localhost:5000/api/users/"+id,{
method:"DELETE"
});

localStorage.removeItem("userId");

Swal.fire("Deleted").then(()=>{
goToPage("index.html");
});

}

}



// ----------------------
// GET USERS
// ----------------------

async function getUsers(){

try{
let response = await fetch("http://localhost:5000/api/users");
return await response.json();
}
catch(error){
console.log(error);
}

}



// ----------------------
// LOGOUT
// ----------------------

function logout(){

localStorage.removeItem("userId");

Swal.fire("Logged out").then(()=>{
goToPage("login.html");
});

}



// ----------------------
// NAVIGATION
// ----------------------

function goToPage(url){

document.body.classList.add("page-crush");

setTimeout(()=>{
window.location.href = url;
},600);

}