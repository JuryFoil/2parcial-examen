let eventos=["Boda", "Cumpleaños", "XV años"];

showDom("li", eventos);

function showDom(elemento, arr){
    for(let i=0; i<arr.length; i++){
        document.getElementById(elemento).innerHTML+=
        "<li>"+arr[i]+"</li>";
    }
}


// function crear() {
//    
// }

function borrar() {
}