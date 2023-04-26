<template>
  <Header></Header>
  <NuxtPage style="min-height: 80vh;" />
  <Footer></Footer>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

</script>

<style>
.prevent-select {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

body {
    min-height: 100vh;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.cog {
  transition: all 0.4s ease-out;
}

.cog:hover {
  transform: rotate(90deg);
  transition: all 0.4s ease-out;
}

h3 {
  font-size: 1rem;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #242933; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #20252E; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2A303C; 
}
</style>
