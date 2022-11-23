<template>
  <footer class="footer">TramitaFacil - {{ year }}</footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    let date = new Date();
    let year = date.getFullYear();
    return {
      year,
    };
  },
};
</script>
<style scoped>
.footer{
  
}
</style>