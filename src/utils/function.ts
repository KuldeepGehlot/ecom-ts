import axios from "axios";


export const instance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export function getProducts() {
  
}