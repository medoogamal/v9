import { defineStore } from "pinia";

export const useMovieStore = defineStore("Movie", {
  state: () => ({
    movie: null,
    showFullViedeo: false,
  }),
});
