<script>
export default {
    name: 'AppCard',
    props: {
        info: Object
    }

}

</script>

<template>
    <div class="text-center">
        <h1>{{ info.title }}</h1>
        <h2>{{ info.original_title }}</h2>
        <h3>{{ info.original_language }}</h3>
        <h4>{{ info.vote_average }}</h4>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>