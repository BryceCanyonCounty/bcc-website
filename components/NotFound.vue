<template>
    <main class=" w-full flex flex-col justify-center items-center ">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-secondary text-white px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
        </div>
        <div class="mt-5">
            <button
                class="relative inline-block  group btn btn-primary" @click="gohome()">
                <span
                    class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 text-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

                Go Home
            </button>
        </div>
    </main>
</template>

<script>
export default {
    name: 'notfound',
    data() {
        return {
        };
    },
    methods: {
        gohome() {
            window.location.replace('/')
        }
    }
};
</script>