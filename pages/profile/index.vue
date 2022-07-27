<template>
    <div>
        <profile :username="user.loggedUser.username" />
    </div>
</template>

<script setup>
import { useUserStore } from '~~/store/user';

const user = useUserStore();


if (!user.loggedUser.username) {
    // throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

</script>