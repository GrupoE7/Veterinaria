<template>
  <div class="row">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PETCARE</a>
    <img alt="Vue logo" src="../assets/Logo_PetCare_PN.png">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/">Home</router-link>           
        </li>
        <li class="nav-item">
          <!-- <router-link to="/">Link</router-link>  -->
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link disabled">Disabled</a> -->
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
           <!-- <tr class="recuadro">
            <th>elemento</th>
            <th>descripccion</th>
            <th>Valor</th>
            <th>Foto</th>
          </tr>  -->
        </thead>
        <tbody class="ver">
          <tr class="ver2" v-for="student in Students" :key="student._id">
            <td class="nota1">{{ student.name }}</td>
            <td class="nota2">{{ student.Descripcion }}</td>
            <td class="nota3">{{ student.Precio }}</td>
            <td class="nota4">{{ student.image }}</td>
            
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  
</template>

<style scoped>
.container-fluid img{
   margin: 20 auto;
  width: 60px;
  height: auto;
}

.nav-link{
    color: blue;
}



</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Students: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
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
    },
  },
};
</script>

<style>
body {
  background-image: url("../assets/fondo2.jpg");
  font-family: sans-serif;
  
  margin: center ;
  opacity: 100%;
}

.nota1{
  color: rgb(14, 2, 2);
  font-size: 20px;
  font-family: fantasy;
  font-style: italic;

}

.nota3{
  color: rgb(14, 2, 2);
  font-size: 20px;
  font-family: fantasy;
  font-style: italic;

}




.btn-success {
  margin-right: 10px;
}
</style>
