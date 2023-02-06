<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
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
      <button type="button" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post("http://localhost:5000/user/login", {
          email: this.email,
          password: this.password,
        });
        this.email = "";
        this.password = "";
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
