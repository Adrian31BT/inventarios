ejecutarCadena=function(fn){
    let cmp=document.getElementById("txtValor");
    let valor=cmp.value;
    fn(valor);
} 

/* usando Arrow Functions */
/* ejecutarCadena = (fn) =>{
    let cmp=document.getElementById("txtValor");
    let valor=cmp.value;
    fn(valor);
} */
