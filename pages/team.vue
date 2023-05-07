<template>
    <div class="w-full bg-base-200">
        <section class="text-center max-w-xl mx-auto pt-10 pb-20">
            <h1 class="text-4xl prevent-select text-center mb-10">Our Team</h1>


            <div class="grid md:grid-cols-2 gap-6 lg:gap-xl-12">
                <div class="mb-12 lg:mb-0" v-for="(member, key) in team">
                    <img class="rounded-lg shadow-lg mb-6 mx-auto prevent-select" draggable="false" :src="member.avatar"
                        alt="avatar" style="width: 150px" />
                    <h5 class="text-lg font-bold mb-4  prevent-select">{{ member.username }}</h5>
                    <p class="mb-6 prevent-select">{{ member.position }}</p>
                    <ul class="list-inside flex mx-auto justify-center">
                        <a v-if="member.github" :href="member.github" target="_blank" class="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                                class="w-4 h-4 text-secondary cursor-pointer">
                                <path fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>
                        <a v-if="member.youtube" :href="member.youtube" target="_blank" class="px-2">
                            <svg class="w-5 h-5 text-secondary cursor-pointer fill-current pb-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                            </svg>
                        </a>
                        <a v-if="member.twitch" :href="member.twitch" target="_blank" class="px-2">
                            <svg class="w-4 h-4 text-secondary cursor-pointer fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
                            </svg>
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import team from '~/data/team.json'

export default defineNuxtComponent({
    head(nuxtApp) {
        // `head` receives the nuxt app but cannot access the component instance
        return {
            title: 'Our Team | BCC Scripts',
            meta: [
                {
                    name: 'description',
                    content: 'Meet the talented and experienced team behind our premier RedM Development Studio! Our team is made up of skilled developers, designers, and professionals who are passionate about creating amazing RedM experiences. From scripting to graphic design, our team members bring a wealth of expertise and creativity to every project we undertake. Get to know our team members and learn more about their individual skills and contributions to our studio\'s success. '
                },
                {
                    name: 'keywords',
                    content: 'RedM, development, studio, team, members, developers, designers, professionals, redm, vorp, VORP'
                }
            ]
        }
    },
    name: 'ResourcesView',
    data() {
        return {
            team: team
        };
    },
    methods: {
    }
});
</script>