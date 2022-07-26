<template>
    <div>
        <section id="header-hero" class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">
                    unajusta.cat
                </h1>
                <h1 class="subtitle">
                    Un lloc web per organitzar torneigs locals de qualsevol esport.
                </h1>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h2>Uneixte a un torneig</h2>
                        <div class="buttons">
                            <NuxtLink to="organitza" class="button is-primary">
                                Cerca una justa
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="column">
                        <h2>Organitza un torneig</h2>
                        <div class="buttons">
                            <NuxtLink to="organitza" class="button is-primary">
                                Crea una justa
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script setup>
import { useGetUsersQuery } from '@/generated/operations';

const { result, loading } = await useGetUsersQuery();

</script>
