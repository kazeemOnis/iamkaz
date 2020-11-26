<template>
  <div class="page-slider">
    <nuxt-link
      :to="prev.route"
      class="prev"
      v-if="prev">
      <v-icon>mdi-arrow-left</v-icon>
      <span>{{ prev.name }}</span>
    </nuxt-link>

    <nuxt-link
      :to="next.route"
      class="next"
      v-if="next">
      <v-icon>mdi-arrow-right</v-icon>
      <span>{{ next.name }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default() {
        return {

        };
      },
    },

    next: {
      type: Object,
      default() {
        return {

        };
      },
    },
  },
};
</script>

<style>

</style>
