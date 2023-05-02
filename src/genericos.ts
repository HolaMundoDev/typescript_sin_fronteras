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

programador.computador.apagar();
programador1.computador.toLocaleLowerCase();

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