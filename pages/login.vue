<template>
    <section class="section">

        <div class="container">
            <form class="box" v-on:submit="login">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="username" class="input" type="text" placeholder="usuari">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
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
import gql from 'graphql-tag'


const username = ref("");
const password = ref("");


const SINGLE_CHARACTER_QUERY = gql`
    mutation Mutation($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            id
            username
        }
    }
`

function login() {
    return false;
}


</script>