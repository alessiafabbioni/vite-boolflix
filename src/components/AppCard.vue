<script>
export default {
    name: 'AppCard',
    props: {
        info: Object
    },

    //traccia se c'è un mouseover sulla card
    data() {
    return {
        hovered: false
        };
    },

    methods: {
    
    //così funziona ma se rimane tempo fare l'import delle immagini
    //tramite path come da slides

        getLanguageFlag(languageCode) {
        const flagMapping = {
            'en': '🇺🇸', 
            'it': '🇮🇹',
            'de': '🇩🇪',
            'fr': '🇫🇷',
            'zh': '🇨🇳',
            'es': '🇪🇸',
            'ja': '🇯🇵',

        };

        const defaultFlag = '🌐';

        return flagMapping[languageCode] || defaultFlag;
        },
        
    //definire i methods per il flip dell'immagine
        showInfo() {
        this.hovered = true;
        console.log(this.showInfo);
        },
        hideInfo() {
        this.hovered = false;
        console.log(this.hideInfo);
        },
    },

    computed: {
        mediaRating() {
            return Math.round(this.info.vote_average / 2)
        }
    }


}

</script>

<template>
    <section v-if="info.poster_path !== null" class="media-container" @mouseover="showInfo" @mouseleave="hideInfo">
        <div class="media-poster">
            <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="movie poster image">
        </div>
        <div v-if="hovered" class="card-info">
            <div>
                <span>Title: </span>
                <span>{{ info.title }}</span>
            </div>
            <div v-if="info.original_title !== info.title">
                <span>Original title: </span>
                <span>{{ info.original_title }}</span>
            </div>
            <div>
                <span>Original language: </span>
                <span>{{ getLanguageFlag(info.original_language) }}</span>
            </div>
            <div v-if="info.vote_average !== null && info.vote_average !== undefined && info.vote_average>1">
                <span>Rating: </span>
                <span v-for="n in mediaRating" :key="n">⭐️</span>
            </div>
            <div v-else>Rating not available 🥲</div>
            <div>
                <span>Overview: </span>
                <span>{{ info.overview }}</span>
            </div>
        </div>

    </section>

    <section v-else> Media not available 🥲</section>
    



</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

span:first-child {
    font-weight: 700;
}
.media-container{
    position: relative;
    perspective: 1000px;
}
.media-poster {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
}

.media-container:hover .media-poster {
    transform: rotateY(180deg);
    opacity: 20%;
}

.card-info {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 2rem;
    display: none;

}

.media-container:hover .card-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    overflow: scroll;

}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

</style>