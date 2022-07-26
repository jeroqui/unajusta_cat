<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                <img src="/img/unajusta_logo.png">
            </NuxtLink>

            <a role="button" :class="menu? 'navbar-burger is-active' : 'navbar-burger'" aria-label="menu" aria-expanded="false"
                data-target="main-navbar" @click="menu = !menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="main-navbar" :class="menu? 'navbar-menu is-active' : 'navbar-menu'">
            <div class="navbar-start">
                <NuxtLink to="/" class="navbar-item">
                    Home
                </NuxtLink>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="!user.loggedUser.username" class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <NuxtLink to="signup" class="button is-primary">
                            <strong>Sign up</strong>
                        </NuxtLink>
                        <NuxtLink to="login" class="button is-light">
                            Log in
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div v-else class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <NuxtLink to="organitza" class="button is-light">
                            Crea una justa
                        </NuxtLink>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <strong class="navbar-username">{{user.loggedUser.username}}</strong>
                        <user-figure />
                    </a>

                    <div class="navbar-dropdown">
                        <NuxtLink to="profile" class="navbar-item">
                            Profile
                        </NuxtLink>

                        <hr class="navbar-divider">
                        <a @click="logout" class="navbar-item">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<script setup>
import { useUserStore } from '~/store/user'
import { ref } from 'vue'

import { useLogoutUserMutation } from '@/generated/operations';

const user = useUserStore();


const menu = ref(false);




const { mutate: logout, onDone, onError } = useLogoutUserMutation();

onDone((res) => {
    if (res.data.logoutUser) {
        user.$reset();
    }
})

onError((res) => {
    console.log(res);
})

</script>