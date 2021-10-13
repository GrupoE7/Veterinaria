<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      
    </parallax>
    <div class="main main-raised">
      
        
          

<!-- ////////////////////////////////////////////////////////////////////////////// -->
<div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th >nombre</th>
            <th>Descripcion</th>
            <th>Valor</th>
            <th>Imagen</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           <tr v-for="(item, index) in Students" :key="index">
            <h5><td class="title" id="title">{{ item.title }}</td></h5>
            <td class="description" id="description">{{ item.description }}</td>
            <td class="precio" id="precio">{{ item.precio }}</td>
             <img :src="item.path"   width="100px" alt="100px" height="100px"> 
            <!-- 8b477bb1-ff3a-45c5-ab9e-59ef6641496f.jpg -->
            
            <!-- <img src="../../backend/src/public/img/upload/8b477bb1-ff3a-45c5-ab9e-59ef6641496f.jpg" alt="imagen">  -->
            <!-- <img src="../../backend/src/public/img/upload/8b477bb1-ff3a-45c5-ab9e-59ef6641496f.jpg" alt="imagen">  -->
            
            <td>
              <!-- <router-link
                :to="{ title: 'edit', params: { id: item._id } }"
                class="btn btn-success"
                >Edit
              </router-link> -->
              
              <button
              class="btn btn-outline-danger"
               value="Reload Page" onclick="history.go(0)"
                @click.prevent="deleteProducto(item._id)"
                
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
  <center>

    <login-card header-color="green">
        <md-button slot="footer" class="form-group mb-4 md-success md-lg"  href="#/CreateComponent">
          <h3> Crear producto</h3>

        </md-button > 
        <br>
        <br>
          <md-button slot="footer" class=" btn-warning"  href="#/crearusuario">
          <h5>Crear usuario Admin</h5> 

        </md-button >
        
    </login-card>
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
import axios from "axios";

export default {
    data() {
    
     return {
       Students: [],
     };
   },

   created(){
    this.ver();

   },
 
   methods: {
    ver(){

         this.axios.get('ver')
         .then(res => {
           console.log(res.data)
           this.Students=res.data;


         })
         .catch(e=>{
          console.log(e.response)
        })



   },

   deleteProducto(id){

    //  this.axios.delete('/images/delete/${id}')
     let apiURL = `http://localhost:3000/images/delete/${id}`;
    this.axios.get(`http://localhost:3000/images/delete/${id}`)
     let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
    
   }


  },
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



