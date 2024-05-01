<template>
  <stock-actuel />
  <button @click="leStock.vente">Une vente</button>
  <button @click="leStock.reappro">Réapprovisionnement</button>
  <hr />
  <div id="info">{{ leStock.stockBas }}</div>
  <hr />
  <div>Modification manuelle du stok</div>
  <input type="text" v-model="leStock.stock" size="3" />
  <hr />
  {{ leStock.lastStockVal }}
  <div v-for="val in leStock.lastStockVal" :key="val">
    Les valeurs du stock : {{ leStock.lastStockVal }}
  </div>
</template>
<style scoped>
#stock,
#info {
  font-size: 3rem;
}
button {
  padding: 1 rem;
  margin: 1rem;
}
</style>
<script setup>
import { stockStore } from "@/stores/stock.js";
import StockActuel from "@/components/StockActuel.vue";
let leStock = stockStore();
</script>
