<template>
  <div class="page__skill mb-3">
    <div class="skill">
      <span>{{ skill.name}}</span>
    </div>
    <v-progress-linear
      :value="skill.value"
      color="#D07105"
      height="25"
      class="progress-bar"
      background-opacity="0.4"
    >
      <strong>{{ Math.ceil(skill.value) }}%</strong>
    </v-progress-linear>
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
