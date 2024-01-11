<script>
import AppCard from './AppCard.vue';
import SeriesAppCard from './SeriesAppCard.vue';

//importo store
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppCard,
        SeriesAppCard,
    },
    data() {
    return {
        store,
        }
    },

}

</script>

<!-- // ricordati di aggiungere il v if e v else per le due sezioni 
in caso ci siano film o serie da mostrare o meno -->

<template>
    <section id="film-section" class="row">

        <!-- Prototipo da ripetere -->
        <div v-for="film in store.filmList" :key="film.id" class="col-6 col-md-4 col-lg-3">
            <AppCard :info="film"/>
        </div>

    </section>

    <section id="series-section" class="row">

        <!-- Prototipo da ripetere -->
        <div v-for="series in store.seriesList" :key="series.id" class="col-6 col-md-4 col-lg-3">
            <SeriesAppCard :info="series"/>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>