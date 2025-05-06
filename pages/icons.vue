<template>
    <div class="bg-base-200 py-10">
        <div>
            <h1 class="text-4xl prevent-select align-center text-center mb-4">Icons</h1>
            <div class="m-w-xl mx-auto text-center flex gap-2 justify-center align-middle">
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    placeholder="Search icons..." 
                    class="input input-bordered w-full max-w-xs" 
                />
                <div :class="`inline-block tooltip tooltip-bottom hover:text-accent flex items-center`"
                    data-tip="Download Bundle" @click="downloadAllImages()">
                    <svg class="inline-block w-8 h-8 fill-current mr-4 hover:fill-accent cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                </div>
            </div>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center content-center m-10">
                <div class="card card-compact w-full bg-base-100 shadow-xl overflow-hidden" 
                    v-for="icon in filteredIcons" 
                    :key="icon.filename">
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
import servericons from '../data/icons.json'
export default defineNuxtComponent({
    head(nuxtApp) {
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
            iconmodules: [],
            searchQuery: '' // Add search query data property
        };
    },
    mounted() {
        window.scrollTo(0, 0);

        let l = servericons.length
        for (let i = 0; i < l; i++) {
            let filename = servericons[i];

            this.iconmodules.push({
                name: filename.replaceAll('.png', '').replaceAll('_', ' '),
                url: `https://bcc-scripts.com/servericons/${filename}`,
                filename: filename
            })
        }
    },
    methods: {
        async downloadIt(url, filename, api = true) {
            var blobdata = await this.$api
                .get(url, {
                    responseType: "arraybuffer"
                })
                .then(response => {
                    return response.data
                });
            
            const turl = window.URL.createObjectURL(new Blob([blobdata]))
            
            
            const link = document.createElement('a')
            link.href = turl
            link.setAttribute('download', filename)
            document.body.appendChild(link)
            link.click()
        },
        async downloadImage(icon) {
            this.downloadIt(icon.url, icon.filename)
        },
        async downloadAllImages() {
            window.open('https://github.com/BryceCanyonCounty/bcc-website/raw/main/public/servericonsbundle.zip', '_blank')
        }
    },
    computed: {
        // Add computed property for filtered icons
        filteredIcons() {
            if (!this.searchQuery) {
                return this.iconmodules;
            }
            const query = this.searchQuery.toLowerCase();
            return this.iconmodules.filter(icon => 
                icon.name.toLowerCase().includes(query) || 
                icon.filename.toLowerCase().includes(query)
            );
        }
    }
});
</script>
