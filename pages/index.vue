<template>
    <div>
        <section id="header-hero" class="hero is-primary">
            <div class="hero-body">
                <h1 class="is-size-1 title">
                    unajusta.cat
                </h1>
                <h2 class="is-size-4 subtitle">
                    Un lloc web per organitzar torneigs locals de qualsevol esport.
                </h2>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <h2 class="is-size-4 subtitle">
                    Una frase que tenia pensada i ara no recordo.
                </h2>
            </div>
        </section>

        <showcase-stats />

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h3 class="is-size-2">Uneix-te a un torneig</h3>
                        <div class="passos">
                            <div class="pas">
                                <div class="cont">
                                    <h4>Cerca un torneig que t'agradi</h4>
                                    <span>Pots buscar per esport, per proximitat, i per tot el que et puguis
                                        imaginar</span>
                                </div>
                            </div>
                            <div class="pas">
                                <div class="cont">
                                    <h4>Consulta les condicions</h4>
                                </div>
                            </div>
                            <div class="pas">
                                <div class="cont">
                                    <h4>I apuntat</h4>
                                    <span>És aixi de facil</span>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <NuxtLink to="/cercador" class="button is-primary">
                                Cerca una justa
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="column">
                        <h3 class="is-size-2 is-right">Organitza un torneig</h3>
                        <div class="passos is-right">
                            <div class="pas">
                                <div class="cont">
                                    <h4>Pensa un bon nom i un lloc</h4>
                                </div>
                            </div>
                            <div class="pas">
                                <div class="cont">
                                    <h4>Explica les caracteristiques del torneig</h4>
                                </div>
                            </div>
                            <div class="pas">
                                <div class="cont">
                                    <h4>Publica el torneig</h4>
                                    <span>I comparteix l'enllaç per a que tothom s'hi pugui apuntar</span>
                                </div>
                            </div>
                        </div>
                        <div class="buttons is-right">
                            <NuxtLink to="organitza" class="button is-primary">
                                Crea una justa
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="hero">
            <div class="hero-body">
                <search-bar />
            </div>
        </section>
    </div>
</template>
