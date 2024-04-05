document.getElementById("b1").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "black";

   const y = document.querySelectorAll('*'); 
   y.forEach(element => { 
    element.style.borderColor = "white";
   });

   let z = document.getElementsByClassName("c"); 
   for(i =0; i<z.length; i++){ 
    z[i].style.color = "white";
   }

    let m = document.getElementsByClassName("title");
   for(i =0; i<m.length; i++){ 
    m[i].style.color = "white";
   }

   let n = document.getElementById("menu"); 
   n.style.color = "white";
}

document.getElementById("b2").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "white";

    let y = document.getElementsByClassName("c"); 
    for(i = 0; i<y.length; i++){ 
        y[i].style.color = "black";
    }

    const z = document.querySelectorAll('*'); 
    z.forEach(element =>{ 
        element.style.borderColor = "black";
    });

    let m = document.getElementsByClassName("title");
   for(i =0; i<m.length; i++){ 
    m[i].style.color = "black";
   }

   let n = document.getElementById("menu"); 
   n.style.color = "black";
}

document.getElementById("b3").onclick = function(){ 
    let x = document.getElementById("bd"); 
    x.style.backgroundColor = "rgb(137,207,240)";

    let y = document.getElementsByClassName("c"); 
    for(i = 0; i<y.length; i++){ 
        y[i].style.color = "black";

   let m = document.getElementsByClassName("title");
   for(i =0; i<m.length; i++){ 
    m[i].style.color = "black";
   }

   let n = document.getElementById("menu"); 
   n.style.color = "black";
    

    const z = document.querySelectorAll('*'); 
    z.forEach(element =>{ 
        if(!element.matches('p ~ img')){ 
            element.style.borderColor = "black"; 
        }
    });
}
