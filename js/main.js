let eleccion_sdwch = "carne";

let tipo_pan = "s/gluten";

let queso = true;
let tomate = true;
let lechuga = true;
let cebolla = true;
let mayonesa = true;
let mustard = true;

let sandwichIngredientes = (base_sdwch, tipo_pan, queso, tomato, lechuga, cebolla, mayonesa, mostaza) => {
    let total = 0;
    if (base_sdwch == "pollo") {
        total = 150;
    } else if (base_sdwch == "carne") {
        total = 200;
    } else if (base_sdwch == "veggie") {
        total = 100;
    }else{
        console.log("No existe esa respuesta.")
    };
    if (tipo_pan == "blanco"){
        total += 50
    } else if (tipo_pan == "negro") {
        total += 60
    }else if (tipo_pan == "s/gluten"){
        total += 75
    };
    if (queso == true){
        total += 20
    };
    if (tomato == true){
        total += 15
    };
    if (lechuga == true){
        total += 10
    };
    if (cebolla == true){
        total += 15
    };
    if (mayonesa == true){
        total += 5
    };
    if (mostaza == true){
        total += 5
    };
    return `Su total es de ${total}.`
    
};

console.log(sandwichIngredientes(eleccion_sdwch, tipo_pan, queso, tomate, lechuga, cebolla, mayonesa, mustard))