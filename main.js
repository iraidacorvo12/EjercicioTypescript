"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var direccionJuan = new direccion_1.Direccion("Calle Azpelicueta", 23, 6, "A", 34234, "Madrid", "Comunidad Madrid");
var mailJuan = new mail_1.Mail("personal", "ajrl30@gmail.com");
var telefonoJuan = new telefono_1.Telefono("movil", 692382923);
var personaJuan = new persona_1.Persona("Juan", "Ramirez Lopez", 30, "42342322H", new Date(1993, 10, 12), "azul", "masculino", [direccionJuan], [mailJuan], [telefonoJuan], "Amigo de Laura");
var primeraDireccionJaime = new direccion_1.Direccion("Calle Mayor", 23, 5, "B", 50300, "Calatayud", "Zaragoza");
var segundaDireccionJaime = new direccion_1.Direccion("Calle Mayor", 23, 5, "B", 50300, "Calatayud", "Zaragoza");
var primermailJaime = new mail_1.Mail("personal", "jsuarez1@gmail.com");
var segundomailJaime = new mail_1.Mail("trabajo", "suarez.jaime@gmail.com");
var telefonoJaime = new telefono_1.Telefono("movil", 623982332);
var pesonaJaime = new persona_1.Persona("Jaime", "Suarez Suarez", 45, "42342324I", new Date(1998, 4, 15), "rojo", "masculino", [primeraDireccionJaime, segundaDireccionJaime], [primermailJaime, segundomailJaime], [telefonoJaime], "Del trabajo");
var direccionLaura = new direccion_1.Direccion("Calle Alvarado", 21, 2, "D", 23423, "San sebastian", "Santa Cruz de Tenerife");
var mailLaura = new mail_1.Mail("personal", "alcaidelaura@gmail.com");
var primertelefonoLaura = new telefono_1.Telefono("movil", 678923412);
var segundotelefonoLaura = new telefono_1.Telefono("fijo", 910232493);
var personaLaura = new persona_1.Persona("Laura", "Alcaide", 25, "712931212H", new Date(2001, 7, 25), "rojo", "femenino", [direccionLaura], [mailLaura], [primertelefonoLaura, segundotelefonoLaura], "Amiga");
var contactos = [personaJuan, pesonaJaime, personaLaura];
console.log("Contactos:");
console.log(personaJuan);
console.log(pesonaJaime);
console.log(personaLaura);
function modificarPersonaPorDNI(dni, nuevaDireccion, nuevoMail, nuevoTelefono) {
    // Buscar la persona por el DNI
    var personaEncontrada = contactos.find(function (persona) { return persona.dni === dni; });
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
    }
    else {
        console.log("No se encontró ninguna persona con el DNI especificado.");
    }
}
modificarPersonaPorDNI("712931212H", new direccion_1.Direccion("Calle Ramiro", 212, 6, "J", 334, "Valencia", "Comunitat Valencia"), new mail_1.Mail("personal", "aasdfas@gmail.com"), new telefono_1.Telefono("movil", 72342342));
