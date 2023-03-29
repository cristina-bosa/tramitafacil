<template>
  <section>
    <h2 class="text-primary" v-if="filteredProcedures.length <= 0">
      No existen trámites con las palabras
      <span class="text-black">{{ textFilter }}</span>
    </h2>
    <h2 v-else class="text-bold text-primary">
      Se han encontrado un total de {{ filteredProcedures.length }} resultados para la búsqueda {{ textFilter }}
    </h2>
    <ProcedureItem
      v-for="procedure in filteredProcedures"
      :key="procedure.id"
    >
      <template #title>{{procedure.title}}</template>
      <template #description>{{procedure.description}}</template>
      <iconUser v-if="procedure.modeProcedure === 'PT'" />
      <iconDoc v-if="procedure.modeProcedure === 'PT'" />
      <iconDoc v-if="procedure.modeProcedure === 'T'" />
      <iconDoc v-if="procedure.modeProcedure === 'P'" />
      
      <template #button><button type="button" class="btn-primary">Acceder</button></template>
    </ProcedureItem>
    <div class="text-bold" v-for="user in users" :key="user.id">
      {{user.name}}
      </div>
  </section>
</template>
<script>
import ProcedureItem from "../components/ProcedureItem.vue";
import iconUser from "../components/icons/iconUser.vue";
import iconDoc from "../components/icons/iconDoc.vue";
import axios from "axios";
export default {
  components: {
    ProcedureItem,
    iconUser,
    iconDoc,
  },
  props: {
    textFilter: String
  },
  data() {
    let users;
    let procedures = [
      {
        id: 1,
        title: "Modelo 450",
        description: "Régimen general/simplificado. Autoliquidación Trimestral",
        status: "y",
        modeProcedure: "P",
        url: "https://www3.gobiernodecanarias.org/tributos/atc/jsf/publico/asistenciaContribuyente/modelos/listado.jsp?tributo=AIEM",
        tag: "AIEM",
        presentationDate: "2023/03/20",
      },
      {
        id: 2,
        title: "Modelo 451",
        description: "Solicitud de devolución de cuotas soportadas",
        status: "y",
        modeProcedure: "PT",
        url: "https://www3.gobiernodecanarias.org/tributos/atc/jsf/publico/asistenciaContribuyente/modelos/listado.jsp?tributo=AIEM",
        tag: "AIEM",
        presentationDate: "2023/03/20",
      },
      {
        id: 3,
        title: "Modelo 452",
        description: "Declaración de entregas de combustibles exentas",
        status: "y",
        modeProcedure: "T",
        url: "https://www3.gobiernodecanarias.org/tributos/atc/jsf/publico/asistenciaContribuyente/modelos/listado.jsp?tributo=AIEM",
        tag: "AIEM",
        presentationDate: "2023/03/20",
      },
      {
        id: 4,
        title: "Modelo 444",
        description: "Declaración de entregas de combustibles exentas",
        status: "y",
        modeProcedure: "T",
        url: "https://www3.gobiernodecanarias.org/tributos/atc/jsf/publico/asistenciaContribuyente/modelos/listado.jsp?tributo=AIEM",
        tag: "AIEM",
        presentationDate: "2023/03/20",
      },
      {
        id: 5,
        title: "Modelo 666",
        description: "Declaración de entregas de combustibles exentas",
        status: "y",
        modeProcedure: "T",
        url: "https://www3.gobiernodecanarias.org/tributos/atc/jsf/publico/asistenciaContribuyente/modelos/listado.jsp?tributo=AIEM",
        tag: "AIEM",
        presentationDate: "2023/03/20",
      },
      {
        id: 6,
        title: "Modelo 928",
        description: "Declaración de entregas de combustibles exentas",
        status: "y",
        modeProcedure: "T",
        url: "https://www3.gobiernodecanarias.org/tributos/atc/jsf/publico/asistenciaContribuyente/modelos/listado.jsp?tributo=AIEM",
        tag: "AIEM",
        presentationDate: "2023/03/20",
      },
    ];
    
    return {
      procedures,
      users
    };
  },
  methods:{
    getUsers(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  created(){
    this.getUsers();
  },  
  computed: {
    filteredProcedures() {
      let temporalProcedures = JSON.parse(JSON.stringify(this.procedures));
      if (this.textFilter != "") {
        temporalProcedures = temporalProcedures.filter((procedure) => {
          return (
            procedure.title
              .toUpperCase()
              .includes(this.textFilter.trim().toUpperCase()) ||
            procedure.description
              .toUpperCase()
              .includes(this.textFilter.trim().toUpperCase())
          );
        });
      }
      return temporalProcedures;
    },
  }
};
</script>