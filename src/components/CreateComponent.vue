<template>
  <div class="wrapper ">
    <parallax class="section page-header header-filter " :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
        
          
        </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      
        
     
          

<!-- ////////////////////////////////////////////////////////////////////////////// -->
    <center>
    <div class="conatiner mt-5" id="contiene">
            <div class="row ">
            
                <div class="col-md-4 mx-auto">
                    <div class="card">
                        <div class="card-header text-white bg-success" id="header">
                        <h4 class="product" id="product">Crear Producto</h4>
                        </div>
                        <div class="card-body ">
                          
                            <form action="http://localhost:3000/upload" method="post" enctype="multipart/form-data">
                                <div class="input-group mb-3">
                                        <div class="custom-file">
                                            <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
                                        <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">....</label>
                                        </div>
                                    </div>

                                <div class="form-group">
                                  <input type="text" name="title" class="form-control" placeholder="Nombre">
                                </div>


                                <div class="form-group">
                                    <textarea name="description" class="form-control" rows="2" placeholder="description"></textarea>
                                </div>

                                <div class="form-group">
                                    <textarea name="precio" class="form-control" rows="2" placeholder="precio"></textarea>
                                </div>

                                <button type="submit"  >Subir</button>
                                <br>
                                <br>
                                <br>
                          </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </center>
<!-- /////////////////////////////////////////////////////////////////////////////////// -->





      
        
     
   
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
   bodyClass: "login-page",
  
  props: {
    header: {
      type: String,
      default: require("../assets/img/examples/tienda2.jpg")
    }
  },
  
 
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
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
  
};
//////////////////
//////////////////////////////
//////////////////////////



/////////////////////////////////////////
</script>






<style lang="scss" scoped>


/////////////////////////////////////@at-root


.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    border-radius: 0.25rem;
}











</style>



