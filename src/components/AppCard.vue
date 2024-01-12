<script>
export default {
    name: 'AppCard',
    props: {
        info: Object
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
    },

    computed: {
        mediaRating() {
            return Math.round(this.info.vote_average / 2)
        }
    }


}

</script>

<template>
    <div class="text-center">
        <h1>{{ info.title }}</h1>
        <h2>{{ info.original_title }}</h2>
        <h3>{{ getLanguageFlag(info.original_language) }}</h3>
        <span v-for="n in mediaRating" :key="n">⭐️</span>

    </div>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="">
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>