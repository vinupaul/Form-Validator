const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");



//Show input error message
function showError(input,message){
 var formControl = input.parentElement;
 formControl.className = "form-control error"
 const small = formControl.querySelector("small");
 small.innerText = message;
}

//Show input error message
function showSucess(input,message){
    var formControl = input.parentElement;
    formControl.className = "form-control sucess"
   }

// Check email is valid or not
function isEmailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function isPhoneNumberValid(phone){
  var phoneno = /^\d{10}$/;
  return phoneno.test(String(phone));
}


//Event listener
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(username.value == ""){
        showError(username,"username is requried");
    }else{
        showSucess(username);
    }

    if(email.value == ""){
        showError(email,"email is requried");
    }else if(!isEmailValid(email.value)){
        showError(email,"email is not valid")
    }
    else{
        showSucess(email);
    }


    if(password.value == ""){
        showError(password,"password is requried");
    }else{
        showSucess(password);
    }

    if(password2.value == ""){
        showError(password2,"password is requried");
    }else{
        showSucess(password2);
    }

    if(password.value === password2.value){
        showSucess(password);
    }else{
        showError(password2,"Password don't match");
    }

    if(phone.value == ""){
        showError(phone,"Phone number is requried");
    }else if(!isPhoneNumberValid(phone.value)){
        showError(phone,"Phone number is Invalid");
    }else{
        showSucess(phone);
    }


    // console.log(username.value);



}
);