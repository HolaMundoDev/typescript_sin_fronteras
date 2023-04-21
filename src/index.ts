let mensaje: string = "Hola Mundo";
mensaje = "Chanchito feliz"

mensaje = "Chao Mundo";
console.log(mensaje);
console.log(typeof [])

let extincionDinosaurios: number = 76_000_000;
let dinosauioFavorito: string = "Tyrannosaurus Rex";
let extintos = true;

let miVariable
miVariable = "Chanchito Feliz";
miVariable = 100;

function chanchitoFeliz(config: any) {
  return config
}

let animales: string[] = ["Chanchito", "Feliz", "Felipe"]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []
// animales.map(x => x)
// nums.map(x => x)

let tupla: [number, string[]] = [1, ["chanchito feliz"]] //solo se puede agregar un string y un numero
tupla.push(12)

// enum

enum Talla { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" }
const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error } // se le coloca const para que no se cree un objeto en el js si no que se le asignará el valor a las variables como la siguiente linea:
const estado = LoadingState.Success // 1

type Direccion = {
  numero: number,
  calle: string,
  pais: string
}

type Persona = {
  readonly id: number,
  nombre?: string
  talla: Talla
  direccion: Direccion
}

const objeto: Persona = {
  id: 1,
  nombre: "Hola Mundo",
  talla: Talla.Chica,
  direccion: {
    numero: 1,
    calle: "Calle 1",
    pais: "Colombia"
  }
}

const arr: Persona[] = []

const fn: (a: number) => string = (edad: number) => {
  if (edad > 17) {
    return "Puedes ingresar"
  }
  return "No Puedes ingresar"
}

function validaEdad(edad: number, msg: string = "Chanchito Feliz"): string {
  if (edad > 17) {
    return `Puedes ingresar ${msg}`
  }
  return "No Puedes ingresar"
}


validaEdad(18)

function ErrorUsuario(): never {
  throw new Error("error de usuario")
}


// Union Types
let puntaje: number | string = 98
puntaje = "hola mundo"

type Animal = {
  id: number,
  estado: string
}

type Usuario = {
  id: number,
  name: string
}

let animal: Usuario | Animal = { id: 1, estado: "", name: "" }

function sumaDos(n: number | string): number {
  if (typeof n === "number") {
    n + 2
  }
  return parseInt(n) + 2
}

sumaDos("2")


// Intersection Types
type Audit = {
  created_at: string,
  modified_at: string
}

type Product = {
  name: string,
}

const product: Audit & Product = {
  name: "Chanchito Feliz",
  created_at: "",
  modified_at: ""
}

// Literal types

type fibo = 0 | 1 | 2 | 3 | 5
const nDeFibo: fibo = 3
