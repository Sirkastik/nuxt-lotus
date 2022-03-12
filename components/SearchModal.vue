<template>
  <div
    class="w-full h-full pt-16 md:pt-[6vh] px-5 sm:px-20 lg:px-96 py-6 md:py-10 flex flex-col gap-2"
    @click="hide"
  >
    <div
      class="py-1 pl-1 pr-3 rounded-md shadow-sm flex items-center gap-1 bg-gray-100 transition-all ease-linear duration-200"
      :class="{ '-translate-y-16': !show }"
      @click.stop=""
    >
      <input
        type="text"
        ref="searchRef"
        v-model="searchQuery"
        placeholder="Search something..."
        class="bg-gray-100 flex-1 border-none outline-none focus:outline-none focus:border-none focus:ring-0"
      />
      <SearchIcon
        class="scale-x-100 text-lg"
        v-if="searchQuery === null || searchQuery === ''"
      />
      <LoadingIcon class="text-lg" v-else />
    </div>
  </div>
</template>

<script>
import SearchIcon from './icons/SearchIcon.vue'
import LoadingIcon from './icons/LoadingIcon.vue'
export default {
  components: { SearchIcon, LoadingIcon },
  data() {
    return {
      searchQuery: null,
      show: false,
    }
  },
  mounted() {
    this.$refs.searchRef.focus()
    this.show = true
  },
  methods: {
    hide() {
      this.show = false
      setTimeout(() => {
        this.$store.dispatch('modal/hideModal')
      }, 200)
    },
  },
}
</script>
