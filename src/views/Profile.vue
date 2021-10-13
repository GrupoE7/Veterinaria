<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Accesorios para mascotas</h3>

                </div>
              </div> 
            </div>
          </div>
          <div class= "description text-center" >
           <p class="fs-4"> 
              Puedes asegurar una vida tranquila y feliz para tu mascota con los accesorios y elementos de entrenamiento que tenemos para él. Conoce las mejores marcas y novedades disponibles
              
            </p>
            
          </div>
                
          <div class="profile-tabs">
            <tabs>
             
            </tabs>
          </div>
        </div>
      </div>
    </div>      
  </div>
</template>
 
<script>
import { Tabs } from "@/components";

export default {
  components: {
    Tabs
  },
  // bodyClass: "profile-page",
  
  props: {
    header: {
      type: String,
      default: require("../assets/img/examples/Cataloimpro.jpg")
    },
    img: {
      type: String,
      default: require("../assets/img/profile.jpg")
    }
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
.section {
  padding: 0;
}
 

</style>
