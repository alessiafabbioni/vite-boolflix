<script>
import AppCard from './AppCard.vue';

//importo store
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
    return {
        store,
        }
    },

}

</script>

<template>
    <section class="row">

        <!-- Prototipo da ripetere -->
        <div v-for="film in store.filmList" :key="film.id" class="col-6 col-md-4 col-lg-3">
            <AppCard :info="film"/>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>