<template>
  <div class="row px-4 w-full" :style="`--order: ${index}`">
    <div
      class="top flex md:flex-col justify-between md:justify-start items-center gap-6 my-2 md:my-6"
    >
      <span
        class="md:text-2xl font-bold text-[#111828] opacity-90 tracking-wide"
      >
        {{ title }} Products
      </span>
      <span
        class="more text-sm md:text-base pointer md:bg-[#111828] md:text-gray-200 rounded-sm md:px-6 md:py-1 cursor-pointer hover:font-medium md:hover:shadow-md"
        @click="
          $router.push({
            name: 'categories-id',
            params: { id: `${title.toLowerCase().split(' ').join('-')}` },
          })
        "
      >
        View Collection
      </span>
    </div>
    <div class="products flex gap-8 overflow-x-auto py-2 md:pt-4">
      <product-item
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
