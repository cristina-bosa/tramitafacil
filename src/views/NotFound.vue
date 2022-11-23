<template>
  <section class="error-404">
    <img src="../assets/error-404.png" alt="img-not-found" />
    <section>
      <h1 class="text-primary text-black">Error 404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <router-link to="/"><button class="btn-primary ">Volver a inicio</button></router-link>
    </section>
  </section>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
