import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=bb93622c8d70b641699e25ad1ee46b3c&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default api;
