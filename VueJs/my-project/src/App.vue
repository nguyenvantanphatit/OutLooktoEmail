<template>
 <div>
 <product />
 <Render />
 </div>
</template>

<script>
import product from './components/Products.vue';
export default {
  name: 'App',
  components: {
    product
  },
};
</script>