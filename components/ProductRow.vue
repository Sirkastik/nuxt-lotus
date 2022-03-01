<template>
  <div class="row pt-6 px-4 w-full" :style="`--order: ${index}`">
    <div class="top flex flex-col items-center gap-6 my-6">
      <span class="text-2xl font-bold text-[#111828] opacity-90 tracking-wide">
        {{ title }} Products
      </span>
      <span
        class="more pointer bg-[#111828] text-gray-200 rounded-sm px-6 py-1 cursor-pointer hover:font-medium hover:shadow-md"
      >
        View Collection
      </span>
    </div>
    <div class="products flex gap-8 overflow-x-auto pt-4">
      <product-item
        class="product"
        v-for="(product, index) in products"
        :key="product.id"
        :product="product"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
    title: String,
    index: String,
  },
}
</script>
