<template>
  <div class="hero min-h-fit bg-base-200 py-10">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <img v-if="img" :src="img" c/>
        <h1 class="text-5xl font-bold prevent-select">{{ title }}</h1>
        <p class="py-6 prevent-select">{{ description }}</p>
        <button class="btn btn-primary" @click="actionClicked" v-if="actiontext">{{ actiontext }}</button>
      </div>
    </div>
  </div>
</template>
ß
<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    description: String,
    actiontext: String,
    img: String
  },
  methods: {
    actionClicked() {
      this.$emit('btn-clicked')
    }
  }
};
</script>