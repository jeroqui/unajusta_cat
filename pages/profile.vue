<template>
    <section class="section">        
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <user-figure size="full" />
                </div>
                <div class="column">
                    <h1 class="title">{{user.loggedUser.username}}</h1>
                    <h2 class="subtitle">{{}}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { useUserStore } from '~~/store/user';

const user = useUserStore();




</script>