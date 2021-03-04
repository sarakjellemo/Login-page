
let users = [
    {userName: "Sara", userPassword: "Kjellemo"},
    {userName: "Janne", userPassword: "Test"},
    {userName: "Karl", userPassword: "Test2"},
    {userName: "Helena", userPassword: "Test3"}
    
];

//CREATE NEW ACCOUNT
const addUsers = e=>{
   e.preventDefault();
   let inputUsers = {
    userName: document.getElementById("inputUserName").value,
    userPassword: document.getElementById("inputPassword").value
}
    if(inputUserName.value && inputPassword.value){
        users.push(inputUsers);
        // document.forms[0].reset();
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem(`users${inputUsers}`, JSON.stringify(users));
        document.getElementById("userAdded").innerHTML = "New account is added!"
    } 
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("createAccountBtn").addEventListener('click', addUsers);
});

// STAY LOGGED IN
if (localStorage.getItem("loggedInUser") != undefined) {
     let currentUser = localStorage.getItem("loggedInUser");
       document.getElementById("login");
       document.getElementById("homePG")
       login.classList.add("form-hidden");
       homePG.classList.remove("form-hidden");
       logOut();
}
//LOGIN PAGE 
loggIn();
function loggIn(){
document.getElementById("loginBtn").addEventListener("click", e =>{
    var userName = document.getElementById("usInput").value
    var userPassword = document.getElementById("psInput").value
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    localStorage.setItem("loggedInUser", JSON.stringify (userName + userPassword));
    // console.log("you're username is "+ userName + " and your pasword is " + userPassword);
    for (let i = 0; i <storedUsers.length; i++) {
        if(userName == storedUsers[i].userName && userPassword == storedUsers[i].userPassword) {
          e.preventDefault();
          loginForm.classList.add("form-hidden");
          homepageForm.classList.remove("form-hidden");
          document.getElementById("welcome").insertAdjacentHTML ("beforeend", userName + " is now logged in" );
          console.log(userName + " is logged in!");
          localStorage.setItem("loggedInUser", JSON.stringify (userName + userPassword));
         logOut();
         return; 
        }
    } 
    e.preventDefault();
    document.getElementById("error").innerHTML = "Incorrect username or password";
    // console.log("incorrect username or password"); 
});
}
// LOG OUT 
logOut();
function logOut() {
    let logOut = document.getElementById("loBtn");
    logOut.addEventListener("click", function() {
        localStorage.removeItem("loggedInUser");
        console.log("du har loggat ut");
        document.getElementById("login");
        document.getElementById("homePG")
        login.classList.remove("form-hidden");
        homePG.classList.add("form-hidden");
    });
}


//SWICH FROM LOGIN PAGE TO CREATE ACCOUNT PAGE 
let homepageForm = document.querySelector("#homePG");
console.log("Hallå");
    let loginForm = document.querySelector("#login");
    console.log(loginForm);
    let createAccountForm = document.querySelector("#createAccount");
    console.log(createAccountForm);

//byter från login läge till create account
//document.addEventListener("DOMContentLoaded", () => { //Lyssna på event på DOMen 
    document.querySelector("#linkCreateAccount").addEventListener("click", e => { //när man trycker på linkCreateAccount så gömmer man linkLogin
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => { //när man trycker på linkLogin så gömmer man linkCreateAccount
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

  
