let edad = prompt("¿Cuál es tu edad?");
if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}

function verificarEdad() {
    
    let edad = document.getElementById("edad").value;
    if (edad >= 18) {
        let mensaje = "Eres mayor de edad.";
        document.getElementById("resultado").innerText = mensaje;
    } else {
        let mensaje = "Eres menor de edad.";
        document.getElementById("resultado").innerText = mensaje;       
    }
}