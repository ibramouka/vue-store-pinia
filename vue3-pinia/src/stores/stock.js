import { defineStore } from "pinia";

export const stockStore = defineStore({
  id: "stockCorant",
  state: () => ({
    stock: 0,
    lastStockVal: [],
  }),

  actions: {
    vente() {
      this.stock--;
      this.lastStockVal.push(this.stock);
    },
    reappro() {
      this.stock += 10;
      this.lastStockVal.push(this.stock);
    },
  },

  getters: {
    stockBas: (state) => {
      if (state.stock < 10) return "Attention le stoclk est trop bas";
      else return "Le stock est correct";
    },
  },
});
