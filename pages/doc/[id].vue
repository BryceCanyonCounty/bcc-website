<template>
    <div class="w-full bg-base-200 pb-10">
        <div class="max-w-xl mx-auto pt-10 prose">
            <h1 class="text-6xl font-bold mb-4 text-primary prevent-select" v-if="data?.title "> {{ data.title }} </h1>
            <h2 class="text-4xl font-bold mt-0 prevent-select">(Docs)</h2>

            <ContentRenderer :value="data">
                <template #empty>
                    <h1>No content found.</h1>
                </template>
            </ContentRenderer>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const actualPath = route.path.replace(/\/$/, '');

const { data } = await useAsyncData('doc/bcc-versioner', () => queryContent(route.path).findOne())

if (data.value) {
    useHead({
    title: `${data.value.title} | BCC Scripts`,
    meta: [{
        name: 'description',
        content: data.value.description
    }]
})
}
</script>