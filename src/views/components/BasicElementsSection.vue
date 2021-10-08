<template>
  <div class="wrapper">
    
   

    <!-- Inputs -->
    
    <!-- end inputs -->

    <div class="space-50"></div>
    <div
      class="slider-area slider-style-2 height-950 bg_image"
      data-black-overlay="2"
      style='background-image: url("/images/bg/bg-image-5.jpg");'
    >
    
      <div class="container">
        
        <div class="hservi">
          <div class="col-lg-12">
            <div class="inner text-left">
                      <img
                        src="../../assets/img/faces/noticia1.png"
                        alt="Thumbnail Image"
                        class="rounded"
                      />
             
                <h3  class="title display-one">Estudio identifica siete rasgos de personalidad de los gatos</h3>
              
              
              <ul class="list-icon">
                
                <li>
                  <span class="icon"
                    >
                    
                      <polyline points="20 6 9 17 4 12"></polyline>
                  <h4>  Estudio identifica siete rasgos de personalidad de los gatos. Para los amantes de los gatos: ¿se han preguntado cuántas veces en el día cambian de humor? ¿Por qué tan constante? ¿Es normal? Estos animales especiales se han convertido en grandes acompañantes y en un común denominador en varios hogares durante la pandemia..</h4>
                     
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
                      <img
                        src="../../assets/img/faces/noticia2.jpg"
                        alt="Thumbnail Image"
                        class="rounded"
                      />
            
              
                <h3 class="title display-one">Recomendaciones para cuidar el pelo de sus mascotas</h3>
              
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
                    <h4> Recomendaciones para cuidar el pelo de sus mascotas. Sin importar cuál sea el tipo de manto o pelaje que tenga su perro, es importante saber cuidarlo adecuadamente. Un pelo sano y saludable es sinónimo de responsabilidad, buenos cuidados y alimentación apropiada, así como de vitalidad, energía y belleza. Mantenerlo en buenas condiciones obedece más que a razones estéticas, también tiene que ver con higiene, bienestar y buena calidad de vida.</h4>
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
                <p class="theme-gradient">.</p>
            </h4>

                      <img
                        src="../../assets/img/faces/noticia3.jpg"
                        alt="Thumbnail Image"
                        class="rounded"
                      />
              <h3 class="title display-one">Los errores más comunes que cometen los dueños de perros.</h3>
                
              
              <ul class="list-icon">
                
                <li>
                  <span class="icon"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                  </span>
                 <h4> Para muchos no existe una mejor mascota que un perro. Son fieles, leales, cariñosos, animados y sin duda una buena compañía. Sin embargo, como ocurre con cualquier animal de compañía, se requieren ciertos cuidados.</h4>
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
    
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      defaultPagination: 3,
      infoPagination: 3,
      initial: null,
      floatingLabel: null,
      success: null,
      error: null,
      withMIcon: null,
      withFaIcon: null,
      checkbox1: true,
      checkbox2: null,
      checkbox3: true,
      checkbox4: null,
      radio1: true,
      radio2: false,
      switch1: true,
      switch2: null,
      amount: 30,
      amount2: 60,
      buffer: 40,
      sliders: {
        simple: 40,
        rangeSlider: [20, 60]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.vertical-center {
  display: flex;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}
p{
  margin-top: 40px;
  text-transform: capitalize;
  color: rgb(11, 12, 12);
}
li{
  
  text-transform: capitalize;
  color: rgb(2, 2, 2);
  

}
</style>
