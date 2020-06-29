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

// Check E-mail is valid or not
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSucess(input);
    }else{
        showError(input,"Email is not valid")
    }
}

// Check requried fields
function checkRequried(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() == ""){
            showError(input,`${getFieldName(input)} is requried`);
        }else{
            showSucess(input);
        }
    });
}

// Check length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        showSucess(input);
    }
}

// Check is the passwords match
function checkPasswordsMatch(input1,input2){
    if(input1.value != input2.value){
        showError(input2,"Passwords do not match");
    }
}


// Get Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() +input.id.slice(1);
}


function isPhoneNumberValid(phone){
    var phoneno = /^\d{10}$/;
    // return phoneno.test(String(phone));
    if(phone.value == ""){
        showError(input,"Enter number");
    }
    else if(phoneno.test(String(phone))){
        showSucess(input);
        // showError(input,"Invalid Number");
    }else{
        // showSucess(input);
        showError(input,"Invalid Number");
    }
  }




//Event listener
form.addEventListener("submit",(e) =>{
    e.preventDefault();

    checkRequried([username,email,password,password2])
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
    isPhoneNumberValid(phone);
}
);