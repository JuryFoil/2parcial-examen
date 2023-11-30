let eventos=["Boda", "Cumpleaños", "XV años"];

// showDom("li", eventos);

// function showDom(element, arr){
//     for(let i=0; i<arr.length; i++){
//         document.getElementById(element).innerHTML+=
//         "<li>"+arr[i]+"</li>";
//     }
// }

function crear(){
    let input=document.getElementById("inputt").value;
    eventos=eventos.concat(input);
    document.getElementById("inputt").value="";
    document.getElementById("lis").innerHTML=eventos.join("<li>");
}


function borrar(){ 
    console.log(eventos)
    eventos.splice(-1,1);
    document.getElementById("lis").innerHTML=eventos.join("<li>");
}


