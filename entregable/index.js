//variables y funciones

let nombreUsuario = prompt("Bienvenido, ingrese su nombre por favor: ");
let entrada = prompt("Hola"+" "+nombreUsuario+"! "+"Ingrese los cursos que quiere realizar. Escriba ESC para salir: ");
let unaFecha;

//llamada de la funcion
elegirCurso(entrada);


//espacio para definir funciones
function elegirCurso(entrada) {
    
    while (entrada != "ESC") {
        switch(entrada) {
            case "1": 
                fechaIncio7regiones = new Date(2023,12,30);
                if (chequearFechas(fechaIncio7regiones) == false) {
                    alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }
                else if (chequearFechas(fechaIncio7regiones) == true) {
                    alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de 7 regiones: ");
                    abrirFormulario();
                    despedirUsuario(nombreUsuario);
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }
            default:
                alert("Disculpe que no podamos ayudarlo! El curso que ingreso no se encuentra disponible momentaneamente");
                entrada = prompt("Escriba ESC para salir ");
                break;  
            }
        } 
    } 

function evaluarNombre(nombre) {

    if (nombre == ""){
        alert("Usted no posee otros nombres");    
    }
    else {
        alert("Su segundo nombre es: "+nombre);
    }
}

function despedirUsuario(nombreUsuario) {
    alert("Gracias por confiar en nosotros"+" "+nombreUsuario+" "+"le aseguramos que será una experiencia sumamente enriquecedora");
}

function chequearFechas(unaFecha) {
    if (unaFecha < fechaActual) {
        return false;
    }
    else {
        return true;
    }

}


