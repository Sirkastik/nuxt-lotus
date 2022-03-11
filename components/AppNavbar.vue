<template>
  <div class="w-full flex flex-col text-gray-50 bg-[#111828] shadow-md sticky top-0 z-10">
    <div
      class="row w-full py-2 border-b-2 hidden md:flex justify-between px-6 text-sm text-gray-300 font-medium"
    >
      <div class="flex gap-1 items-center">
        <span>KSH</span><span><chevron-down-icon /></span>
      </div>
      <div class="flex gap-4">
        <nuxt-link to="/account/login">Sign in</nuxt-link>
        <nuxt-link to="/account/register">Create an account</nuxt-link>
      </div>
    </div>
    <div
      class="row bg-white text-[#111828] py-4 flex justify-between items-center px-8 relative"
    >
      <div class="h-6 flex items-center gap-2">
        <img
          src="~/assets/logo-dark.png"
          class="h-6 aspect-square"
          alt="logo"
        />
        <span class="font-bold text-xl text-[#111828]">lotus</span>
      </div>
      <div
        class="categories hidden md:flex items-center gap-8 font-semibold text-gray-500"
      >
        <div
          v-for="(category, index) in categories"
          :key="index"
          @mouseover="dropdown = category.name"
          @mouseleave="dropdown = null"
        >
          <div
            class="cursor-pointer py-1 px-2 rounded"
            :class="{
              ' bg-gray-800 text-gray-200': dropdown === category.name,
            }"
          >
            {{ category.name }}
          </div>
          <div
            class="small absolute pt-[1.2rem] z-30"
            :class="{
              flex: dropdown === category.name,
              hidden: dropdown !== category.name,
            }"
            v-if="typeof category.sub[0] === 'string'"
          >
            <div
              class="list bg-white flex flex-col gap-1 rounded-md shadow-lg px-3 py-4"
            >
              <div
                class="py-1 px-2 rounded cursor-pointer hover:bg-gray-300"
                v-for="item in category.sub"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div
            class="mega absolute pt-[1.2rem] z-30 left-40 right-40"
            :class="{
              block: dropdown === category.name,
              hidden: dropdown !== category.name,
            }"
            v-else
          >
            <div
              class="cont bg-white flex justify-center gap-16 rounded-md shadow-lg border border-gray-100 py-6"
            >
              <div v-for="cat in category.sub" :key="cat.name">
                <div
                  class="font-bold text-gray-700 cursor-pointer py-2 pl-2 pr-4"
                >
                  {{ cat.name }}
                </div>
                <div
                  class="py-1 pl-2 pr-4 rounded cursor-pointer hover:bg-gray-300"
                  v-for="sub in cat.sub"
                  :key="sub"
                >
                  {{ sub }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right flex gap-3 items-center text-2xl">
        <span class="cursor-pointer" @click="showSearchModal"
          ><SearchIcon
        /></span>
        <span class="cursor-pointer hidden md:inline"><CartIcon /></span>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDownIcon from './icons/ChevronDownIcon.vue'
import SearchIcon from './icons/SearchIcon.vue'
import CartIcon from './icons/CartIcon.vue'
import { categoryList } from '~/store/categories'
import SearchModal from './SearchModal.vue'
export default {
  components: { ChevronDownIcon, SearchIcon, CartIcon, SearchModal },
  data() {
    return {
      categories: null,
      dropdown: null,
    }
  },
  created() {
    this.categories = categoryList
  },
  methods: {
    showSearchModal() {
      this.$store.dispatch('modal/popModal', SearchModal)
    },
  },
}
</script>
