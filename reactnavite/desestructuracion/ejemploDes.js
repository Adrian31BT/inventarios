recuperar=()=>{
    let frutas=["pera","manzana","sandia"];
    frutas.push("banana");
    return frutas;
}

testRecuperar=()=>{
    let misFrutas = recuperar();
    let frutaPrimera = misFrutas[0];
    let otraFruta = misFrutas[1];
    console.log(frutaPrimera);
    console.log(otraFruta);
}

testRecuperarDes=()=>{
    let [frutaPrimera, frutaSegunda, frutaTercera] = recuperar();
    console.log(frutaPrimera);
    console.log(frutaSegunda);
    console.log(frutaTercera);
}