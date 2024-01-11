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

  },

  created() {

  }
}




</script>

<template>
  <AppHeader/>
  <main>
    <AppMain/>
  </main>

</template>

<style lang="scss">
@use './styles/general.scss';

</style>

