function Dec1(constructor: Function) {
  console.log('Decorador 1')
}

function Dec2(constructor: Function) {
  console.log('Decorador 2')
}


@Dec1 // Se ejecuta al último
@Dec2 // Se ejecuta primero
class User { }

export { }