<template>
  <div
    id="bottom"
    class="flex justify-around items-center h-12 fixed bottom-4 text-xl left-4 right-4 z-10 bg-white shadow sm:hidden"
  >
    <button class="btn pointer" @click="navigate('/')">
      <HomeIcon />
    </button>
    <button class="btn pointer" @click="navigate('/')">
      <CategoryIcon />
    </button>
    <button class="btn pointer" @click="showCartModal">
      <CartIcon />
    </button>
  </div>
</template>

<script>
import HomeIcon from './icons/HomeIcon.vue'
import CategoryIcon from './icons/CategoryIcon.vue'
import CartIcon from './icons/CartIcon.vue'
import CartModal from './CartComponent.vue'
export default {
  methods: {
    navigate(route) {
      this.$router.push(route)
    },
    showCartModal() {
      this.$store.dispatch('modal/popModal', CartModal)
    },
  },
  components: {
    HomeIcon,
    CategoryIcon,
    CartIcon,
  },
}
</script>

<style scoped>
#bottom {
  animation: slide-up 1.25s ease both;
}

@keyframes slide-up {
  from {
    transform: translateY(150%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
