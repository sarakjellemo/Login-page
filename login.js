
//skapa addEventlisterner på knapp 
document.getElementById("createAccountBtn").addEventListener("click", function() {
    console.log("click");

//local storage från array som skapas i input
 //function save(){
    //hämta data från input fälten 
    var new_data = document.getElementById('inputUserName').value;
    var new_data = document.getElementById('inputPassword').value;
    //om det inte är något sparat från start, spara en tom array
    if(localStorage.getItem("data") == null){
        localStorage.setItem("data",'[]','[]');
    }
    //get old data and slap it to the new data
    var old_data = JSON.parse(localStorage.getItem("data"));
    old_data.push(new_data);
    
    //save the old data + new data to local storage
    localStorage.setItem("data", JSON.stringify(old_data));
//}
});

var users = [
    {userName: "Sara", userPassword: "Kjellemo"},
    {userName: "Janne", userPassword: "Test"}
];
console.log("användare", users);

let saveToJson = JSON.stringify(users)
console.log("JSON", saveToJson);

localStorage.setItem("users", saveToJson);

let getFromStorage = localStorage.getItem("users");

let getusers = JSON.parse(getFromStorage);
console.log("Hämtad array", getusers);

document.getElementById("loginBtn").addEventListener("click", e =>{
    var userName = document.getElementById("usInput").value
    var userPassword = document.getElementById("psInput").value
    // console.log("you're username is "+ userName + " and your pasword is " + userPassword);
    //let loginForm = document.querySelector("#login");
    for (i = 0; i <users.length; i++) {
        if(userName == users[i].userName && userPassword == users[i].userPassword) {
             e.preventDefault();
            loginForm.classList.add("form-hidden");
            homepageForm.classList.remove("form-hidden");
            // document.getElementById("welcome").innerHTML="";
            document.getElementById("welcome").insertAdjacentHTML("beforeend", "Welcome " + userName );
            console.log(userName + " is logged in!");
            return 
        }
    } 
    e.preventDefault();
    document.getElementById("error").innerHTML = "Incorrect username or password";
    // console.log("incorrect username or password");   
});

let homepageForm = document.querySelector("#homePG");


//   var start = document.getElementById("startPage");
//  start.insertAdjacentHTML("afterbegin", <p>hejan</p>);
//  console.log(start, "START")


//homepage.insertAdjacentHTML("beforebegin", <p>hejsan</p>);

// document.getElementById("loginBtn").addEventListener("click", function() {
//     console.log("klick");
//     existinglist = JSON.parse(localStorage["data"]);
//   var uninput = document.getElementById('usInput').value;
//   var pwinput = document.getElementById('psInput').value;
//   for (var i=0; i <data.length; i++){
//       if (uninput == data[i]['usInput'] && pwinput == data[i]['psInput']){
//           Credential.alert('You have login succesfully');
//           break;
//       }   else {
//           alert('Invalid login');
//       }
//   }

// });


// function setFormMessage(formElement, type, message){
//     const messageElement = formElement.querySelector(".form_message");
    
//     messageElement.textContent = message;
//     messageElement.classList.remove("form_message-success", "form_message-error")
//     messageElement.classList.add(`form_message-${type}`);
// }

//  setFormMessage(loginForm, "success", "You're logged in!")

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

    //loginForm.addEventListener("submit", e => {
     //  e.preventDefault();

        //Lägg till det man ser när man loggar in beroende på value, om det funkar eller inte

       // setFormMessage(loginForm, "error", "Invalid username/password combination");
  // });
//});

