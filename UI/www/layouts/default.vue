<template>
  <v-app>
    <top-navbar
      :navigation="navigation"
      :social="social"/>

    <side-navbar
      :navigation="navigation"
      :social="social"/>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNavbar from '../components/SideNavbar.vue';
import TopNavbar from '../components/TopNavbar.vue';

export default {
  components: {
    SideNavbar, TopNavbar,
  },

  data() {
    return {
      navigation: [
        {
          name: 'Home',
          icon: 'mdi-home',
          route: '/',
        },
        {
          name: 'About',
          icon: 'mdi-account-circle',
          route: '/about',
        },
        {
          name: 'Skills',
          icon: 'mdi-cog',
          route: '/skills',
        },
        {
          name: 'Portfolio',
          icon: 'mdi-briefcase',
          route: '/portfolio',
        },
        {
          name: 'Contact',
          icon: 'mdi-email',
          route: '/contact',
        },
      ],
      social: [
        {
          name: 'Mail',
          icon: 'mdi-email-send',
          route: 'mailto:konisarotu@gmail.com',
        },
        {
          name: 'Linkedin',
          icon: 'mdi-linkedin',
          route: 'https://github.com/kazeemOnis/',
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          route: 'https://github.com/kazeemOnis/',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/style.scss';
</style>
