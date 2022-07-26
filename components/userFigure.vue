<template>
    <figure class="image" :class="'is-' + size + 'x' + size">
        <img v-if="user.loggedUser.profilePic" src="" alt="" class="is-rounded">
        <div v-else class="default-profile has-background-primary"></div>
    </figure>
</template>

<script setup>
import { useUserStore } from '~/store/user'
const user = useUserStore();

const props = defineProps({
  size: {
    type: String,
    default: "48"
  }
})
</script>