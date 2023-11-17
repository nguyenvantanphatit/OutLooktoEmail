<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios({ method: "GET", url: "/api/tasks" }).then(
        (result) => {
          console.log(result.data);
          this.todos = result.data;
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
};
</script>
