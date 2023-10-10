
//campos compartidos entre pacientes y medicos
const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const cedula = document.getElementById("cedula")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
//campo propio para medicos
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
//campos propios de pacientes
const edad = document.getElementById("edad")
//Llamado de los formularios
const formularioMedicos = document.getElementById("registros-medicos-form")
const formularioPacientes = document.getElementById("registro-pacientes-form")

class Usuario{
    constructor(nombres, apellidos, cedula, telefono, especialidad){
        this.nombres=nombres
        this.apellidos=apellidos
        this.cedula=cedula
        this.telefono=telefono
        this.especialidad=especialidad
    }
}
//el evento para formulario medicos va a ser de tipo guardar o enviar
// es decir tipo submit
formularioMedicos.addEventListener("submit", function(event){
    //previene que la pagina se recarge sin antes hacer la pagina del addEventListener
    event.preventDefault()

    let valorNombres = nombres.value;
    let valorApellidos = apellidos.value;
    let valorCedula = cedula.value;
    let valorConsultorio = consultorio.value;
    let valorTelefono = telefono.value;
    let valorCorreo = correo.value;
    let valorEspecialidad = especialidad.value;
    

    const medico = new Usuario(valorNombres, valorApellidos, valorCedula, valorTelefono, valorEspecialidad)
    medico.consultorio = valorConsultorio
    medico.correo = valorCorreo

   let medicos = []

   let localMedicos = localStorage.getItem("medicos")
   //si localMedicos no esta vacio lo convierte en objeto para hacer el psuh
   if(localMedicos){
    medicos = JSON.parse(localMedicos)
   }
   medicos.push(medico)
   localStorage.setItem("medicos", JSON.stringify(medicos))
   alert("medico registrado")
})

const mostrarMedicos = function (){
    let medicos = []
    let cuerpoTabla = document.getElementById("cuerpo-tabla-medicos")
    let localMedicos = localStorage.getItem("medicos")
    if(localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    medicos.forEach(medico => {
        let fila = document.createElement("tr")
        //para crear la celda DOM tiene un metodo que es insertCell()
        let celdaNombres = fila.insertCell()
        let celdaApellidos = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaPaciente = fila.insertCell()


        celdaNombres.textContent = medico.nombres
        celdaApellidos.textContent = medico.apellidos
        celdaCedula.textContent = medico.cedula
        celdaConsultorio.textContent = medico.consultorio
        celdaTelefono.textContent = medico.telefono
        celdaCorreo.textContent = medico.especialidad
        celdaPaciente.textContent = "Sin asignar"


        cuerpoTabla.appendChild(fila)
    })
}
if(window.location.href.endsWith("listado-medicos.html")){
    mostrarMedicos()
}

if (window.location.href.endsWith("registro-medicos-html")) {
    
}