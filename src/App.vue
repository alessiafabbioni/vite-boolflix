<script>

//import axios
import axios from 'axios';

//importo componenti figli
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'

//importo store
//import { store } from './store';

export default {
  components: {
      AppHeader,
      AppMain,
      AppCard,
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },

  created() {

  }
}




</script>

<template>
  <AppHeader message="Boolflix"/>
  <main>
    <AppMain/>
    <AppCard/>
  </main>

</template>

<style lang="scss">

</style>

