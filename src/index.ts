class Personaje {
  //estos valores iniciales son ignorados
  readonly id: number
  name: string
  level: number
  private _hp: number
  profession?: string

  constructor(
    id: number,
    name: string,
    level: number,
    hp: number
  ) {
    this.id = id
    this.name = name
    this.level = level
    this._hp = hp
  }

  subirNivel() {
    this.level++
    return this.level
  }

  cambiarHP(cantidad: number): number {
    this._hp += cantidad
    // No pasar del máximo
    return this._hp
  }

}

const personaje = new Personaje(1, 'Goku', 100, 0)
personaje.subirNivel()
personaje.cambiarHP(100)
console.log(personaje)

// if (typeof personaje) {

// }

// if (personaje instanceof Personaje) {

// }