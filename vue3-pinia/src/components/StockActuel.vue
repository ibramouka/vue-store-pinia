<template>
  <div id="stock">Stock actuel : {{ leStock.stock }}</div>
  <hr />
  <div>Le stock actuel fois deux = {{ leStockActuelFoisDix }}</div>
</template>

<script setup>
import { stockStore } from "@/stores/stock.js";
import { computed } from "vue";

let leStock = stockStore();

//Exploitation des données du store dans un composant
const leStockActuelFoisDix = computed(() => {
  return leStock.stock * 10;
});
</script>
