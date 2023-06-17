import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';



const direccionJuan = new Direccion(
    "Calle Azpelicueta",
    23,
    6,
    "A",
    34234,
    "Madrid",
    "Comunidad Madrid"
  )
  const mailJuan = new Mail(
    "personal",
    "ajrl30@gmail.com"
  )
  const telefonoJuan = new Telefono(
    "movil",
    692382923
  )

  const personaJuan = new Persona(
    "Juan",
    "Ramirez Lopez",
    30,
    "42342322H",
    new Date(1993, 10, 12),
    "azul",
    "masculino",
    [direccionJuan],
    [mailJuan],
    [telefonoJuan],
    "Amigo de Laura"
  )

  const primeraDireccionJaime = new Direccion(
    "Calle Mayor",
    23,
    5,
    "B",
    50300,
    "Calatayud",
    "Zaragoza"
  )
  const segundaDireccionJaime = new Direccion(
    "Calle Mayor",
    23,
    5,
    "B",
    50300,
    "Calatayud",
    "Zaragoza"
  )
  const primermailJaime = new Mail(
    "personal",
    "jsuarez1@gmail.com"
  )
  const segundomailJaime = new Mail(
    "trabajo",
    "suarez.jaime@gmail.com"
  )
  const telefonoJaime = new Telefono(
    "movil",
    623982332
  )
   
  const pesonaJaime = new Persona(
    "Jaime",
    "Suarez Suarez",
    45,
    "42342324I",
    new Date(1998, 4, 15),
    "rojo",
    "masculino",
    [primeraDireccionJaime, segundaDireccionJaime],
    [primermailJaime, segundomailJaime],
    [telefonoJaime],
    "Del trabajo"
  )

  const direccionLaura = new Direccion(
    "Calle Alvarado",
    21,
    2,
    "D",
    23423,
    "San sebastian",
    "Santa Cruz de Tenerife"
  )

  const mailLaura = new Mail(
    "personal",
    "alcaidelaura@gmail.com"
  )

  const primertelefonoLaura = new Telefono(
    "movil",
    678923412
  )
  const segundotelefonoLaura = new Telefono(
    "fijo",
    910232493
  )
  const personaLaura = new Persona(
    "Laura",
    "Alcaide",
    25,
    "712931212H",
    new Date(2001, 7, 25),
    "rojo",
    "femenino",
    [direccionLaura],
    [mailLaura],
    [primertelefonoLaura, segundotelefonoLaura],
    "Amiga"
  )
  const contactos: Persona [] = [personaJuan, pesonaJaime, personaLaura];

  console.log("Contactos:");
  console.log(personaJuan);
  console.log(pesonaJaime);
  console.log(personaLaura);
  

  function modificarPersonaPorDNI( 
    dni:string,
    nuevaDireccion: Direccion,
    nuevoMail: Mail,
    nuevoTelefono: Telefono
    )
    {

    // Buscar la persona por el DNI
    const personaEncontrada = contactos.find((persona) => persona.dni === dni);
  
    // Si se encontró la persona
    if (personaEncontrada) {
      // Modificar la dirección, el mail y el teléfono
      personaEncontrada.añadirDireccion(nuevaDireccion);
      personaEncontrada.añadirMail(nuevoMail);
      personaEncontrada.añadirTelefono(nuevoTelefono);
  
      console.log("Contactos actualizados");
      console.log(personaJuan);
      console.log(pesonaJaime);
      console.log(personaLaura);
    } else {
      console.log("No se encontró ninguna persona con el DNI especificado. No se ha actualizado nigún campo");
      console.log(personaJuan);
      console.log(pesonaJaime);
      console.log(personaLaura);
    }
}

modificarPersonaPorDNI(
    "71293f1212H",
    new Direccion(
        "Calle Ramiro",
        212,
        6,
        "J",
        334,
        "Valencia",
        "Comunitat Valencia"
      ),
      new Mail(
        "personal",
        "aasdfas@gmail.com"
      ),
      new Telefono(
        "movil",
        72342342
      )
  );
  

