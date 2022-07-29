<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <user-figure size="full" />
                </div>
                <div class="column">
                    <h1 class="title is-size-1">{{ username }}</h1>
                    <h2 v-if="!loading && !error" class="subtitle">{{ result.user.persona.nom }} {{ result.user.persona.cognoms }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useGetProfileInfoQuery } from '@/generated/operations'

const props = defineProps({
    username: String
});



const { onError, result, loading, error } = await useGetProfileInfoQuery({username: props.username});



onError((res) => {
    console.log(res);
})

</script>