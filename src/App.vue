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
      
      //chiamata per i film
      let filmUrl = `${store.apiURL}/movie${store.apiKey}`;
      

      if(store.searchText !== "") {
        filmUrl += `&query=${store.searchText}`;
      }

      axios
      .get(filmUrl)
      .then((filmRes=> {
        store.filmList = filmRes.data.results;
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })
      
      //chiamata per le serie tv
      let seriesUrl = `${store.apiURL}/tv${store.apiKey}`;

      if(store.searchText !== "") {
        seriesUrl += `&query=${store.searchText}`;
      }

      axios
      .get(seriesUrl)
      .then((seriesRes=> {
        store.seriesList = seriesRes.data.results;
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

main{
  position: relative;
  padding-top: 7rem;
}
</style>

