
let boton1 = document.getElementById("ingresar");
boton1.addEventListener("click", ingresarClick);
function ingresarClick(){
  nombre()
};

function nombre(){
    let nombre = prompt ("Ingrese su nombre");

        let nombrePersona = document.createElement("h4");
        nombrePersona.innerHTML = "Nombre : " + nombre;
        document.body.append(nombrePersona);

    let edad = prompt ("Ingrese su edad");

        let edadPersona = document.createElement("h4");
        edadPersona.innerHTML = "Edad : " + edad;
        document.body.append(edadPersona);

    let permiso = edad >= 18 ? true : false;

    while (permiso === true){
        alert("ingreso"),
        ingresa();
        
        break;
    }
    while(permiso === false){
        alert("ni ingreso"),
        noIngresa();
        break;
    }
 
    };



    function ingresa(){
        const boton2 = document.getElementById("aceptar");
        boton2.addEventListener("click", () => (
            Swal.fire({
                icon: 'Bienvenido',
                title: 'Puede ingresar',
                text: 'Disfrute',
                footer: '<Ingresar?</a>'
              }
    
            ))
        )

    }



    function noIngresa(){
        const boton2 = document.getElementById("aceptar");
        boton2.addEventListener("click", () => (
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No cumple el eequisito de altura',
                footer: '<a href="">Why do I have this issue?</a>'
              }
    
            ))
        )
        
    }
  







