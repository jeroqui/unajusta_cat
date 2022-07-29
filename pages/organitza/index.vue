<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Crea una justa</h1>


            <div class="columns">
                <div class="column is-three-quarters">
                    <text-input-field name="Títol" v-model="title" />
                    <text-input-field name="Descripció" :textarea="true" v-model="description" />

                    <div class="columns mt-5">
                        <div class="column">
                            <div class="block">
                                <label class="checkbox">
                                    <input type="checkbox" v-model="singleGroups">
                                    Grups d'una sola persona
                                </label>
                            </div>
                        </div>

                        <div class="column" v-if="!singleGroups">
                            <div class="block">
                                <label class="checkbox">
                                    <input type="checkbox" v-model="fixedGroups">
                                    Nombre de participants fix
                                </label>
                            </div>
                            <template v-if="!fixedGroups">
                                <div class="block">
                                    Min: <input class="input" type="number" placeholder="Minim" v-model="minGroups">
                                </div>
                                    Max: <input class="input" type="number" placeholder="Màxim" v-model="maxGroups">
                                

                            </template>
                            <div class="block" v-else>
                                <input class="input" type="number" placeholder="Nombre de participants" v-model="minGroups">
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <div class="control">
                            <div class="select" :class="loading ? 'is-loading' : ''">
                                <select v-model="esport">
                                    <option value="" selected disabled>Esport / Disciplina</option>
                                    <option v-if="!loading && !error" v-for="item in result.esports" :value="item.id" :key="item.id">{{item.nom}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <progress class="progress is-info" :value="progress" max="3"></progress>
                    </div>


                    <div class="buttons is-right">
                        <NuxtLink to="/organitza/justa-test" class="button is-primary">Sigues un bon rei</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue'
import {useGetAllSportsQuery} from '@/generated/operations'


const title = ref("");
const description = ref("");


const singleGroups = ref(true);
const fixedGroups = ref(false);
const minGroups = ref(1);
const maxGroups = ref(2);

const esport = ref("");



const progress = ref(0);




const { result, loading, error } = await useGetAllSportsQuery();




watch(maxGroups, (newVal) => {
    if (newVal < minGroups.value && newVal > 0) {
        minGroups.value = newVal;
    }else if (newVal < 1) {
        maxGroups.value = 1;
    }
})

watch(minGroups, (newVal) => {
    if (newVal > maxGroups.value) {
        maxGroups.value = newVal;
    }else if (newVal < 1) {
        minGroups.value = 1;
    }
})

</script>