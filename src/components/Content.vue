<template>
  <section>
    <section v-if="filteredProcedures.length <= 0" class="no-result">
    <h2 class="text-bold">
      No hemos encontrado coincidencias para tu búsqueda. Por favor, intenta con otra búsqueda
    </h2>            
    </section>

    <h2 v-else class="text-bold text-primary">
      Se han encontrado un total de {{ filteredProcedures.length }} resultados para la búsqueda {{ textFilter }}
    </h2>
    <ProcedureItem v-for="procedure in filteredProcedures" :key="procedure.id">
      <template #title>{{ procedure.title }}</template>
      <template #description>{{ procedure.description }}</template>
      <iconUser v-if="procedure.modeProcedure === 'PT'" />
      <iconDoc v-if="procedure.modeProcedure === 'PT'" />
      <iconDoc v-if="procedure.modeProcedure === 'T'" />
      <iconDoc v-if="procedure.modeProcedure === 'P'" />
      <template #button><button type="button" @click="showDetails(procedure.id)"
          class="btn-primary">Acceder</button></template>
    </ProcedureItem>


  </section>
</template>

<script>
import ProcedureItem from "../components/ProcedureItem.vue";
import ProcedureDetails from "../components/ProcedureDetails.vue"
import iconUser from "../components/icons/iconUser.vue";
import iconDoc from "../components/icons/iconDoc.vue";
//import ProcedureServices from "../services/procedure.service.js";
export default {
  components: {
    ProcedureDetails,
    ProcedureItem,
    iconUser,
    iconDoc,
  },
  props: {
    textFilter: String
  },
  data() {
    let isHidden = true;
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
        isHidden: true,
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
        isHidden: true,
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
        isHidden: true,
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
        isHidden: true,
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
        isHidden: true,
      },
    ];

    return {
      procedures,
      isHidden,
    };
  },
  methods: {
    /* getUsers(){
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response => {
         this.users = response.data;
       })
       .catch(error => {
         console.log(error);
       });
     }*/

    showDetails(id) {
      this.procedures.forEach((procedure) => {
        procedure.isHidden = true;
      });
      let idProcedure = id;
      this.procedures[idProcedure].isHidden = false;


    }
  },
  created() {
    //this.getUsers();
    //ProcedureServices.getUsers().then(data => {this.users = data});
  },
  computed: {
    filteredProcedures() {
      let temporalProcedures = JSON.parse(JSON.stringify(this.procedures));
      if (this.$props.textFilter != "") {
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
<style>
.no-result{
  background-color: var(--danger-soft);
  padding: 4rem;
  border-radius: 1rem;
  
}
.no-result h2{
  color: var(--danger-dark);
}
</style>