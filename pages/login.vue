<template>
    <section class="section">
        <div class="container">
            <form class="box narrow-box" v-on:submit.prevent="login({username, password})">
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

                <button class="button is-primary block">Log in</button>

                <p v-if="error" class="block notification is-danger">{{error}}</p>
            </form>
        </div>
    </section>
</template>

<script setup>
import { useUserStore } from '~/store/user'
import { useLoginUserMutation } from '@/generated/operations';
const user = useUserStore();


const username = ref("");
const password = ref("");

const route = useRoute();

async function redirect() {
    if (route.params.next) {
        return await navigateTo(route.params.next);
    }

    return await navigateTo('/')
}

const { mutate: login, onDone, onError, error } = useLoginUserMutation();

onDone((res) => {
    user.logIn({username: res.data.loginUser.username})
    redirect()
})


onError(() => {
    console.log(error);
})

</script>