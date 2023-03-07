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
            <button class="btn" @click="onClick(item.name)">
              <i class="fa fa-download"></i> Download
            </button>
          </td>
          <!-- <div class="card">
            <img src="jeans3.jpg" alt="Denim Jeans" style="width: 100%" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div> -->

          <!-- <td class="has-text-centered">
              <router-link
                :to="{ name: 'Edit', params: { id: item.product_id } }"
                class="button is-info is-small"
                >Edit</router-link
              >
            </td> -->
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
