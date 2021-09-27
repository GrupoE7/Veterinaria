<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Creaar producto</h3>
      <form @submit.prevent="handleSubmitForm">

        <div class="form-group">
       

          <label>Producto</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>

        <div Descripcion="form-group">
          <label>Descripcion</label>
          <input
            type="text"
            class="form-control"
            v-model="student.Descripcion"
            required
          />
        </div>

        <div class="form-group">
          <label>Valor</label>
          <input
            type="number"
            class="form-control"
            v-model="student.Precio"
            required
          />
        </div>


        <form action="/upload"  method="POST" enctype="multipart/form-data">

          <input type="file" name="imagen">
          <button type="subnit">subir</button>
        </form>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: "",
        descripcion: "",
        precio: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/view");
          this.student = {
            name: "",
            descripcion: "",
            precio: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
