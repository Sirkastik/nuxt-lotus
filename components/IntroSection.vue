<template>
  <div class="conte relative pb-4 sm:pb-36 md:pb-80">
    <div
      class="h-[30vh] md:h-[82vh] w-full bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${url})` }"
    ></div>
    <div
      class="link absolute left-0 right-0 top-0 bottom-4 sm:bottom-[32%] flex flex-col gap-4 items-center pt-16 md:pt-32 bg-[#00000073]"
    >
      <h2
        class="font-bold text-3xl md:text-[5rem] md:pb-8 text-white"
      >
        Featured Products
      </h2>
      <button
        @click="$router.push('/categories/featured')"
        class="px-6 md:px-10 py-2 bg-[#111828] text-gray-200 hover:text-white md:text-lg font-semibold rounded shadow-md"
      >
        Shop Now
      </button>
    </div>
    <div
      class="prods absolute top-[43%] left-0 right-0 px-8 lg:px-24 flex gap-10"
    >
      <div
        class="prod h-[25vh] md:h-[60vh] hidden lg:block flex-1 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
        :class="{ 'sm:block': index !== 2 }"
        v-for="(item, index) in prods"
        :key="index"
        :style="{ backgroundImage: `url(${item.src})` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    url() {
      return 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    },
    prods() {
      return [
        {
          src: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        },
      ]
    },
  },
}
</script>
