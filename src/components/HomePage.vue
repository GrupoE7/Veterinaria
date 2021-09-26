<template>
  <div class="hello">
    <body>
      
    <div class="icon-wrap">
                    <img src="../assets/unida.jpg" alt="" />
                </div>
    <div
      class="slider-area slider-style-2 height-950 bg_image"
      data-black-overlay="2"
      style='background-image: url("/images/bg/bg-image-5.jpg");'
    >
    
      <div class="container">
        
        <div class="hservi">
          <div class="col-lg-12">
            <div class="inner text-left">
              <h4 class="subtitle">
                <p class="theme-gradient">Estudio identifica siete rasgos de personalidad de los gatos</p>
              </h4>
              
              <ul class="list-icon">
                
                <li>
                  <span class="icon"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    Estudio identifica siete rasgos de personalidad de los gatos. Para los amantes de los gatos: ¿se han preguntado cuántas veces en el día cambian de humor? ¿Por qué tan constante? ¿Es normal? Estos animales especiales se han convertido en grandes acompañantes y en un común denominador en varios hogares durante la pandemia..
                     
                  </span>
                </li>
                
              </ul>
                  <a href="https://www.eltiempo.com/vida/mascotas/gatos-y-rasgos-caracteristicos-de-su-personalidad-617307" class="link"><strong>Ir al sitio</strong></a> 
            </div>
          </div>
        </div>
        <div class="hservi">
          <div class="col-lg-12">
            <div class="inner text-left">
              <h4 class="subtitle">
                <p class="theme-gradient">.</p>
              </h4>
              <h4 class="subtitle">
                <p class="theme-gradient">.</p>
              </h4>
              <h4 class="subtitle">
                <p class="theme-gradient">.</p>
              </h4>
              <h4 class="subtitle">
                <p class="theme-gradient">.</p>
              </h4>
              <h4 class="subtitle">
                <p class="theme-gradient">.</p>
              </h4>
              <h4 class="subtitle">
                <p class="theme-gradient">.</p>
              </h4>
              <h4 class="subtitle">
                <p class="theme-gradient">Recomendaciones para cuidar el pelo de sus mascotas</p>
              </h4>
              <ul class="list-icon">
                
                <li>
                  <span class="icon"
                    ><svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline></svg
                  ></span>
              Recomendaciones para cuidar el pelo de sus mascotas. Sin importar cuál sea el tipo de manto o pelaje que tenga su perro, es importante saber cuidarlo adecuadamente. Un pelo sano y saludable es sinónimo de responsabilidad, buenos cuidados y alimentación apropiada, así como de vitalidad, energía y belleza. Mantenerlo en buenas condiciones obedece más que a razones estéticas, también tiene que ver con higiene, bienestar y buena calidad de vida.
                </li>
                
              </ul>
              <div class="button-group mt--40 mt_sm--20">
                  <a href="https://www.eltiempo.com/vida/mascotas/recomendaciones-para-cuidar-el-pelo-de-sus-mascotas-603028" class="link"><strong>Ir al sitio</strong></a>
                  <i class="icon">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                  </i>
                
              </div>
            </div>
          </div>
        </div>
        <div class="hservi">
          <div class="col-lg-12">
            <div class="inner text-left">
              <h4 class="subtitle">
              <p class="title display-one">Los errores más comunes que cometen los dueños de perros.</p>
                
              </h4>
              <ul class="list-icon">
                
                <li>
                  <span class="icon"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                  </span>
                  Para muchos no existe una mejor mascota que un perro. Son fieles, leales, cariñosos, animados y sin duda una buena compañía. Sin embargo, como ocurre con cualquier animal de compañía, se requieren ciertos cuidados.
                </li>
                <div class="button-group mt--40 mt_sm--20">
                <a href="https://www.eltiempo.com/vida/mascotas/perros-si-tienes-una-mascota-evita-hacer-esto-619707" class="link"><strong>Ir al sitio</strong></a>
                  <i class="icon">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                  </i>
                
              </div>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    background-image: url("../assets/bg-one.jpg");
}

.height-950 {
    height: 950px;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}

.bg_image, .bgImagePosition {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}
* {
    box-sizing: border-box;
}
.list-icon {
    list-style: none;
    padding: 0;
    margin: 0;
}
.hservi {
  width: 33%;
  float: left;
  padding: 10px;
  text-align: center;
}
li{
  
  text-transform: capitalize;
  color: aliceblue;

}
p{
  margin-top: 6px;
  text-transform: capitalize;
  color: aliceblue;
}
a{
    color: rgba(226, 111, 149, 0.664);
}
</style>
