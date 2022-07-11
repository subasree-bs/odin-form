// let pwd = document.getElementById("pwd");
// let c_pwd = document.getElementById("c_pwd");

function validate(){
if(document.getElementById("pwd").value != document.getElementById("c_pwd").value) {  
    document.getElementById("pwd").style.border="2px solid red";
    document.getElementById("c_pwd").style.border="2px solid red";
    document.getElementById("message1").innerHTML = "Passwords do not match";  
  } else {  
    // alert ("Your password has been created successfully");  
    document.getElementById("message1").style.color="#fff";
    document.getElementById("pwd").style.border="2px solid green";
    document.getElementById("message1").innerHTML = "Passwords match";
  }  
}