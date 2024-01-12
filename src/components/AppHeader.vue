<script>

//importo store
import { store } from '../store';


export default {
    name: 'AppHeader',
    data() {
    return {
        store,
        }
    },

    

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
                    <input v-model.trim="store.searchText" type="text" class="form-control" placeholder="Search" aria-label="Search media" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click.prevent="$emit('performSearch')">Search</button>
                </div>
            </div>

        </div>
    </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header{
    background-color: black;
    padding: 2rem;
    position: fixed;
    
}

h1 {
    color: red;
    font-family: $main-font;
    margin: 0;
}


</style>