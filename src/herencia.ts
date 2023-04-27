class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    public created_at: Date,
    public updated_by: number
  ) { }

  get fullYear() {
    return this.created_at.getFullYear();
  }
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
console.log(producto1, categoria);