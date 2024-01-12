<script>
export default {
    name: 'SeriesAppCard',
    props: {
        info: Object
    },
    methods: {
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
    <div>
            <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="series poster image">
        </div>
        <div class="card-info">
            <div>
                <span class="font-weight-bold">Title: </span>
                <span>{{ info.name}}</span>
            </div>
            <div>
                <span class="font-weight-bold">Original title: </span>
                <span>{{ info.original_name}}</span>
            </div>
            <div>
                <span class="font-weight-bold">Original language: </span>
                <span>{{ getLanguageFlag(info.original_language) }}</span>
            </div>
            <div>
                <span class="font-weight-bold">Rating: </span>
                <span v-for="n in mediaRating" :key="n">⭐️</span>
            </div>

        </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>