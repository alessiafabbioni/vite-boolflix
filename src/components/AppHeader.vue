<script>
export default {
    name: 'AppHeader',


}

</script>

<template>
    <header class="container-fluid text-center">
        <div class="row justify-content-between align-items-center">
            <div class="col-4">
                <h1>BOOLFLIX</h1>
            </div>
            <div class="col-4">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search movie" aria-label="Search movie" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>

        </div>
    </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header{
    background-color: black;
}

h1 {
    color: red;
    font-family: $main-font;
    margin: 0;
}


</style>