<template>
    <div>
        <section id="header-hero" class="hero is-primary">
            <div class="hero-body">
                <p class="title">
                unajusta.cat
                </p>
                <p class="subtitle">
                Un lloc web per organitzar torneigs locals de qualsevol esport.
                </p>
            </div>
        </section>
        <section class="section">
            <div class="container">
                {{result}}
            </div>
        </section>
    </div>
</template>


<script setup>
import { useGetUsersQuery } from '@/generated/operations';

const {result, loading} = await useGetUsersQuery();

</script>
