<template>
  <div>
    <h1>Liste de Personnes</h1>
    {{ persons }}
    <div v-if="loading">Chargement en cours...</div>
    <div v-else-if="error">Une erreur s'est produite: {{ error }}</div>
    <ul v-else>
      <li v-for="person in persons" :key="person.id">
        {{ person.name }} - {{ person.age }} ans
      </li>
    </ul>

    <h2>Personnes avec order: 4</h2>
    <div v-if="loading">Chargement en cours...</div>
    <div v-else-if="error">Une erreur s'est produite: {{ error }}</div>
    <div v-else>
      <div v-if="!personsOrder4.length">
        <p>Aucune personne trouvée avec order: 4</p>
      </div>
      <div v-else>
        <p>Personnes trouvées avec order: 4:</p>
        <ul>
          <li v-for="person in personsOrder4" :key="person.id">
            {{ person.name }} - {{ person.age }} ans
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePersonStore } from "@/stores/personStore.js";
import { onBeforeMount, computed } from "vue";

let personStore = usePersonStore();
//const persons = personStore.persons;
const loading = personStore.loading;
const error = personStore.error;

// Appel de la méthode fetchPersons lors de la création du composant
onBeforeMount(() => {
  personStore.fetchPersons();
});

// Utilisation de la méthode getOrderByOrder pour obtenir la liste des personnes avec order: 4
const personsOrder4 = personStore.getOrderByOrder();

const persons = computed(() => {
  return personStore.persons;
});
</script>
