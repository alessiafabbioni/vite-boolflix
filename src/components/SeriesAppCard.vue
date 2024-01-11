<script>
export default {
    name: 'SeriesAppCard',
    props: {
        info: Object
    }

}

</script>

<template>
    <div class="text-center">
        <h1>{{ info.name }}</h1>
        <h2>{{ info.original_name }}</h2>
        <h3>{{ info.original_language }}</h3>
        <h4>{{ info.vote_average }}</h4>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>