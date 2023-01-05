class Personaje {
  //estos valores iniciales son ignorados
  id: number
  name: string
  level: number
  hp: number
  constructor(
    id: number,
    name: string,
    level: number,
    hp: number
  ) {
    this.id = id
    this.name = name
    this.level = level
    this.hp = hp
  }

  subirNivel() {
    this.level++
    return this.level
  }

  cambiarHP(cantidad: number): number {
    this.hp += cantidad
    return this.hp
  }

}

const personaje = new Personaje(1, 'Goku', 100, 0)
personaje.subirNivel()
personaje.cambiarHP(100)
console.log(personaje)

if (typeof personaje) {

}

if (personaje instanceof Personaje) {

}