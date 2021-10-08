<template>
<<<<<<< HEAD
  <div id="app">
    <div id="nav">
    <nav class="navbar navbar-dark text-white bg-dark " aria-label="First navbar example ">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="/">PetCare</a>
          <li class="nav-item dropdown">
                <router-link to="/">Inicio</router-link> |
                <router-link to="/servicios">Servicios</router-link> |
                <router-link to="/conocenos">Conócenos</router-link> |

                <router-link to="/portafolio">Portafolio</router-link>
                <router-link to="/view">ver</router-link>
                <router-link to="/agregar">modificar</router-link>
                 <router-link to="/key">perfil</router-link>
                 <router-link to="/a">a</router-link>
          </li>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample01">
        <ul class="navbar-nav me-auto mb-2">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Administradores</a>
                <ul class="" aria-labelledby="dropdown01">
                  <div class="text-end">
            <!-- <button type="button" class="btn btn-outline-light me-2">Login</button> -->
            <router-link to="/login"  class="btn btn-outline-light me-2">Login</router-link>
            <button type="button" class="btn btn-warning">Sign-up</button>
            
          </div>
                             
                </ul> 
        </ul>
=======
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
>>>>>>> 81ac309cd5677125db055019abfcd17cb71efa7f
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>
