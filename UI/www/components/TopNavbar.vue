<template>
  <div class="navbar">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/img/logo.jpg" alt="IAM KAZ logo">
      </nuxt-link>
    </div>

    <nav class="navigation-list" :class="mobile ? 'show' : ''">
      <nuxt-link
        v-for="(option, index) in navigation"
        :key="index"
        :data-after-content="option.name"
        :to="option.route">
        <v-icon v-text="option.icon"></v-icon>
      </nuxt-link>
    </nav>

    <ul class="social-list">
      <li
        v-for="(option, index) in social"
        :key="index">
        <a
          target="__blank"
          :href="option.route">
          <v-icon v-text="option.icon"></v-icon>
        </a>
      </li>
    </ul>

    <a class="navbar-burger" @click="mobile = !mobile">
      <v-icon>mdi-menu</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Array,
      default() {
        return [];
      },
    },

    social: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      mobile: false,
    };
  },
};
</script>

<style>

</style>
