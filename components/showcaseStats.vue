<template>
    <section class="level">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Usuaris</p>
                <p class="title">{{ usuarisAmount }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Justes</p>
                <p class="title">{{ justesAmount }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Escuts</p>
                <p class="title">{{ escutsAmount }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useGetUsersQuery } from '@/generated/operations';

const { result, onResult } = await useGetUsersQuery();

const usuarisAmount = ref(0);
const justesAmount = ref(0);
const escutsAmount = ref(0);


onResult((res) => {
    usuarisAmount.value = res.data.users.length;
})

onMounted(() => {
    try {
        usuarisAmount.value = result.value.users.length;
    }catch {}
})

</script>