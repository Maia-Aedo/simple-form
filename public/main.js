// obtiene formulario
const form = document.querySelector('#form');

const imprimirDatos =(event)=>{
    // previene que el formulario se envie de manera predeterminada
    event.preventDefault();
    // creamos obj de tipo formdata | target otorga acceso al form
    const info = new FormData(event.target);
    // fromEntries transforma los valores de cada input en un objeto y obtiene info que representa el obj formdata
    const datos = Object.fromEntries(info.entries());
    // console.log(datos)
    // pasar obj a json
    console.log(JSON.stringify(datos));
}

form.addEventListener('submit', imprimirDatos)
