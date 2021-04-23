// let nuevaFuncion = () => {
//  console.log('Hola mundo');

// }

// nuevaFuncion();
// imprimeConFuncion('imprimo');

// function imprimeConFuncion (dato){
//     if(dato === 'imprimi'){
//         let funcionInterna = () =>{
//             console.log('El dato es correcto y se  imprime');
//         }
//         funcionInterna();
//     }else {
//         console.log('El dato ingresado no es correcto');
//     }
//     return dato;
// }

// Call back

function llamada (){
    console.log('Hola mundo');

}

function llamadora (call){
    if(typeof call === "function")
    {
    console.log('Dentro de esta funcion llamamos a la callback');
    call();
    }else{
        console.error('No es una funcion');

    }
}

llamadora(llamada);

// let miArray = [10,20,30,40];

// miArray.forEach((element)=>{
//  console.log(element);
//  if(element == 20){
//    console.log(element);
//    console.log('El valor encontrado es igual a 20');
//  }
//  else{
//     console.log('no se encontro el valor requerido')
//  }
// });


// TimeOut

// let callSegunda = () =>{
//     console.log('Esto se imprime segundo');

// }
// console.log('Esto se imprime primero');


// setTimeout(callSegunda,2000);

// console.log('Esto se imprime tercero');



