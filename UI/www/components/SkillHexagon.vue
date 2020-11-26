<template>
<div>
  <div class="hexagon">
    <i class="mdi" :class="skill.icon"></i>
  </div>
  <div class="text-center">
    <p class="font-weight-bold">{{ skill.name }}</p>
    <p class="body-2">{{ skill.description }}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    skill: {
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
