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