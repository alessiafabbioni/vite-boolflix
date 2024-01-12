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
        <div>
            <div id="film-section">
                <div>
                    <h1>Check out your movies:</h1>
                </div>
                <div>
                    <div v-if="store.filmList.length>0" class="row">
                        <div v-for="film in store.filmList" :key="film.id" class="col-6 col-md-4 col-lg-3">
                            <AppCard :info="film"/>
                        </div>

                    </div>
                    <div v-else class="searching-gif">
                        <span>It looks like there are no tv series that match your search 🤷🏻‍♀️</span>
                        <img :src="store.gifUrl" alt="searching gif">
                        <span>Create a new search or update your current one ✍🏼</span>
                    </div>

                </div>
            </div>

            <div>
                <div id="series-section">
                    <div>
                        <h1>Check out your tv series:</h1>
                    </div>
                    <div>
                        <div v-if="store.seriesList.length>0" class="row">
                            <ul v-for="series in store.seriesList" :key="series.id" class="col-6 col-md-4 col-lg-3">
                                <li><SeriesAppCard :info="series"/></li>
                            </ul>
                        </div>
                        <div v-else class="searching-gif">
                            <span>It looks like there are no tv series that match your search, create a new search or change your current one</span>
                            <img :src="store.gifUrl" alt="searching gif">
                            <span>Create a new search or update your current one ✍🏼</span>
                        </div>

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

    img {
        object-fit: cover;
    }

    ul {
        list-style: none;
    }
}

#series-section{
    margin-top: 5rem;

    h1 {
        margin-bottom: 3rem;
    }
}

.searching-gif{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;

    span{
        padding: 1rem;
    }
}

</style>