
let users = [
    {userName: "Sara", userPassword: "Kjellemo"},
    {userName: "Janne", userPassword: "Test"},
    {userName: "Karl", userPassword: "Test2"},
    {userName: "Helena", userPassword: "Test3"}
    
];

const addUsers = e=>{
    e.preventDefault();
    let inputUsers = {
        userName: document.getElementById("inputUserName").value,
        userPassword: document.getElementById("inputPassword").value
    }
    users.push(inputUsers);
    document.forms[0].reset();

    document.getElementById("userAdded").innerHTML = "New account is added!"  
    localStorage.setItem("users", JSON.stringify(users));
    
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("createAccountBtn").addEventListener('click', addUsers);
});


let loggedInUser = [{userName: "", userPassword: ""}];

document.getElementById("loginBtn").addEventListener("click", e =>{
    var userName = document.getElementById("usInput").value
    var userPassword = document.getElementById("psInput").value
    // console.log("you're username is "+ userName + " and your pasword is " + userPassword);
    for (i = 0; i <users.length; i++) {
        if(userName == users[i].userName && userPassword == users[i].userPassword) {

             localStorage.setItem("loggedInUser", JSON.stringify (userName));
            e.preventDefault();
            loginForm.classList.add("form-hidden");
            homepageForm.classList.remove("form-hidden");
            document.getElementById("welcome").insertAdjacentHTML("beforeend", userName + " is now logged in" );
            console.log(userName + " is logged in!");
            return 
        }
    } 
    e.preventDefault();
    document.getElementById("error").innerHTML = "Incorrect username or password";
    // console.log("incorrect username or password");   
});

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


