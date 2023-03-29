<template>
  <Hero>
    <template #hero-img><img src="../assets/imagen-derecha.png" /></template>
    <template #hero-title
      >Buscador enfocado para que hagas tus trámites más fácil</template
    >
    <template #hero-content>
      <section class="input-container mt-2">
        <!-- <label for="search">Escriba el nombre del trámite </label>-->
        <input
          type="text"
          name="search"
          class="input-text"
          @keyup.enter="downPage"
          v-model="textFilter"
          placeholder="Escriba el nombre del trámite"
        />
        <button class="btn-primary" type="button">Buscar trámite</button>
      </section>
    </template>
  </Hero>
  <section class="content mt-2">
    <SideBar> </SideBar>
    <Content :textFilter="textFilter"> </Content>
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";
import SideBar from "../components/SideBar.vue";
import Content from "../components/Content.vue";

export default {
  components: {
    Hero,
    SideBar,
    Content,
  },
  data() {
    let textFilter = "";

    return {
      textFilter,
    };
  },
  methods: {
    downPage() {
      document.querySelector(".content").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
