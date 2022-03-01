<template>
  <div
    class="w-full h-full pt-[6vh] flex flex-col items-center justify-center gap-2"
    @click="hide"
  >
    <div
      class="py-1 pl-1 pr-3 rounded-md shadow-sm w-[40rem] flex items-center gap-1 bg-gray-100"
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
    <!-- <div class="border border-[#111828] shadow-sm rounded w-[40rem] h-[60vh] grid place-content-center bg-gray-100">
      Searching...
    </div> -->
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
    }
  },
  mounted() {
    this.$refs.searchRef.focus()
  },
  methods: {
    hide() {
      this.$store.dispatch('modal/hideModal')
    },
  },
}
</script>
