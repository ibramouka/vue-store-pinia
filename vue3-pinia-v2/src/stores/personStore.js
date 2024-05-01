// store/personStore.js

import { defineStore } from "pinia";
import { fetchPersons } from "@/services/personService.js";

export const usePersonStore = defineStore({
  id: "personStore",
  state: () => ({
    persons: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPersons() {
      try {
        this.loading = true;
        this.persons = await fetchPersons();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    getPerson() {
      console.log("***99*****", this.persons);
    },
  },
  getters: {
    getOrderByOrder: (state) => () => {
      return state.persons.filter(
        (personne) => personne.dob.age < age && personne
      );
    },
  },
});
