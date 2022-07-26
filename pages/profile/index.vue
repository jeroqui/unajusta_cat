<template>
    <div>
        <profile :username="user.loggedUser.username" />
    </div>
</template>

<script setup>

import { useUserStore } from '~~/store/user';

const user = useUserStore();

</script>