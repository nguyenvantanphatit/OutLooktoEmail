<template>
  <div class="greeting">{{ message }}</div>
</template>

<script>
export default {
 name: 'Render',
  data () {
    return {
      message: 'Hello world for vueloader!'
    }
  }
}
</script>

<style>
.greeting {
  color: blue;
}
</style>