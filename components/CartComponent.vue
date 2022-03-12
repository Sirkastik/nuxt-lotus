<template>
  <div class="w-full h-full flex flex-col" @click="hide">
    <div
      class="bg-gray-100 h-full ml-auto w-full sm:w-1/2 md:w-1/3 p-3 md:px-8 md:py-8 shadow-lg flex flex-col gap-4 text-[#111828] transition-all duration-500"
      :class="{ 'translate-x-full scale-50': !show }"
      @click.stop=""
    >
      <div class="top flex justify-between items-center text-2xl font-semibold">
        <cart-icon />
        <span>Cart</span>
        <button @click="hide">
          <home-icon />
        </button>
      </div>
      <div
        class="cont h-full grid place-content-center font-semibold text-gray-500"
      >
        Cart is empty
      </div>
    </div>
  </div>
</template>

<script>
import CartIcon from './icons/CartIcon.vue'
import LoadingIcon from './icons/LoadingIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'
export default {
  components: { CartIcon, LoadingIcon, HomeIcon },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 50)
  },
  methods: {
    hide() {
      this.show = false
      setTimeout(() => {
        this.$store.dispatch('modal/hideModal')
      }, 500)
    },
  },
}
</script>
