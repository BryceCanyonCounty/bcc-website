<template>
    <div class="bg-base-200 py-10">
        <div>
            <h1 class="text-4xl prevent-select text-center mb-4">Icons</h1>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center content-center m-10">
                <div class="card card-compact w-full bg-base-100 shadow-xl overflow-hidden" v-for="icon in iconmodules"
                    :key="icon">
                    <figure class="pt-4"><img style="height: 90px;" :src="icon.url" alt="Shoes" /></figure>
                    <div class="card-body mt-4">
                        <h2 class="card-title">{{ icon.name }}</h2>
                        <p>{{ icon.filename }}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-4" @click="downloadImage(icon)">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
const ServerIcons = import.meta.glob('../assets/servericons/*.png', { eager: true })

export default defineNuxtComponent({
    head(nuxtApp) {
        // `head` receives the nuxt app but cannot access the component instance
        return {
            title: 'Icons | BCC Scripts',
            meta: [
                {
                    name: 'description',
                    content: 'Explore our extensive collection of top-quality RedM Icons for your server!'
                },
                {
                    name: 'keywords',
                    content: 'RedM, development, studio, scripts, resources, open-source, tutorials, tools, redm, vorp, VORP'
                }
            ]
        }
    },
    name: 'IconsView',
    data() {
        return {
            iconmodules: []
        };
    },
    mounted() {
        window.scrollTo(0, 0);

        for (const path in ServerIcons) {
            this.iconmodules.push({
                name: path.replaceAll('../assets/servericons/', '').replaceAll('_', ' ').replaceAll('.png', ''),
                url: new URL(path, import.meta.url).href,
                filename: path.replaceAll('../assets/servericons/', '')
            })
        }
    },
    methods: {
        async downloadImage(icon) {
            var blobdata = await this.$api
                .get(icon.url, {
                    responseType: "arraybuffer"
                })
                .then(response => {
                    return response.data
                });
            
            const turl = window.URL.createObjectURL(new Blob([blobdata]))
            const link = document.createElement('a')
            link.href = turl
            link.setAttribute('download', icon.filename)
            document.body.appendChild(link)
            link.click()
        },
    },
    computed: {
    }
});
</script>
    