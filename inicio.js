tigera=16000;

function contra(){

    var c=1234;
    var u="ADMIN";
    if (document.form.pasword.value==c && document.form.login.value==u){
    alert ("Bienvenido al editor ");
    window.location="editor.html";
    }
    else {
    alert ("Datos incorrectos, intente de nuevo");
    }
    

}

function dato(){
valor_1=document.getElementById('n1').value;
document.getElementById('n2').value=valor_1;
tigera=valor_1;

}

function valores(){
 
 document.getElementById('n5').value=tigera;

}