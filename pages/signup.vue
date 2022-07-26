<template>
    <section class="section">
        <div class="container">
            <form class="box narrow-box" v-on:submit.prevent="signup({username, email, password, nom, cognoms})">
                <div class="field">
                    <label class="label">Nom</label>
                    <div class="control">
                        <input v-model="nom" class="input" type="text" placeholder="Nom">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Cognoms</label>
                    <div class="control">
                        <input v-model="cognoms" class="input" type="text" placeholder="Cognom Cognom">
                    </div>
                </div>

                <hr>
            
                <div class="field">
                    <label class="label">Usuari</label>
                    <div class="control">
                        <input v-model="username" class="input" type="text" placeholder="usuari">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input" type="email" placeholder="usuari@exemple.cat">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Contrasenya</label>
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="********">
                    </div>
                </div>



                <button class="button is-primary block">Register</button>

                <p v-if="error" class="block notification is-danger">{{error}}</p>
                <p>{{loginError}}</p>
            </form>
        </div>
    </section>
</template>

<script setup>
import { useUserStore } from '~~/store/user';
import { useRegisterUserMutation, useLoginUserMutation } from '@/generated/operations'

const route = useRoute();


const user = useUserStore();

const username = ref("");
const email = ref("");
const password = ref("");
const nom = ref("");
const cognoms = ref("");

const { mutate: signup, onDone, error } = useRegisterUserMutation();

const { mutate: login, error: loginError } = useLoginUserMutation();


async function redirect() {
    if (route.params.next) {
        return await navigateTo(route.params.next);
    }

    return await navigateTo('/')
}

onDone(async (res) => {
    login({username: res.data.registerUser.username, password: password.value});
    user.logIn(res.data);
    redirect();
})


</script>