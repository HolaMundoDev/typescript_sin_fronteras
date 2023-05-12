function Route(ruta: string) {
  return (constructor: Function) => {
    console.log("Ejecutando el decorador de ruta")
    constructor.prototype.route = ruta
  }
}

// function Method(target: any, methodName: string, descriptor: PropertyDescriptor) {
function Method(method: string) {
  return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
    console.log(methodName, descriptor)
    const original = descriptor.value
    descriptor.value = function (...args: any) {
      console.log("Antes del método decorado")
      original.call(this, ...args) // Ejecutamos el método de la definición original
      console.log("Después de ejecutar el método decorado")
    }
  }
}

@Route("/productos")
class Productos {
  @Method("GET")
  find(val: string) {
    console.log("Soy el método find " + val)
  }
}

const p = new Productos()
p.find("hola mundo")