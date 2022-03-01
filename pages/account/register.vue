<template>
  <div
    class="body w-screen h-screen bg-cover bg-fixed bg-center grid"
    :style="{ backgroundImage: `url(${url})` }"
  >
    <div
      class="main bg-white h-screen w-screen shadow sm:w-[50vw] lg:w-[33vw] justify-self-end flex items-center px-8 md:px-16"
    >
      <form @submit.prevent="handleSubmit" class="flex-1 flex flex-col gap-6">
        <div class="h-20 grid place-content-center">
          <img src="~/assets/logo.png" class="h-20 aspect-square" alt="logo" />
        </div>
        <div class="top">
          <h1 class="text-3xl font-extrabold text-center">
            Create a new account
          </h1>
          <h1 class="text-lg font-medium my-2 text-center">
            or
            <nuxt-link
              to="/account/login"
              class="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              sign in to your account
            </nuxt-link>
          </h1>
        </div>

        <div class="">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="example@email.com"
            class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div class="">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div class="">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 focus:ring-blue-600 focus:border-blue-700 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div class="flex justify-between">
          <span class="font-semibold text-sm">
            <div class="flex items-center gap-1 h-5">
              <input
                type="checkbox"
                v-model="acceptTerms"
                class="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer"
              />
              <span>I accept the terms and conditions</span>
            </div>
          </span>
        </div>

        <button
          type="submit"
          class="sub-btn block bg-blue-600 hover:bg-blue-700 text-gray-100 font-semibold rounded-md shadow-sm py-2 text-center cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      username: null,
      acceptTerms: true,
    }
  },
  computed: {
    url() {
      return 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80'
    },
  },

  methods: {
    handleSubmit() {
      const creds = {
        email: this.email,
        password: this.password,
        username: this.username,
      }
      console.log(creds)
      this.$router.push('/')
    },
  },
}
</script>
