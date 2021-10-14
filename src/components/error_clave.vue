<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Nuestras mascotas </h1>
           
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
      
        
          

<!-- ////////////////////////////////////////////////////////////////////////////// -->
<div class="alert alert-danger">
  <strong>Clave incorrecta!</strong> Clave y/o usuario incorrectos verifique e intente de nuevo.
</div>
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
<center>

                 
</center>
    
     
   
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

// setTimeout ( function(){
//   location.href ="http://localhost:8080/view#/login";

// }, 1000 *5);

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
 
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
//////////////////
//////////////////////////////
//////////////////////////



/////////////////////////////////////////
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
.card-body{


  margin-top: 50px;
  height: 128px;
  background: linear-gradient(-98dg,#BF819f ,#f28a57);
}







.btn-success {
  margin-right: 10px;
}     


.external-link {
    cursor: pointer;
    color: blue
}











/////////////////////////////////////@at-root
.card-body{


  margin-top: 50px;
  height: 128px;
  background: linear-gradient(-98dg,#BF819f ,#f28a57);
}









.title{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


</style>



