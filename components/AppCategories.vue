<template>
  <div
    class="categories h-[80vh] col-span-2 border-2 px-4 border-r-gray-100 shadow rounded"
  >
    <div class="list pt-4">
      <div class="top pb-2 mb-1">
        <h4
          class="font-bold text-lg text-center uppercase text-gray-500 border-b-2 border-b-gray-200 pb-2 tracking-wider"
        >
          Categories
        </h4>
        <h4><fa-icon icon="th-large" /></h4>
      </div>

      <div class="flex flex-col gap-3">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          class="text-gray-600 font-medium cursor-pointer rounded hover:bg-slate-300 px-2 py-1 flex gap-2 items-center"
          :style="`--order: ${index}`"
        >
          <span><component :is="category.icon"></component></span>
          <p class="">{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryList } from '~/store/categories'
export default {
  data() {
    return {
      categories: null,
    }
  },
  created() {
    this.categories = categoryList
  },
}
</script>
