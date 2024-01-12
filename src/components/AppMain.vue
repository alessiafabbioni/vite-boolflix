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

    <section class="container">
        <div id="film-section">
            <div>
                <h1>Check out your movies:</h1>
            </div>
            <div class="row">
            <!-- Prototipo da ripetere -->
                
                <div v-for="film in store.filmList" :key="film.id" class="col-6 col-md-4 col-lg-3">
                    <AppCard :info="film"/>
                </div>
            </div>
        </div>
        <div>
            <div id="series-section">
                <div>
                    <h1>Check out your tv series:</h1>
                </div>

            <!-- Prototipo da ripetere -->
                <div class="row">
                    
                    <div v-if="store.seriesList.length>0">
                        <div v-for="series in store.seriesList" :key="series.id" class="col-6 col-md-4 col-lg-3">
                            <SeriesAppCard :info="series"/>
                        </div>
                    </div>
                    <div v-else class="searching-gif">
                        <span>It looks like there are no tv series that match your search</span>
                        <img :src="store.gifUrl" alt="searching gif">
                    </div>

                </div>
                

            </div>

        </div>
        


    </section>

    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


section {
    padding-top: 10rem;
}

.searching-gif{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span{
        padding: 1rem;
    }
}

</style>