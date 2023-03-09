<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>File Name</th>
          <th class="has-text-centered">Download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.file_id">
          <td>{{ item.name }}</td>
          <td>
            <a
              target="_blank"
              :href="`http://localhost:5000/files/${item.name}`"
            >
              <button class="btn">
                <i class="fa fa-download"></i> Download
              </button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "ViewFiles",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getFiles();
  },

  methods: {
    // Get All files
    async getFiles() {
      try {
        const response = await axios.get("http://localhost:5000/files");
        console.log(response.data);
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    //download files
    async onClick(name) {
      try {
        const response = await axios.get(`http://localhost:5000/files/${name}`);
        console.log(response.data);
        console.log(name);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
