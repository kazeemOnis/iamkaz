<template>
  <div class="project">
    <div class="project__name">
      <div class="d-flex justify-start align-center">
        <div class="circle red">
        </div>

        <div class="circle yellow">
        </div>

        <div class="circle green">
        </div>
      </div>

      <div class="name text-center">
        {{ project.name }}
      </div>
    </div>

    <div class="project__image">
      <a
        :href="project.link"
        class="project__view"
        target="__blank">
      </a>
      <img :src="project.image.data" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>

</style>
