window.alert("Hello !");

document.getElementById("b1").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "black";

    let z = document.getElementsByClassName("c"); 
    for(i = 0; i<z.length; i++){ 
        z[i].style.color = "white";
    }

    let y = document.getElementById("formTitle"); 
    y.style.color = "white";

    let m = document.getElementById("menu"); 
    m.style.color = "white";
}

document.getElementById("b2").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "white";

    let z = document.getElementsByClassName("c"); 
    for(i = 0; i<z.length; i++){ 
        z[i].style.color = "black";
    }

    let y = document.getElementById("formTitle"); 
    y.style.color = "black";

    let m = document.getElementById("menu"); 
    m.style.color = "black";
}

document.getElementById("b3").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "rgb(137,207,240)";

    let z = document.getElementsByClassName("c"); 
    for(i = 0; i<z.length; i++){ 
        z[i].style.color = "black";
    }

    let y = document.getElementById("formTitle"); 
    y.style.color = "black";

    let m = document.getElementById("menu"); 
    m.style.color = "black";
}

document.getElementById("submit").addEventListener("click", (event)=>{ 
    event.preventDefault(); 
    let message = document.getElementById("demo");
    let fname = document.getElementById("fName").value; 
    let lname = document.getElementById("lName").value;
    let num = document.getElementById("number").value; 
    let mail = document.getElementById("email").value;
    let addr = document.getElementById("address").value; 
    let code = document.getElementById("code").value;

     if(!mail.includes("@")){ 
        message.style.color = "red";
        message.style.fontSize = "20px";
        message.innerHTML = "Please enter a valid email";
    } else if(num.length != 10){ 
        message.style.color = "red";
        message.style.fontSize = "20px";
        message.innerHTML = "Please enter a valid phone number";
    } 
    else if(valid(code)){ 
        message.style.color = "red";
        message.style.fontSize = "20px";
        message.innerHTML = "Please enter a valid Postal Code"; 
    } else { 
        message.style.color = "green";
        message.style.fontSize = "20px";
        message.innerHTML = "Thank you for the contact !";
    }
}); 

function valid(input){ 
    let pattern = /[A-Za-z]\d[A-Za-z] \d\[A-Za-z]\d/; 
    return pattern.test(input); 
}
