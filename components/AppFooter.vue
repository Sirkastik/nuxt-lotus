<template>
  <div class="bg-[#111828] mt-10 text-gray-400 px-10 hidden md:block">
    <div class="r py-16 grid grid-cols-7 gap-4 justify-items-center">
      <div class="col-span-2 flex flex-col gap-5">
        <div class="flex gap-4 items-center text-xl font-semibold">
          <img src="~/assets/logo-light.png" class="h-8 w-8" alt="logo" />
          Welcome To Lotus Furniture
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugit
          labore rem consequatur.
        </p>
        <div class="social flex gap-12 text-3xl opacity-60">
          <facebook-icon />
          <instagram-icon />
          <twitter-icon />
        </div>
      </div>
      <div class="col1">
        <div class="li-title uppercase font-semibold opacity-70 pb-3">
          Company
        </div>
        <div class="li py-1">About</div>
        <div class="li py-1">Blog</div>
        <div class="li py-1">Jobs</div>
        <div class="li py-1">Partners</div>
      </div>
      <div class="col1">
        <div class="li-title uppercase font-semibold opacity-70 pb-3">
          Support
        </div>
        <div class="li py-1">Pricing</div>
        <div class="li py-1">Guides</div>
        <div class="li py-1">Documentation</div>
        <div class="li py-1">FAQ</div>
      </div>
      <div class="col1">
        <div class="li-title uppercase font-semibold opacity-70 pb-3">
          Legal
        </div>
        <div class="li py-1">Claim</div>
        <div class="li py-1">Privacy</div>
        <div class="li py-1">Terms</div>
      </div>
      <div class="col1 col-span-2">
        <div class="top uppercase font-semibold opacity-70 pb-3">
          Subscribe to our newsletter
        </div>
        <p>
          The latest news, articles, and resources, sent to your inbox weekly
        </p>
        <div class="input flex gap-6 py-4">
          <input
            type="text"
            placeholder="Enter you email address"
            class="focus:ring-blue-600 focus:border-blue-600 w-full text-gray-800 shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          <button
            class="bg-blue-600 hover:bg-blue-700 text-gray-100 font-semibold rounded-md shadow-sm px-3 py-2 text-center cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div
      class="r py-5 text-center border-t border-t-gray-600 font-semibold opacity-70"
    >
      &copy; 2022 Lotus, Inc. All right reserved
    </div>
  </div>
</template>

<script>
import FacebookIcon from './icons/FacebookIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'
export default {
  components: { FacebookIcon, InstagramIcon, TwitterIcon },
}
</script>
