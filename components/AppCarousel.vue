<template>
  <div class="relative h-[400px] overflow-hidden rounded-md shadow-md">
    <div
      v-for="(item, i) in sliders"
      :key="i"
      :style="{ backgroundImage: `url(${item.url})` }"
      class="absolute transition-all linear duration-500 inset-0 bg-cover bg-center bg-no-repeat"
      :class="{
        'left-full ml-4 opacity-0 top-0 bottom-0':
          active === i - 1 || (i === 0 && active === 2),
        'right-full mr-4 opacity-0 top-0 bottom-0':
          active === i + 1 || (i === 2 && active === 0),
      }"
    >
      <div class="absolute inset-0 z-20 bg-black opacity-10"></div>
      <div class="absolute inset-0 z-30 grid grid-cols-3 p-8 text-white">
        <div class="place-self-start col-span-1 text-lg font-bold">
          {{ item.title }}
        </div>
        <div
          class="place-self-end col-start-3 text-medium font-bold cursor-pointer"
        >
          <nuxt-link to="/" class="flex items-center gap-2">
            Shop Now <arrow-icon />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from './icons/ArrowIcon.vue'
export default {
  components: { ArrowIcon },
  data() {
    return {
      active: 1,
      intervalID: null,
    }
  },
  // created() {
  //   this.intervalID = setInterval(() => {
  //     this.active === 2 ? (this.active = 0) : this.active++
  //   }, 5000)
  // },
  // beforeDestroy() {
  //   clearInterval(this.intervalID)
  // },
  computed: {
    sliders() {
      return [
        {
          title: 'New Arrivals',
          url: require('../assets/img/pic1.webp'),
        },
        {
          title: 'New Arrivals',
          url: require('../assets/img/pic2.webp'),
        },
        {
          title: 'Discounted',
          url: require('../assets/img/pic3.webp'),
        },
      ]
    },
  },
  methods: {
    next() {
      this.active === 2 ? (this.active = 0) : this.active++
    },
  },
}
</script>
