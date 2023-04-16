
<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="mx-auto max-w-lg text-center">
                <h2 class="text-3xl font-bold sm:text-4xl prevent-select">Empower Your Server</h2>

                <p class="mt-4 prevent-select">
                    Our scripts are the perfect way to empower your server, delivering an unforgettable and unique gaming
                    experience.
                    <br/><br/>
                    Experience the excitement of stealing an oil wagon, the mystery of treasure hunting, or the Love of your very own lotal companion! With our scripts, the possibilities are endless. So why wait? Empower your server today!
                </p>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div class="block rounded-xl border border-accent p-8 shadow-xl transition" v-for="item in items">
                    <svg v-if="item.icon==='lightning'" class="h-10 w-10 text-accent fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"/></svg>
                    <svg v-if="item.icon==='puzzle'" class="h-10 w-10 text-accent fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8v0c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2v0c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2v0c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2v0c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8v0c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320v0c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256v0C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2v0z"/></svg>
                    <svg v-if="item.icon==='eye'" class="h-10 w-10 text-accent fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"/></svg>                    
                    <h2 class="mt-4 text-xl font-bold text-accent prevent-select">{{ item.title }}</h2>

                    <p class="mt-1 text-sm prevent-select">
                       {{ item.description }}
                    </p>
                </div>
            </div>

            <div class="mt-12 text-center">
                <button class="btn btn-accent" @click="gotoresources()">Supercharge Your Server</button>
            </div>
        </div>
    </section>
</template>
 
<script>
export default {
    name: 'Stats',
    data() {
        return {
            items: [
                {
                    icon: 'eye',
                    title: 'Improved Immersion',
                    description: 'Bring a whole new level of depth and realism to your roleplay server. Allow your players to fully immerse themselves in the world to get lost in their character\'s story.'
                },
                {
                    icon: 'puzzle',
                    title: 'Enhanced Customization',
                    description: 'Tailor your gaming experience to your communities specific needs and preferences. With a wide range of options and settings, our scripts give users complete control over their gameplay.'
                },
                {
                    icon: 'lightning',
                    title: 'Lighting Fast',
                    description: 'Our scripts are optimized for maximum performance, ensuring that your server runs smoothly and efficiently even under heavy traffic.'
                }
            ]
        }
    },
    methods: {
        gotoresources() {
            this.$router.push('/resources')
        }
    }
};
</script>
 
 