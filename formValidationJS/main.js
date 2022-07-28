const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".alert-container");
const message = document.getElementById("alert");

let isValid = false;

function validateform()
{
    let isValid = form.checkValidity();
    console.log(isValid); 
    console.log(password2.value, password1.value);


//password match

if(password1.value===password2.value){
    passWordsMatch = true;
    password1.style.borderColor = "green";
    password2.style.borderColor = "green";
}
else
{
    passWordsMatch = false;
    message.textContent = "make sure password matches";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1.style.color = "red";
    password2.style.color = "red";
}

//if forms valid and psswords matches

if(isValid && passWordsMatch){
    message.textContent = "Succesfully Registered";
    message.style.color = " green";
    messageContainer.style.borderColor = "green";
}
}

function storeFormData()
{
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value,

    }

    console.log(user);
}



function processFormData(e)
{
    e.preventDefault();

//vaidate form

    validateform();

    let isValid = form.checkValidity();

    //submit data is valid

    if(isValid && passWordsMatch){
        storeFormData();
    }

}

window.addEventListener("submit", processFormData);