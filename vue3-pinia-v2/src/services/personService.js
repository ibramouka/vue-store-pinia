// services/personService.js

import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=3";

export async function fetchPersons() {
  try {
    const response = await axios.get(API_URL);
    console.log("********", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching persons:", error);
    throw error;
  }
}
