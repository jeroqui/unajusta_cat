<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Crea una justa</h1>


            <div class="columns">
                <div class="column is-three-quarters">
                    <div class="field">
                        <label class="label">Títol</label>
                        <div class="control">
                            <input class="input" :class="errors.title.any ? 'is-danger' : ''" type="text" placeholder="Títol" v-model="title" @change="validate('title')">
                            <p v-if="errors.title.any" class="help is-danger">{{errors.title.message}}</p>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Descripció</label>
                        <textarea class="textarea" :class="(description.length < 5) ? 'is-danger' : ''" placeholder="e.g. Hello world" v-model="description"></textarea>
                        <p v-if="description.length < 5" class="help is-danger">Should be longer</p>
                    </div>

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
                            <div class="select" :class="loading ? 'is-lading' : ''">
                                <select v-model="esport">
                                    <option value="" selected disabled>Esport / Disciplina</option>
                                    <option v-if="!loading && !error" v-for="item in result.esports" :value="item.id" :key="item.id">{{item.nom}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <progress class="progress is-info" :value="3 - errors.amount" max="3"></progress>
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


const errors = reactive({
    title: {},
    description: {},
    esports: {},
    amount: 3
});


const { result, loading, error } = await useGetAllSportsQuery();



function validate(item) {
    switch (item) {
        case 'title':
            if (true) {
                errors.title.any = true;
            }
            break;
    
        default:
            break;
    }
}


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