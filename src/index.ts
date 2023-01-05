class Personaje {
  profession?: string

  constructor(
    public readonly id: number,
    public name: string,
    public level: number,
    private _hp: number
  ) { }

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