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

<style scoped>
.input-container {
  display: flex;
  height: 5rem;
  width: 100%;
  background-color: var(--primary-soft);
  border-radius: 1rem;
  justify-content: space-around;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 1rem;
}

.input-container input {
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  border: 0;
  background-color: transparent;
  padding: 1rem;
  color: var(--dark-soft);
  outline: none;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
