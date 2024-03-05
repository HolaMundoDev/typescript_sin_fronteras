abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date,
    protected updated_by: number
  ) { }

  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return `${this.name} ${this.desc}`;
  }

  abstract guardar(): void;
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    updated_by: number
  ) {
    super(name, desc, created_at, updated_by);
  }

  override get fullDesc() {
    return "Producto: " + super.fullDesc;
  }

  guardar(): void {
    console.log("Guardando producto...");
  }
}



class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    updated_by: number
  ) {
    super(name, desc, created_at, updated_by);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDesc() {
    return "Categoría: " + super.fullDesc;
  }

  guardar(): void {
    console.log("Guardando categoria...");
  }
}

let producto1 = new Producto(
  10,
  123,
  'Iphone',
  "Este es un smartphone",
  new Date(),
  1
);

let categoria = new Categoria(
  'Celulares',
  "",
  new Date(),
  1
)

categoria.agregarProducto(producto1);
console.log(producto1.fullDesc, categoria.fullDesc);

// let datos = new DatosBasicos("dato 1", "desc", new Date(), 1) //No es posible instanciar una clase abstracta