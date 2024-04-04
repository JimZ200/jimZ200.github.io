document.getElementById("submit").addEventListener("click", ()=>{ 
    let x = document.getElementById("sport").value.toLowerCase();
    let y = document.getElementById("demo"); 
    if(x.length == 0){ 
        y.innerHTML = "please input some text";
    } else if(x == "soccer"){ 
        y.innerHTML = "Good choice !";
    } else { 
        y.innerHTML = "Soccer is better :)";
    }
});

document.getElementById("b1").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "Black";

    let y = document.getElementById("intro"); 
    y.style.color = "white"; 

    let z = document.getElementById("title"); 
    z.style.color = "white";
} 

document.getElementById("b2").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "white";

    let y = document.getElementById("intro"); 
    y.style.color = "black"; 

    let z = document.getElementById("title"); 
    z.style.color = "black";
} 

document.getElementById("b3").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "rgb(137,207,240)";

    let y = document.getElementById("intro"); 
    y.style.color = "black"; 

    let z = document.getElementById("title"); 
    z.style.color = "black";
} 



