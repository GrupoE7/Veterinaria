





<template>


     <div class="container  ">
          <div class="row ">
              <div class="col-md-4 ">
                         <tr v-for="(item, index) in Students" :key="index">
                            <div class="card animated fadeInDown">
                                <img :src="item.path"   class="card-img-top" width="" alt="...">
                                <div class="card-body text-cente ">
                                      <h5 class="card-title"> {{ item.title }}</h5>  
                                      <p class="card-text"> {{ item.description }}</p> 
                                      <p class="card-text"> $ {{ item.precio }}</p> 
                                      <!-- <p class="card-text"><small class="text-muted"><%= format(element.created_at) %></small></p> -->
                                        <!-- <a href="/images/<%= item._id%>" class="btn btn-primary">Editar porducto</a>   -->
                                        

                                   </div>
                                   <br>
                                   <br>
                                   <br>
                            </div>
                            </tr>

                        
                           
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
