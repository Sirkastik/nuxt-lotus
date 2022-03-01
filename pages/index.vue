<template>
  <div class="bg-gray-200">
    <app-navbar />
    <intro-section />
    <div class="px-32 pb-20">
      <product-row :products="db.recommended" title="Recommended" index="0" />
      <product-row :products="db.bestSell" title="Best Selling" index="1" />
    </div>
    <div
      class="modal fixed inset-0 bg-[#111828] bg-opacity-50 z-50"
      v-if="showModal"
    >
      <component :is="modal"></component>
    </div>
  </div>
</template>

<script>
import db from '~/assets/data.json'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      db: {},
    }
  },
  created() {
    this.db = db
  },
  computed: {
    ...mapState({
      modal: (state) => state.modal.modalID,
      showModal: (state) => state.modal.showModal,
    }),
  },
}
</script>
