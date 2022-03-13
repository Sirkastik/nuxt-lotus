<template>
  <div class="h-screen w-screen text-[#111828]">
    <app-navbar />
    <div class="top capitalize font-bold text-3xl text-center py-10">
      Categories / {{ $route.params.id }}
    </div>
    <div class="prods w-full grid grid-cols-2 md:grid-cols-4 gap-10 px-4 md:px-20 py-8">
      <div class="prod w-full" v-for="(product, i) in products" :key="i">
        <img
          class="aspect-square rounded-sm shadow-md cursor-pointer"
          :src="product"
          alt=""
        />
        <div class="info flex justify-between pt-2 opacity-90">
          <span class="font-semibold">Furniture</span>
          <span class="text-sm">KSH. 30,000</span>
        </div>
      </div>
    </div>

    <div class="flex gap-[1px] justify-center text-gray-700 pb-[10vh] md:pb-0">
      <span
        class="mr-2 grid place-content-center p-1 md:p-2 border border-gray-300 cursor-pointer rounded"
        :class="{
          'pointer-events-none opacity-50': currentPage === 1,
        }"
      >
        <chevron-left-icon />
      </span>
      <div
        v-for="index in pages"
        class="py-2 px-2 md:px-5 border border-gray-300 cursor-pointer hover:bg-gray-300 rounded"
        :class="{ 'bg-gray-400': currentPage === index }"
        :key="index"
      >
        {{ index }}
      </div>
      <span
        class="ml-2 p-1 grid place-content-center md:p-2 border border-gray-300 cursor-pointer rounded"
        :class="{
          'pointer-events-none opacity-20': currentPage === pages,
        }"
      >
        <chevron-right-icon />
      </span>
    </div>
    <app-footer />
    <app-bottom />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
import ChevronLeftIcon from '../../components/icons/ChevronLeftIcon.vue'
import ChevronRightIcon from '../../components/icons/ChevronRightIcon.vue'
import AppBottom from '~/components/AppBottom.vue'
export default {
  components: { AppNavbar, AppFooter, ChevronLeftIcon, ChevronRightIcon, AppBottom },
  data() {
    return {
      pages: 5,
      currentPage: 1,
    }
  },
  async created() {
    await this.$store.dispatch('products/getProducts', this.$route.params.id)
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
  },
}
</script>
