<template>

  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
          <!-- ////////////////////////////////////////////////////////////////// -->

<form action="http://localhost:3000/register" method="POST">


          
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Crear Usuario</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">Or Be Classical</p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label> Name...</label>
                <md-input v-model="username" name="username"></md-input>
              </md-field>
              
              
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" name="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg"  type="submit"
              >
                  Get Started
                </md-button> 
            </login-card>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      Students: [],
      firstname: null,
      email: null,
      password: null
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

  },
  props: {
    header: {
      type: String,
      default: require("../assets/img/examples/catalogIma.jpg")
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

<style lang="css"></style>
