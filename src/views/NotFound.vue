<template>
  <section class="error-404">
    <img src="../assets/error-404.png" alt="img-not-found" />
    <h1 class="text-black text-center">¡Oh no! Parece que perdimos esta página en el laberinto de internet</h1>
    <router-link to="/"><button class="btn-primary">Volver</button></router-link>
  </section>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
.error-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 1rem;
}
</style>
