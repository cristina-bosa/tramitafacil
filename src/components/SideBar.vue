<template>
  <section>
    <section>
      <h2 class="text-bold text-primary">Filtros</h2>
      <ul class="no-dot-list">
        <li
          v-for="filter in filters"
          :key="filter.id"
          :class="{
            selected: isSelected,
            'not-selected': !isSelected,
          }"
          @click="toggleSelected($event)"
        >
          {{ filter.name }}
        </li>
      </ul>
    </section>
    <section class="mt-2">
      <h2 class="text-bold text-primary">Trámites más buscados</h2>
      <ul class="no-dot-list">
        <li class="not-selected">Compraventa de vehículos</li>
        <li class="not-selected">Impuesto sucesiones y donaciones</li>
        <li class="not-selected">Impuesto por IRPF</li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    let isSelected = false;
    let filters = [
      {
        id: 1,
        name: "AIEM",
      },
      {
        id: 2,
        name: "Combustibles",
      },
      {
        id: 3,
        name: "Importaciones",
      },
      {
        id: 4,
        name: "Impuesto Residuos",
      },
      {
        id: 5,
        name: "Juego",
      },
      {
        id: 6,
        name: "Recaudación/Pagos",
      },
      {
        id: 7,
        name: "Sucesiones y Donaciones",
      },
      {
        id: 8,
        name: "Tabaco",
      },
      {
        id: 9,
        name: "Tasas, precios públicos e ingresos no tributarios",
      },
      {
        id: 10,
        name: "Transmisiones Patrimoniales y Actos Jurídicos Documentados",
      },
    ];
    return {
      filters,
      isSelected,
    };
  },
  methods: {
    toggleSelected(element) {
      console.log({ element });
      element.target.classList.toggle("selected");
      element.target.classList.toggle("not-selected");
    },
  },
};
</script>
<style scoped>
.no-dot-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.selected {
  display: flex;
  justify-content: center;
  background-color: var(--info-soft);
  border: 0.025rem solid var(--info);
  margin-top: 2vh;
  color: var(--info-dark);
  border-radius: 1rem;
  padding: 0.25rem;
}
.not-selected {
  display: flex;
  justify-content: center;
  background-color: var(--white-soft);
  border: 0.025rem solid var(--white-soft);
  margin-top: 2vh;
  border-radius: 1rem;
  padding: 0.25rem;
}
</style>
