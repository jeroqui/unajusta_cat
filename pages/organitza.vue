<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Crea una justa</h1>


            <div class="columns">
                <div class="column is-three-quarters">
                    <div class="field">
                        <label class="label">Nom</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Nom">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Descripció</label>
                        <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
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
                                    Nombre de participants fixe
                                </label>
                            </div>
                            <template v-if="!fixedGroups">
                                <div class="block">
                                    <input class="input" type="number" placeholder="Minim">
                                </div>
                                <input class="input" type="number" placeholder="Màxim">
                            </template>
                            <div class="block" v-else>
                                <input class="input" type="number" placeholder="Nombre de participants">
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <div class="control has-icons-left">
                            <div class="select">
                                <select>
                                    <option selected>Esport / Disciplina</option>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                            <div class="icon is-small is-left">
                                <i class="fas fa-globe"></i>
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <progress class="progress is-info" value="45" max="100">45%</progress>
                    </div>


                    <div class="buttons is-right">
                        <NuxtLink to="/organitza/test" class="button is-primary">Sigues un bon rey</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue'



const singleGroups = ref(false);
const fixedGroups = ref(false);

</script>