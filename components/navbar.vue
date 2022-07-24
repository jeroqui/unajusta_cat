<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
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
                <a class="navbar-item">
                    Home
                </a>

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

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <NuxtLink to="login" class="button is-primary">
                            <strong>Sign up</strong>
                        </NuxtLink>
                        <NuxtLink to="login" class="button is-light">
                            Log in
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<script setup>

import { ref } from 'vue'

const menu = ref(false);

</script>