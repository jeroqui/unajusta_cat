<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <user-figure size="full" />
                </div>
                <div class="column">
                    <h1 class="title is-size-1">{{ username }}</h1>
                    <h2 class="subtitle">Nom Cognom1 Cognom2</h2>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

const props = defineProps({
    username: String
});


</script>