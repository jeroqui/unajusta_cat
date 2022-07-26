<template>
    <div>
        <profile :username="username" />

        <section class="section">
            <div class="container">
                <h2 class="is-size-2">Awards</h2>
            </div>
        </section>
    </div>
</template>

<script setup>

const route = useRoute();

const username = ref(route.params.username);

</script>
