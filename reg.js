function submit(){
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var mbn = document.getElementById("mbn").value;
    var mail = document.getElementById("email").value;
    var add = document.getElementById("add").value;
    var clg = document.getElementById("clg").value;
    var Branch = document.getElementById("Branch").value;
    
    if(name==''){
        alert("Plese enter name!");
    }
    else if(fname==''){
        alert("Plese enter father's name!");
    }
    else if(mbn.length<10||mbn.length>10){
        alert("Mobile Number is min and max length is 10.");
    }
    else if(mail==''){
        alert("Plese Enter Email id!");
    }
    else if(add==""){
        alert("Plese Enter Address!");
    }
    else if(clg==''){
        alert("Plese Enter College Name!");

    }
    else if(Branch==''){
        alert("Plese Enter Branch!");
    }

    
    else
    {
        alert("Your Registration Succesfully Done!");
    }
    
}