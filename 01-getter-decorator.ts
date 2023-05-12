function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
  const original = propertyDescriptor.get
  propertyDescriptor.get = function () {
    const r = original?.call(this)
    if (typeof r === "string") {
      return r.toUpperCase()
    }
    return r
  }
}


class User {
  constructor(public name: string, public lastname: string) { }

  @UpperCase
  get fullName(): string {
    return `${this.name} ${this.lastname}`
  }
}

const user = new User("Hola", "Mundo")
console.log(user.fullName) // HOLA MUNDO