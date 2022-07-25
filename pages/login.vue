<template>
    <section class="section">

        <div class="container">
            <form class="box" v-on:submit.prevent="login({username, password})">
                <div class="field">
                    <label class="label">Usuari</label>
                    <div class="control">
                        <input v-model="username" class="input" type="text" placeholder="usuari">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Contrasenya</label>
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="********">
                    </div>
                </div>

                <button class="button is-primary">Sign in</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { useUserStore } from '~/store/user'
import { useLoginUserMutation } from '~~/composables/api';
const user = useUserStore();

const username = ref("");
const password = ref("");


const { mutate: login, onDone, onError } = useLoginUserMutation();

onDone((res) => {
    user.logIn(res.data)
})

onError((res) => {
    console.log(res);
})

</script>