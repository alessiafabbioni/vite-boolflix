<script>
export default {
    name: 'AppHeader',
    props: ['message']

}

</script>

<template>
    <header class="container">
        <h1>{{ message }}</h1>

    </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header{
    background-color: black;
    max-height: 60px;
    margin: 2rem;

    h1 {
        color: red;
    }
}


</style>