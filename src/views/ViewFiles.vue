<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Image Name</th>
          <th class="has-text-centered">Download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.file_id">
          <td>{{ item.file_name }}</td>
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
    // Get All Products
    async getFiles() {
      try {
        const response = await axios.get("http://localhost:5000/files");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
