import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: Date;
    private _colorfavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;
  
    constructor(
      nombre: string,
      apellidos: string,
      edad: number,
      dni: string,
      cumpleaños: Date,
      colorfavorito: string,
      sexo: string,
      direcciones: Direccion[],
      mails: Mail[],
      telefonos: Telefono[],
      notas: string
    ) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._edad = edad;
      this._dni = dni;
      this._cumpleaños = cumpleaños;
      this._colorfavorito = colorfavorito;
      this._sexo = sexo;
      this._direcciones = direcciones;
      this._mails = mails;
      this._telefonos = telefonos;
      this._notas = notas;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    get apellidos(): string {
      return this._apellidos;
    }
  
    set apellidos(apellidos: string) {
      this._apellidos = apellidos;
    }
  
    get edad(): number {
      return this._edad;
    }
  
    set edad(edad: number) {
      this._edad = edad;
    }
  
    get dni(): string {
      return this._dni;
    }
  
    set dni(dni: string) {
      this._dni = dni;
    }
  
    get cumpleaños(): Date {
      return this._cumpleaños;
    }
  
    set cumpleaños(cumpleaños: Date) {
      this._cumpleaños = cumpleaños;
    }
  
    get colorfavorito(): string {
      return this._colorfavorito;
    }
  
    set colorfavorito(colorfavorito: string) {
      this._colorfavorito = colorfavorito;
    }
  
    get sexo(): string {
      return this._sexo;
    }
  
    set sexo(sexo: string) {
      this._sexo = sexo;
    }
  
    get direcciones(): Direccion[] {
      return this._direcciones;
    }
  
    set direcciones(direcciones: Direccion[]) {
      this._direcciones = direcciones;
    }
  
    get mails(): Mail[] {
      return this._mails;
    }
  
    set mails(mails: Mail[]) {
      this._mails = mails;
    }
  
    get telefonos(): Telefono[] {
      return this._telefonos;
    }
  
    set telefonos(telefonos: Telefono[]) {
      this._telefonos = telefonos;
    }
  
    get notas(): string {
      return this._notas;
    }
  
    set notas(notas: string) {
      this._notas = notas;
    }
    añadirDireccion(direccion: Direccion) {
        this._direcciones.push(direccion)
    }
    
    añadirTelefono(telefono: Telefono) {
        this._telefonos.push(telefono)
    }
    
    añadirMail(mail: Mail) {
        this._mails.push(mail)
    }
  }