<template>
  <main>
    <Hero :img="'/logo_full.png'" title="A Premier RedM Development Studio"
      description=" We are passionate about exploring the endless possibilities of RedM and bringing together a community of fellow enthusiasts. Our team provides in-depth tutorials, development resources, and open source scripts for the community. Whether you're an experienced developer or a curious player, we are here to create quality content for the RedM Community."></Hero>

    <div class="w-full bg-primary p-6">
      <Stats :stats="statssection"></Stats>
    </div>

    <div  class="w-full bg-base-200 p-6">
        <LinkGrid></LinkGrid>
    </div>
  </main>
</template>

<script>
import Hero from '../components/Hero.vue'
import Stats from '../components/Stats.vue'
import LinkGrid from '../components/LinkGrid.vue'

import axios from 'axios'

import resources from '../data/resources.json'
import { useHead } from '@vueuse/head'

export default {
  name: 'HomeView',
  data() {
    return {
      serverstats: {},
      statssection: [
        {
          title: 'Downloads',
          stat: '200+',
          description: '',
          icon: 'download'
        },
        {
          title: 'Resources',
          stat: '-',
          description: 'and growing!',
          icon: 'scroll'
        },
        {
          title: 'Community',
          stat: '-',
          description: 'Discord members',
          icon: 'group'
        }
      ]
    };
  },
  components: {
    Hero: Hero,
    Stats: Stats,
    LinkGrid: LinkGrid
  },
  created() {
    useHead({
      title: 'Home',
      titleTemplate: (title) => `${title} | BCC Scripts`,
    })
  },
  mounted() {
    this.getDiscordStats()
    this.getResourceTotal()
  },
  methods: {
    getResourceTotal() {
      this.statssection[1].stat = Object.keys(resources).length + 1
    },
    async getDiscordStats() {
      let serverstats = await axios({
        method: 'get',
        url: `https://discord.com/api/v9/invites/GuwS7Y7PA3?with_counts=true&with_expiration=true`
      })

      this.statssection[2].stat = serverstats.data.approximate_member_count
    }
  },
};
</script>
