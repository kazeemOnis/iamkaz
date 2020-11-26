<template>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      width="80"
      fixed
      :stateless="true"
      app>

    <div class="logo">
      <nuxt-link to="/">
        <img src="/img/logo.jpg" alt="IAM KAZ logo">
      </nuxt-link>
    </div>

    <v-list class="navigation-list">
      <v-list-item
        v-for="(option, index) in navigation"
        :key="index" link
        nuxt
        :to="option.route"
        :data-after-content="option.name"
        >
        <v-list-item-icon>
          <v-icon v-text="option.icon"></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list class="social-list">
      <v-list-item
        v-for="(option, index) in social"
        :key="index" link
        :href="option.route"
        target="__blank"
        >
        <v-list-item-icon>
          <v-icon v-text="option.icon"></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
      drawer: true,
      miniVariant: false,
    };
  },

};
</script>

<style>

</style>
