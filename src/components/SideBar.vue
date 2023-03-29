<template>
  <section>
    <section>
      <h2 class="text-bold text-primary">Filtros</h2>
      <ul class="no-dot-list">
        <li v-for="filter in filters" :key="filter" class="no-selected" v-on:click="selected(filter.id)">
          {{ filter.name }}
        </li>
      </ul>
    </section>
    <section class="mt-2">
      <h2 class="text-bold text-primary">Trámites más buscados</h2>
      <ul class="no-dot-list">
        <li>Compraventa de vehículos</li>
        <li>Impuesto sucesiones y donaciones</li>
        <li>Impuesto por IRPF</li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    let selected = false;
    let filters = [
      {
        id: 1,
        name: "AIEM"
      },
      {
        id: 2,
        name: "Combustibles"
      },
      {
        id: 3,
        name: "Importaciones"
      },
      {
        id: 4,
        name: "Impuesto Residuos"
      },
      {
        id: 5,
        name: "Juego"
      },
      {
        id: 6,
        name: "Recaudación/Pagos"
      },
      {
        id: 7,
        name: "Sucesiones y Donaciones"
      },
      {
        id: 8,
        name: "Tabaco"
      },
      {
        id: 9,
        name: "Tasas, precios públicos e ingresos no tributarios"
      },
      {
        id: 10,
        name: "Transmisiones Patrimoniales y Actos Jurídicos Documentados"
      },


    ]
    return {
      filters
    }
  },
  methods: {
    selected(id) {
      this.selected = !this.selected;
      document.querySelector('.no-selected').addEventListener('click', function () {
        console.log('aaaaaaaa');
        this.classList.toggle('selected');
      });
      console.log(this.selected);
      console.log(id + ' selected');
    },
  },
}
</script>
<style scoped>
.no-dot-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 10vw;

}

.selected {
  background-color: var(--secundary-soft);
  border: 0.025rem solid var(--secundary);
  margin-top: 2vh;
  border-radius: 1rem;
  padding: 0.25rem;
}

.no-selected {
  background-color: var(--white-soft);
  border: 0.025rem solid var(--white-soft);
  margin-top: 2vh;
  border-radius: 1rem;
  padding: 0.25rem;
}
</style>