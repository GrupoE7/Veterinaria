<template>
    <div class="col-12 container">
    <div class="alert bg-success mb-5 py-4" role="alert">
        <div class="d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div class="px-3">
                <h5 class="alert-heading">Error usuario o contraseña!</h5>
                <p>No tine Permisos para el ingreso, porfavor verifique o comuniquese con el administrador.</p>
                <p>PetCar siempre a su servicio.</p> <a href="#" class="btn text-white" data-dismiss="alert" aria-label="Close" data-abc="true">Dismiss</a> <a href="#" class="btn btn-white mx-1" data-abc="true"> Continue <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg> </a>
            </div>
        </div>
    </div>
</div>
</template>


<script>
function r(){
    location.href="http://localhost:8080/view#/login";
}
setTimeout(r(),10000);
</script>


<style scoped>
.container {
     margin-top: 100px
 }

 p {
     color: #fff;
     
     font-size: 1.1em;
 }

 .alert-heading {
     color: #fff
 }

 .bg-success {
     background-color: #f0715f !important
 }

 .btn-white {
     color: #5e676f;
     background-color: #fff;
     border-color: transparent;
     box-shadow: 0 1px 2px rgba(0, 0, 0, .05)
 }
</style>