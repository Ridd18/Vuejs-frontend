<template>
  <div class="section">
    <div class="container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <div class="field">
          <label for="file" class="label">Upload File</label>
          <br />

          <input type="file" ref="file" @change="onSelect" />
        </div>
        <div class="field">
          <br />
          <button class="button is-info">Send</button>
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
      file: "",
      message: "",
      // selectedFile: "",
    };
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0]; // accessing file
      this.file = file;
    },
    async onSubmit() {
      const formData = new FormData();

      formData.append("file", this.file);

      try {
        await axios.post("http://localhost:5000/upload", formData);
        this.message = "file uploaded successfully";
        // this.file = "";
      } catch (error) {
        console.log(error);
        this.message = "something went wrong";
      }
    },
  },
};
</script>

<style scoped></style>
