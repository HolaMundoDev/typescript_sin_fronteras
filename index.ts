function Route(ruta: string) {
  return (constructor: Function) => {
    console.log("Ejecutando el decorador de ruta")
    constructor.prototype.route = ruta
  }
}

@Route("/productos")
class Productos {
  find() {
    return "Producto"
  }
}

const p = new Productos() as any
console.log(p.route)