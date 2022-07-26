<template>
    <form class="is-flex is-justify-content-center">
        <div class="field has-addons">
            <p class="control">
                <input v-model="searchterms" class="input" type="text" placeholder="Find a post">
            </p>
            <p class="control">
                <button class="button">
                    Search
                </button>
            </p>
        </div>
    </form>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const searchterms = ref(route.query.q);

watch(searchterms, (value) => {
    router.replace({ path: "/cercador", query: { q: value}})
})

</script>