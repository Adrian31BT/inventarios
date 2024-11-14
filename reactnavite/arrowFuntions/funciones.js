ejecutarOperacion = (operar) =>{
   let valor1 = recuperarEntero("txtvalor1");
   let valor2 = recuperarEntero("txtvalor2");
   let resultado;
   resultado = operar(valor1, valor2);
   console.log("Resultado: "+resultado);
}

/* ejecutarSumar = () =>{
   ejecutarOperacion(sumar);
}

ejecutarRestar = () =>{
   ejecutarOperacion(restar);
} */

sumar = (valor1, valor2) =>{
   let resultado;
   resultado = valor1 + valor2;
   return resultado;
}
restar = (valor1, valor2) =>{
   let resultado;
   resultado = valor1 - valor2;
   return resultado;
}

ejecutar = (fn) =>{
   console.log("Estoy ejecutando funciones");
   fn();
}

imprimir = () =>{
   console.log("Estoy imprimiendo");
}

saludar = () =>{
   console.log("Aprendiendo programacion funcional");
}

testEjecutar = () =>{
   ejecutar(imprimir);
   ejecutar(saludar);
   ejecutar(() =>{
      console.log("Funcion anonima");
   });
}