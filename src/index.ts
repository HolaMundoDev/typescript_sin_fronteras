class Personaje {
  profession?: string
  private static equipo: number = 2

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

  static agregarPersonaje(): void {
    Personaje.equipo++
  }

  cambiarHP(cantidad: number): number {
    this._hp += cantidad
    // No pasar del máximo
    return this._hp
  }

  get hp(): number {
    return this._hp
  }

  static getEquipo(): number {
    return Personaje.equipo
  }

}

const personaje = new Personaje(1, 'Goku', 100, 0)
personaje.subirNivel()
personaje.cambiarHP(100)
// console.log(personaje.hp)


const personaje1 = new Personaje(1, 'Chanchito', 1, 120)

Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())



// if (typeof personaje) {

// }

// if (personaje instanceof Personaje) {

// }