document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("form");
const username= document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Confirmpassword = document.getElementById("Confirmpassword");


function checkRequired(inputs){
    inputs.forEach((input) => {
        if (input.value.trim()==="") {
         //error
         errorInput(input,`${ getName(input)} is required`);
        } else {
            //Success
            successInput(input);

        }
        
    });
}
String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}
String.prototype.isAlpha = function() {
    return !!this.match(/^[a-zA-Z]*$/);
}
String.prototype.ispassword = function() {
    return !!this.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/);
}

function getName(input){
    return input.id;
}

function errorInput(input,message){
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
}

function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";
}
function checkLength(input,min,max){
    const data = input.value.trim().length;
    if(data>min){
        errorInput(input,`${ getName(input)} must be alteast greater than ${min} characters`);
    }else if (data>max){
        errorInput(input,`${ getName(input)} must be alteast lesser than ${max} characters`);
    }else {
        successInput(input);
    }

}

function checkConfirmpassword(password,Confirmpassword){
     if(password.value!=Confirmpassword.value){
        errorInput(Confirmpassword,`${ getName(Confirmpassword)} does not match`);
     }
}

function  checkemail(input){
 if(!input.value.trim().isEmail()){
    errorInput(input,`invalid email address`);
 }
}
function  checkAlpha(input){
 if(!input.value.trim().isAlpha()){
    errorInput(input, `username must be alphabet`);
 }
}
function   checkpassword(input){
 if(!input.value.trim().ispassword()){
    errorInput(input, `password must contain lower case,upper case,alphanumeric`);
 }
}

form.addEventListener("submit",function(e) {
    e.preventDefault();
    checkRequired([username,email, password, Confirmpassword]);
    checkLength(username,5,10);
    checkLength(password,5,10);
    checkConfirmpassword(password,Confirmpassword)
    checkemail(email)
    checkAlpha(username)
    checkpassword(password)

});
});

    
    