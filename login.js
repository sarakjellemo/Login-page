console.log("Hej");

function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message");
    
    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error")
    messageElement.classList.add(`form_message-${type}`);
}

// setFormMessage(loginForm, "success", "You're logged in!")

document.addEventListener("DOMContentLoaded", () => { //Lyssna på event på DOMen 
    console.log("Hallå");
    const loginForm = document.querySelector("#login");
    console.log(loginForm);
    const createAccountForm = document.querySelector("#createAccount");
    console.log(createAccountForm);

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

    loginForm.addEventListener("submit", e => {
       e.preventDefault();

        //Lägg till det man ser när man loggar in beroende på value, om det funkar eller inte

       // setFormMessage(loginForm, "error", "Invalid username/password combination");
   });
});

