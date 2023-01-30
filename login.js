function login(){
    var uname = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    
    if(uname==''){
        alert("Plese enter user name!");
    }
    else if(pass==''){
        alert("Plese enter Password!");
    }
    else if(pass.length<6||pass.length>6){
        alert("Password is min and max length is 6.");
    }
    else
    {
        alert("Login Succesfully!");
        window.location="reg.html"
        
    }
    
}