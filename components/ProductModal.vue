<template>
  <div
    class="w-full h-full flex flex-col md:px-20 lg:px-[6vw] xl:px-[20vw] md:py-16"
    @click="hide"
  >
    <div
      class="bg-gray-100 w-full h-full shadow-lg relative rounded overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row gap-4 text-[#111828] transition-all duration-500"
      :class="{ 'scale-0': !show }"
      @click.stop=""
    >
      <div
        class="close absolute right-4 top-4  lg:hidden bg-white p-1 rounded-full"
        @click="hide"
      >
        <close-icon />
      </div>
      <div class="left lg:w-[55%]">
        <img
          class="w-full h-full"
          :src="product.url"
          :alt="`${product.name}`"
        />
      </div>

      <div class="info lg:w-[45%] flex flex-col gap-3 px-6 py-10">
        <div class="capitalize font-bold text-2xl flex gap-5 justify-between">
          <span class="truncate">{{ productName }}</span>
          <verified-icon
            class="text-gray-400"
            :class="{ 'text-blue-700': product.price > 40000 }"
          />
        </div>

        <div class="py-3 flex items-center">
          <span class="pr-2 grid place-content-center">4.5</span>
          <StarIcon
            v-for="rating in [0, 1, 2, 3, 4]"
            :key="rating"
            :class="[
              reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
              'h-5 w-5 flex-shrink-0',
            ]"
          />
          <span
            class="ml-3 text-sm font-medium text-blue-700 hover:text-blue-600 cursor-pointer"
          >
            See all {{ reviews.totalCount }} reviews
          </span>
        </div>
        <div class="price flex justify-between">
          <span class="font-semibold">KSH. {{ price }}</span>
          <span class="flex gap-2">
            <span class="text-gray-500 cursor-pointer">-</span>
            <span class="font-semibold">1</span>
            <span class="text-gray-500 cursor-pointer">+</span>
          </span>
        </div>

        <button
          class="bg-[#111828] my-2 hover:bg-blue-800 text-gray-100 font-semibold rounded-md shadow-sm px-3 py-2 text-center cursor-pointer"
        >
          Add to cart
        </button>

        <div class="desc">
          <div class="font-semibold block pb-2">Description</div>
          <div class="text-sm py-2 text-gray-500 pb-4">
            {{ product.description }}
          </div>
          <div
            class="py-2 mt-2 border-t border-t-gray-300 font-semibold flex justify-between"
          >
            <span class="text-blue-800">Features</span>
            <span
              class="text-blue-800 opacity-70 cursor-pointer hover:opacity-100"
              >-</span
            >
          </div>
          <ul class="pb-3">
            <li class="text-sm text-gray-500 flex gap-3">
              <span>•</span> High quality fabric used
            </li>
            <li class="text-sm text-gray-500 flex gap-3">
              <span>•</span> Quality hardwood hence lasts
            </li>
            <li class="text-sm text-gray-500 flex gap-3">
              <span>•</span> Easily wipeable materials
            </li>
            <li class="text-sm text-gray-500 flex gap-3">
              <span>•</span> Modularity for easy transportation
            </li>
          </ul>
          <div
            class="py-3 mt-2 border-t border-t-gray-300 font-semibold flex justify-between"
          >
            <span>Shipping</span>
            <span class="opacity-70 cursor-pointer hover:opacity-100">+</span>
          </div>
          <div
            class="py-2 mt-2 border-t border-t-gray-300 font-semibold flex justify-between"
          >
            <span>Returns</span>
            <span class="opacity-70 cursor-pointer hover:opacity-100">+</span>
          </div>
        </div>

        <!-- <div class="flex flex-col gap-3">
          <span class="font-semibold">Categories</span>
          <div class="cats text-xs">
            <span
              class="px-3 py-1 bg-[#111828] rounded-full text-gray-100 cursor-pointer"
              v-for="category in product.category"
              :key="category"
            >
              {{ category }}
            </span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CartIcon from './icons/CartIcon.vue'
import LoadingIcon from './icons/LoadingIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'
import { mapState } from 'vuex'
import StarIcon from './icons/StarIcon.vue'
import VerifiedIcon from './icons/VerifiedIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'
export default {
  components: {
    CartIcon,
    LoadingIcon,
    HomeIcon,
    StarIcon,
    VerifiedIcon,
    CloseIcon,
  },
  data() {
    return {
      show: false,
      reviews: { href: '#', average: 4, totalCount: 117 },
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 50)
  },
  computed: {
    ...mapState({
      product: (state) => state.product.currentProduct,
    }),
    productName() {
      return this.product.name.split('-').join(' ')
    },
    price() {
      let arr = this.product.price.toString().split('')
      arr.splice(-3, 0, ',')
      return arr.join('')
    },
  },
  methods: {
    hide() {
      this.show = false
      setTimeout(() => {
        this.$store.dispatch('product/clearProduct')
        this.$store.dispatch('modal/hideModal')
      }, 500)
    },
  },
}
</script>
