<template>
  <HeaderComponent> </HeaderComponent>
  <main class="container">
    <router-view />
  </main>
  <FooterComponent> </FooterComponent>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
