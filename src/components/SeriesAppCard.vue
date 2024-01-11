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

}

</script>

<template>
    <div class="text-center">
        <h1>{{ info.name }}</h1>
        <h2>{{ info.original_name }}</h2>
        <h3>{{ getLanguageFlag(info.original_language) }}</h3>
        <h4>{{ info.vote_average }}</h4>

    </div>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="">
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>