<template>
    <div class="flex-container">
  <div class="servicios">
    <body class="d-flex h-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main class="px-3">
          <h1>Cuidado para tus mascotas.</h1>
          <p class="lead">
           Te ofrecemos estos servicios con profesionales de calidad.
          </p>
          <p class="lead">
            <a
              href="#"
              class="btn btn-sm btn-secondary fw-bold border-white bg-white"
              >Learn more</a
            >
          </p>
        </main>
        
            <div class="flex-container">
               
                <!-- Contenedor Servicios 1-->
                <section class="Servicios">
                    <div class="icon-wrap">
                        <img src="../assets/petshop.jpg" alt="compra accesorios para mascotas" />
                    </div>
                
                        <h3>Pet Shop</h3>
                
                    <div class="cardscc2">
                        <div class="Pservicios">
                            <p class="lead">
                                En nuestra pet shop contamos con una amplia gama de productos veterinarios y accesorios para  tu mascota con diseños diferentes y divertidos, gran variedad de propuestas para elegir entre colores, texturas y materiales de alta calidad.
                                <a href="#"> Ver más ...</a>
                            </p>
                        </div>        
                    </div>
                
                </section>
            <!-- Contenedor Servicios 2-->
            <section class="Servicios">
                <div class="icon-wrap">
                    <img src="../assets/peluqueria.jpg" alt="" />
                </div>
                <h3>Peluquería y spa</h3>
                    <div class="cardscc2">
                        <div class="Pservicios">
                            <p class="lead">
                                Nuestro equipo de profesionales le dará la atención que tu mascota merece. Podemos solo hacer un mantenimiento sencillo de corte de pelo o uno más completo que incluye spa, escoge los servicios que deseas y coordina una cita para tu mascota, los esperamos!
                                
                                <a href="#">Ver más ...</a>
                            </p>
                        </div>
                    </div>
            </section>
           <!-- Contenedor Servicios 3-->
            <section class="Servicios">
                <div class="icon-wrap">
                    <img src="../assets/hospital-clinico.jpg" alt="" />
                </div>
                <h3>Hospital clínico</h3>
                    <div class="cardscc2">
                        <div class="Pservicios">
                            <p class="lead">
                                Ofrecemos un servicio de hospitalización que proporciona cuidados básicos, especializados e intensivos a su mascota, bajo la vigilancia de uno de nuestros veterinarios las 24 horas del día.
                                <a href="#"> Ver más ... </a>
                            </p>
                        </div>
                    </div>
            </section>
            

      </div>
      </div>
    </body>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: rgb(59, 42, 42);
  text-shadow: none; /* Prevent inheritance from `body` */
}
a{
    color: rgba(219, 63, 115, 0.548);
}

/*
 * Base structure
 */

body {
  text-shadow: 0 0.05rem 0.1rem rgb(233, 225, 225);
  box-shadow: inset 0 0 5rem rgba(219, 175, 175, 0.37);
}

.cover-container {
  max-width: 2xp;
}


.Pservicios {
  color: rgb(245, 243, 250);
  font-size: 120%;
  line-height: 155%;
  padding: 2%;
  text-indent: 0%;
  text-align: justify;
}

h3 {
  font-size: 150%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  line-height: 155%;
  font-weight: 500;
  color: #dfe0ee;
  text-align: center;
  text-decoration: overline; 
  padding: 8px;
}


/* Contenedor  Principal */
#wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

/* Contenedor Seccion Servicios */
.Servicios {
  width: 33%;
  float: left;
  padding: 10px;
  text-align: center;
}

/* Contenedor Imagenes Servicios*/
.icon-wrap {
  margin: 0 auto;
  width: 360px;
  height: auto;
  border: 4px solid rgba(135, 160, 158, 0.685);
  text-align: center;
  margin-top: 0%;
}

/* Imagenes Servicios*/
.icon-wrap img {
  margin:  auto;
  width: 352px;
  height: auto;
}


.servicios__contenedor{
  display: flex;
  justify-content:space-evenly;
  text-align: center;
  
}


.cardscc2 {
  box-shadow: 8px 6px 4px 6px rgba(233, 206, 206, 0.24);
  transition: 0.5s;
  margin: 10px;
  width: 88%;
  text-align:center;
  height: 250px;
  border-radius: 8%; 
  background-color: rgba(69, 82, 81, 0.301);
  
}
</style>
