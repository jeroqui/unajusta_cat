<template>
    <section class="section">
        <div class="container">
            <main class="block">
                <h1 class="is-size-1 title">Cercador</h1>
                <search-bar />
            </main>

            <div class="columns">
                <div class="column is-two-thirds">
                    <div class="box" v-for="item in 10">
                        Test {{item}}
                    </div>
                </div>
                <div class="column">
                    <form @submit.prevent="">
                        <h2 class="is-size-2">
                            Filtres

                        </h2>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>