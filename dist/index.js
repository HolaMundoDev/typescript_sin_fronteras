"use strict";
let mensaje = "Hola Mundo";
mensaje = "Chanchito feliz";
mensaje = "Chao Mundo";
console.log(mensaje);
console.log(typeof []);
let extincionDinosaurios = 76000000;
let dinosauioFavorito = "Tyrannosaurus Rex";
let extintos = true;
let miVariable;
miVariable = "Chanchito Feliz";
miVariable = 100;
function chanchitoFeliz(config) {
    return config;
}
let animales = ["Chanchito", "Feliz", "Felipe"];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
// animales.map(x => x)
// nums.map(x => x)
let tupla = [1, ["chanchito feliz"]]; //solo se puede agregar un string y un numero
tupla.push(12);
// enum
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2 /* LoadingState.Success */; // 1
const objeto = {
    id: 1,
    nombre: "Hola Mundo",
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: "Calle 1",
        pais: "Colombia"
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17) {
        return "Puedes ingresar";
    }
    return "No Puedes ingresar";
};
function validaEdad(edad, msg = "Chanchito Feliz") {
    if (edad > 17) {
        return `Puedes ingresar ${msg}`;
    }
    return "No Puedes ingresar";
}
validaEdad(18);
function ErrorUsuario() {
    throw new Error("error de usuario");
}
// Union Types
let puntaje = 98;
puntaje = "hola mundo";
let animal = { id: 1, estado: "", name: "" };
function sumaDos(n) {
    if (typeof n === "number") {
        n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos("2");
const product = {
    name: "Chanchito Feliz",
    created_at: "",
    modified_at: ""
};
const nDeFibo = 3;
function toNumber(s) {
    return parseInt(s);
}
const n = toNumber(null);
//# sourceMappingURL=index.js.map