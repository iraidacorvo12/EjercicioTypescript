export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigoPostal: number;
    private _poblacion: string;
    private _provincia: string;
  
    constructor(
      calle: string,
      numero: number,
      piso: number,
      letra: string,
      codigoPostal: number,
      poblacion: string,
      provincia: string
    ) {
      this._calle = calle;
      this._numero = numero;
      this._piso = piso;
      this._letra = letra;
      this._codigoPostal = codigoPostal;
      this._poblacion = poblacion;
      this._provincia = provincia;
    }
  
    get calle(): string {
      return this._calle;
    }
  
    set calle(calle: string) {
      this._calle = calle;
    }
  
    get numero(): number {
      return this._numero;
    }
  
    set numero(numero: number) {
      this._numero = numero;
    }
  
    get piso(): number {
      return this._piso;
    }
  
    set piso(piso: number) {
      this._piso = piso;
    }
  
    get letra(): string {
      return this._letra;
    }
  
    set letra(letra: string) {
      this._letra = letra;
    }
  
    get codigoPostal(): number {
      return this._codigoPostal;
    }
  
    set codigoPostal(codigoPostal: number) {
      this._codigoPostal = codigoPostal;
    }
  
    get poblacion(): string {
      return this._poblacion;
    }
  
    set poblacion(poblacion: string) {
      this._poblacion = poblacion;
    }
  
    get provincia(): string {
      return this._provincia;
    }
  
    set provincia(provincia: string) {
      this._provincia = provincia;
    }
  }