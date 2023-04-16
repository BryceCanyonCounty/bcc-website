<template>
    <div class="w-full bg-base-200 pb-10">
        <div class="max-w-xl mx-auto pt-10 prose">
            <h1 class="text-6xl font-bold text-primary prevent-select"> {{ data.title }} </h1>
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

const { data } = await useAsyncData('doc/bcc-scene', () => queryContent(route.path).findOne())



useHead({
    title: `${data._value.title} | BCC Scripts`,
    meta: [{
        name: 'description',
        content: data._value.description
    }]
})
</script>