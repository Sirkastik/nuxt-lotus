<template>
  <div class="product flex-1" :style="`--order: ${index}`">
    <div class="w-full aspect-square rounded shadow overflow-hidden">
      <img class="h-full w-full" :src="product.url" :alt="`${product.name}`" />
    </div>
    <div class="info flex justify-between items-center px-2 py-4 text-gray-700">
      <span class="capitalize font-semibold">{{ productName }}</span>
      <span class="text-sm">KSH. {{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'index'],
  created() {},
  computed: {
    url() {
      return require(`../assets/img/${this.product.name}.webp`)
    },
    productName() {
      return this.product.name.split('-').join(' ')
    },
    price() {
      let arr = this.product.price.toString().split('')
      arr.splice(-3, 0, ',')
      return arr.join('')
    },
  },
}
</script>
