<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Nuestras mascotas son importantes</h1>
           
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=IRvn-is9xjo"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Ver video</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Los servicios que ofrececmos</h2>
              <h3>Cuidado para tus mascotas.</h3>
              <h5 class="description">
                Te ofrecemos estos servicios con profesionales de calidad.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <img
                        src="../assets/img/petshop.jpg"
                        alt="Thumbnail Image"
                        class="rounded"
                      />
                    
                    <md-icon>add_a_photo</md-icon>
                  </div>
                  <h4 class="info-title">Pet Shop</h4>
                  <p>
                    En nuestra pet shop contamos con una amplia gama de productos veterinarios y accesorios para  tu mascota con diseños diferentes y divertidos, gran variedad de propuestas para elegir entre colores, texturas y materiales de alta calidad.

                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success ">
                    <img
                        src="../assets/img/peluqueria.jpg"
                        alt="Thumbnail Image"
                        class="rounded"
                      />
                    
                    <md-icon>add_reaction</md-icon>
                  </div>
                  <h4 class="info-title">Peluquería y spa</h4>
                  <p>
                  Nuestro equipo de profesionales le dará la atención que tu mascota merece. Podemos solo hacer un mantenimiento sencillo de corte de pelo o uno más completo que incluye spa, escoge los servicios que deseas y coordina una cita para tu mascota, los esperamos!
.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <img
                        src="../assets/img/hospital-clinico.jpg"
                        alt="Thumbnail Image"
                        class="rounded"
                      />
                    

                    <md-icon>add_circle_outline</md-icon>
                  </div>
                  <h4 class="info-title">Hospital clínico</h4>
                  <p>
                    Ofrecemos un servicio de hospitalización que proporciona cuidados básicos, especializados e intensivos a su mascota, bajo la vigilancia de uno de nuestros veterinarios las 24 horas del día.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Este es nuestro equipo</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Jenniffer Zuany Díaz
                      <br />
                      <small class="card-description text-muted">Ingeniera electrónica</small>
                    </h4>

                    

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Anderson Calderon
                      <br />
                      <small class="card-description text-muted"
                        >Ingeniero Electrónico</small
                      >
                    </h4>

                    

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Edward Garcia
                      <br />
                      <small class="card-description text-muted">Docente</small>
                    </h4>

                    

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("../assets/img/examples/fondServicios.jpg")
    },
    teamImg1: {
      type: String,
      default: require("../assets/img/faces/Jennifer.jpeg")
    },
    teamImg2: {
      type: String,
      default: require("../assets/img/faces/Anderson.jpeg")
    },
    teamImg3: {
      type: String,
      default: require("../assets/img/faces/edward-garcia.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
