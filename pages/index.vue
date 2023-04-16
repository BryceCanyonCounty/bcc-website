<template>
  <main>
    <Hero :img="'/logo_full.png'" title="A Premier RedM Development Studio"
      description=" We are passionate about exploring the endless possibilities of RedM and bringing together a community of fellow enthusiasts. Our team provides in-depth tutorials, development resources, and open source scripts for the community. Whether you're an experienced developer or a curious player, we are here to create quality content for the RedM Community.">
    </Hero>

    <div class="w-full bg-primary p-6">
      <Stats :stats="statssection"></Stats>
    </div>

    <div class="w-full bg-base-200 p-6">
      <LinkGrid></LinkGrid>
    </div>

    <Hero @btn-clicked="gotoGH()" actiontext="Help Contribute" :img="'/oss.png'" title="Open Source. Free. Always."
      description="Our roleplay scripts are made and maintained purely as a labor of love, driven by the community with passion for roleplaying and the desire to share our creations with others. We offer them freely and as a way to contribute to the community and help others explore and enjoy the art of roleplaying and programming.">
    </Hero>
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Stats from '~/components/Stats.vue'
import LinkGrid from '~/components/LinkGrid.vue'

import resources from '~/data/resources.json'

export default defineNuxtComponent({
  head(nuxtApp) {
    // `head` receives the nuxt app but cannot access the component instance
    return {
      title: 'Home | BCC Scripts',
      meta: [{
        name: 'description',
        content: 'A Premier RedM Development Studio that provides in-depth tutorials, development resources, and open source scripts for the community.'
      }]
    }
  },
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
  mounted() {
    this.getDiscordStats()
    this.getResourceTotal()
  },
  methods: {
    gotoGH() {
      window.open('https://github.com/BryceCanyonCounty', "_blank");
    },
    getResourceTotal() {
      this.statssection[1].stat = Object.keys(resources).length + 1
    },
    async getDiscordStats() {
      let serverstats = await this.$api({
        method: 'get',
        url: `https://discord.com/api/v9/invites/GuwS7Y7PA3?with_counts=true&with_expiration=true`
      })

      this.statssection[2].stat = serverstats.data.approximate_member_count
    }
  },
});
</script>
