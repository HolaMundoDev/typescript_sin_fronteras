// abstract class Animal {
//   abstract name: string;
//   abstract caminar(): void;
//   abstract onomatopeya(): string;
// }

interface Animal {
  name: string;
  caminar(): void;
  onomatopeya(): string;
}

class Caballo implements Animal {
  name: string = "rocinante";
  caminar(): void {
    console.log("Caminando");
  }
  onomatopeya(): string {
    return "Hin";
  }
}

class Cerdo implements Animal {
  name: string = "chancho";
  caminar(): void {
    console.log("Caminando");
  }
  onomatopeya(): string {
    return "Oink";
  }
}

class Perro implements Animal {
  name: string = "firulais";
  caminar(): void {
    console.log("Caminando");
  }
  onomatopeya(): string {
    return "Guau";
  }
}

class DiccionarioUsuarios {
  [id: string]: string;
}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios.a1 = "usuario1"
diccionarioUsuarios["1a"] = "usuario2"

console.log(diccionarioUsuarios);

