<template>
    <main class=" w-full flex flex-col justify-center items-center ">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-secondary text-white px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
        </div>
        <button class="mt-5">
            <a
                class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                <span
                    class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 text-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="btn btn-primary">
                    <router-link to="/">Go Home</router-link>
                </span>
            </a>
        </button>
    </main>
</template>

<script>
export default {
    name: 'ResourcesView',
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    }
};
</script>