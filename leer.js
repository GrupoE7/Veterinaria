
const boton = document.getElementById('button')

function documentoCargado(){

    

    let nombre1 = localStorage.getItem("a");
    if (nombre1 === null){
        nombre1 = 2000;

        document.getElementById('text_1').innerText=nombre1; 
    }
    else{
        document.getElementById('text_1').innerText=nombre1;

    }


    //////////////////////////////////////////////////////////////
    let nombre2 = localStorage.getItem("b");
    if (nombre2 === null){
        nombre2 = 2000;

        document.getElementById('text_2').innerText=nombre2; 
    }
    else{
        document.getElementById('text_2').innerText=nombre2;

    }
    ////////////////////////////////////////////////////////////

    let nombre3 = localStorage.getItem("c");
    if (nombre3 === null){
        nombre3 = 2000;

        document.getElementById('text_3').innerText=nombre3; 
    }
    else{
        document.getElementById('text_3').innerText=nombre3;

    }
//////////////////////////////////////////////////////////
let nombre4 = localStorage.getItem("d");
    if (nombre4 === null){
        nombre4 = 2000;

        document.getElementById('text_4').innerText=nombre4; 
    }
    else{
        document.getElementById('text_4').innerText=nombre4;

    }


    
     

   

  

}


document.addEventListener('DOMContentLoaded',documentoCargado,false);




 function  guarda1(){
     let nombre1 = document.querySelector('#a1').value;
     localStorage.setItem('a',nombre1 );
    




 }



 function  guarda2(){
     let nombre2 = document.querySelector('#a2').value;
     localStorage.setItem('b',nombre2 );
 }

 function  guarda3(){
     let nombre3 = document.querySelector('#a3').value;
     localStorage.setItem('c',nombre3 );
 }

 function  guarda4(){
     let nombre4 = document.querySelector('#a4').value;
     localStorage.setItem('d',nombre4 );
 }


