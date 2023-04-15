<template>
  <mHeader></mHeader>
  <router-view style="min-height: 80vh;"></router-view>
  <mFooter></mFooter>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  data() {
      return {
      };
  },
  components: {
      mHeader: Header,
      mFooter: Footer,
      mCard: Card
  },
  mounted() {
  },
  methods: {
     
  },
};
</script>
<style scoped>
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
</style>
