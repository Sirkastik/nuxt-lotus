<template>
  <div>
    <app-navbar />
    <intro-section />
    <div class="md:px-8 lg:px-32 pb-10 md:pb-20">
      <product-row :products="db.recommended" title="Recommended" index="0" />
      <product-row :products="db.bestSell" title="Best Selling" index="1" />
    </div>
    <app-footer />
    <div
      class="modal fixed inset-0 bg-[#111828] bg-opacity-50 z-50 overflow-hidden"
      v-if="showModal"
    >
      <component :is="modal"></component>
    </div>
    <app-bottom />
  </div>
</template>

<script>
import db from '~/assets/data.json'
import { mapState } from 'vuex'
import AppFooter from '~/components/AppFooter.vue'
export default {
  components: { AppFooter },
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
