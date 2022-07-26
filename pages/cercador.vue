<template>
    <section class="section">
        <div class="container">
            <main class="block">
                <h1 class="is-size-1 title">Cercador</h1>
                <div class="is-flex is-justify-content-center">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" placeholder="Find a post">
                        </p>
                        <p class="control">
                            <button class="button">
                                Search
                            </button>
                        </p>
                    </div>
                </div>
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