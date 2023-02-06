<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          placeholder="Enter Name"
        />
      </div>
      <div class="mb-3">
        <input
          type="number"
          class="form-control"
          id="age"
          v-model="age"
          placeholder="Enter Age"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="uname"
          v-model="username"
          placeholder="Enter Username"
        />
      </div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Enter Email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Enter Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      age: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post("http://localhost:5000/user", {
          name: this.name,
          age: this.age,
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.name = "";
        this.age = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
