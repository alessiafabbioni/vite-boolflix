<script>

//import axios
import axios from 'axios';

//importo componenti figli
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


//importo store
import { store } from './store';

export default {
  components: {
      AppHeader,
      AppMain,

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMedia(){
      let filmUrl = `${store.apiURL}/movie${store.apiKey}`;
      //let myFilmUrl = `${filmUrlURL}&query=${this.searchText}`;

      if(store.searchText !== "") {
        filmUrl += `?$query=${store.searchText}`;
      }

      //chiamata per i film
      axios
      .get(filmUrl)
      .then((filmRes=> {
        store.filmList = filmRes.data.results;
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })

    }



  },

  created() {
    this.getMedia();

  }
}




</script>

<template>
  <AppHeader @performSearch="getMedia"/>
  <main>
    <AppMain/>
  </main>

</template>

<style lang="scss">
@use './styles/general.scss';

</style>

