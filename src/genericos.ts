// function log(a: string, b: string) {
//   console.log(a, b);
// }

// function logN(a: string, b: number) {
//   console.log(a, b);
// }

function log<T, V>(a: T, b: V): V {
  console.log(a, b);
  return b;
}



log<string, number>("dato", 42);
log<string, string>("dato", "Chanchito feliz");
log("Saludo", "Hola Mundo");

async function fetchData<T>(recurso: string): Promise<T> {
  const response = await fetch(recurso);
  const data = await response.json();
  return data;
}

type User = {
  id: string;
  name: string;
}


async function main() {
  const user = await fetchData<User>('/usuarios');
  // user.id
  // user.name
}

type Computador = {
  encender: () => void;
  apagar: () => void;
}
class Programador<T> {
  computador: T
  constructor(t: T) {
    this.computador = t
  }
}

const programador = new Programador<Computador>({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador<string>("Hola");

// programador.computador.apagar();
// programador1.computador.toLocaleLowerCase();

interface KeyValue<T, V> {
  key: T;
  value: V;
}

interface Product {
  id: string
}

function fetchProduct(): KeyValue<string, Product> {
  return { key: 'id del producto', value: { id: 'id del producto' } }
}

function fetchStock(): KeyValue<string, number> {
  return { key: 'id del producto', value: 20 }
}

// interface Usuario {
//   id: string;
//   name: string;
// }

class Usuario {
  constructor(public id: string) { }
}

function print<T extends Usuario>(t: T): T {
  console.log(t);
  return t;
}

// print(42) // Error
// print({ name: 'Felipe' }) // Error
print({ id: 'user_id', name: 'Felipe', })

// Pasar el genérico
class Estado<T> {
  protected data: T[] = [];

  agregar(t: T): void {
    this.data.push(t);
  }

  getEstado(): T[] {
    return this.data;
  }
}

type ObjectId = {
  id: string;
}

// Pasar el genérico con restricciones
class EstadoEliminar<T extends ObjectId> extends Estado<T>{
  eliminar(id: string): void {
    this.data = this.data.filter(x => x.id !== id);
  }
}

const estadoEliminar = new EstadoEliminar<Usuario>();
// estadoEliminar.agregar({ id: '1' });
// estadoEliminar.getEstado();
// estadoEliminar.eliminar('1');


// pasar el genérico fijo
class EstadoUsuario extends Estado<Usuario>{
  // reiniciarContraseñas(): {
  //
}

type Calendar = {
  id: number,
  fuente: string,
  dueño: string,
}

const calendar: Calendar = { id: 1, fuente: "Google", dueño: 'yo' };

function getProp<T>(objeto: T, property: keyof T): unknown {
  return objeto[property];
}

getProp<Calendar>(calendar, 'id');
getProp<Calendar>(calendar, 'fuente');
// getProp<Calendar>(calendar, 'propiedadQueNoExiste'); // Error

type Punto = {
  x: number;
  y: number;
  desc?: string;
}

// Utility types
type PuntoOptional = Partial<Punto>  // todas las propiedades son opcionales
type PuntoRequired = Required<Punto> // todas las propiedades son requeridas

const KeyVal: Record<string, number> = {
  "soy un string": 42
}

// type kv = { [key: string]: number } // equivalente a Record<string, number>

const p: Omit<Punto, "desc" | "y"> = {
  x: 1,
  // y: 2, // Error
}

const p1: Pick<Punto, "x" | "y"> = {
  x: 1,
  y: 2,
  // desc: "hola", // Error
}

const readOnlyP: Readonly<Punto> = {
  x: 1,
  y: 3,
  desc: "Soy una descripción",
}

// readOnlyP.x = 2; // Error