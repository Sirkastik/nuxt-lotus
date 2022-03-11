<template>
  <div
    class="product min-w-[30vw] md:min-w-0 flex-1 cursor-pointer"
    :style="`--order: ${index}`"
  >
    <img
      class="w-full aspect-square rounded shadow overflow-hidden"
      :src="product.url"
      :alt="`${product.name}`"
    />
    <div
      class="info flex flex-col md:flex-row justify-between items-center px-2 py-2 md:py-4 text-gray-700"
    >
      <span
        class="w-full text-sm md:w-auto capitalize font-semibold truncate text-center md:text-left"
      >
        {{ productName }}
      </span>
      <span class="text-xs">KSH. {{ price }}</span>
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
