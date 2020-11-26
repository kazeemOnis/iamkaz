<template>
<div class="mockup-container">
  <div class="mockup">
    <img :src="mockup.image" alt="">
    <div class="mockup__shadow"></div>
    <div class="video">
      <video
        loop
        playsinline
        :poster="mockup.poster"
        autoplay>
        <source :src="mockup.video">
      </video>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    mockup: {
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
