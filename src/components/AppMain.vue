<script>
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppCard
    }

}

</script>

<template>
    <section class="row">

        <!-- Prototipo da ripetere -->
        <div class="col-6 col-md-4 col-lg-3">
            <AppCard/>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>