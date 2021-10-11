<template>


<center>
    <div class="h-v100 d-flex justify-content-center align-items-center">
          <div class="md-layout">
            <tr v-for="(item, index) in Students" :key="index">
                <div class="container d-flex">
                    <div class="card p-2">
                    
                        <div class="p-info px-3 py-3">
                            <div>
                                <h5 class="mb-0">{{ item.title }}</h5> <span> </span>
                                
                            </div>
                            
                            <div class="p-price d-flex flex-row"> <span> $ </span>
        
                                <h5>{{ item.precio }}</h5>
                                <img src="../../public/favicon.png" alt="" width="30px" >
                            </div>
                            <div class="heart"> <i class="bx bx-heart"></i> </div>
                        </div>
                        <div class="text-center p-image"> 
                        
                        <img :src="item.path" > </div>
                        <div class="p-about">
                            <p>{{ item.description }}</p>
                        </div>
                        <div class="buttons d-flex flex-row gap-3 px-3"> <button class="btn btn-success w-80">Ver</button> <button class="btn btn-outline-success w-100">Comprar ahora</button> </div>
                
         
                </div>
            </div>
            </tr>
        </div>
    </div>
</center>

</template>


<script>
// import axios from "axios";

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



<style >
.card {
   
    width: 350px;
    border: none;
    height: 350px;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    overflow: hidden
}


.p-info {
    display: flex;
    justify-content: space-between
}

.p-price {
    position: absolute;
    right: 10px;
    top: 20px
}

.heart i {
    font-size: 50px;
    opacity: 0;
    color: red
}

.heart i:hover {
    color: red
}

.p-image img {
    width: 240px;
    transform: rotate(15deg);
    transition: all 0.5s
}

.card:hover .heart i {
    animation: heart 300ms ease-in forwards;
    animation-delay: 500ms
}

.p-about {
    position: absolute;
    width: 170px;
    font-size: 10px;
    top: 140px;
    left: -125px;
    opacity: 0
}

.card:hover .p-about {
    animation: content 300ms ease-in forwards
}

@keyframes content {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1;
        left: 25px
    }
}

@keyframes heart {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

.card:hover .p-image img {
    animation: onimage 300ms ease-in forwards
}

.card:hover .p-price {
    animation: onprice 500ms ease-in forwards
}

@keyframes onprice {
    0% {
        right: 10px;
        top: 20px
    }

    50% {
        right: 60px;
        top: 30px
    }

    100% {
        right: 267px;
        top: 70px
    }
}

@keyframes onimage {
    0% {
        width: 250px
    }

    50% {
        width: 200px;
        transform: translateY(-30px);
        transform: translateX(100px)
    }

    100% {
        width: 180px;
        top: 100px;
        transform: translateY(100px);
        transform: translateX(110px)
    }
}

.buttons {
    position: absolute;
    bottom: -150px
}

.card:hover .buttons {
    animation: buttons 500ms ease-in forwards
}

@keyframes buttons {
    0% {
        bottom: -100px
    }

    100% {
        bottom: 20px
    }
}

.btn {
    height: 35px;
    font-size: 16px;
    width: 140px !important;
    font-weight: 600
}
</style>