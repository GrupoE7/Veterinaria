
<template>
<div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>nombre</th>
            <th>Descripcion</th>
            <th>Valor</th>
            <th>Imagen</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           <tr v-for="(item, index) in Students" :key="index">
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.precio }}</td>
             <img :src="item.path"   class="card-img-top" width="" alt="..." height="100px"> 
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
               value="Reload Page" onclick="history.go(0)"
                @click.prevent="deleteProducto(item._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
    // let apiURL = `http://localhost:3000/images/delete/${id}`;
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


  }
 }
</script>

<style>

.card-body{


  margin-top: 50px;
  height: 128px;
  background: linear-gradient(-98dg,#BF819f ,#f28a57);
}







.btn-success {
  margin-right: 10px;
}
</style>

























