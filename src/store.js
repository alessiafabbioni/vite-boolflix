import { reactive } from 'vue'

export const store = reactive ({
    filmList: [],
    seriesList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=8f11a389287f2ef115b50dade75fd0b3&query=ritorno+al+futuro",

});