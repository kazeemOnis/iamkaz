<template>
  <div class="page">
    <page-slider
      :prev="prev"
      :next="next"
    />

    <v-row class="page-layout">
      <v-col class="page-layout__left" cols="12" md="6">
        <span class="code top-tags">
          &nbsp;&lt;body&gt;
        </span>

        <div class="page-layout__text">
          <h1 class="page__h1 h1-tag">
            Hi,<br>
            <span>IAM KAZ</span>,<br>
            Web Developer.
          </h1>

          <p class="page__mini-text">Front End Developer  /  Javascript</p>

          <v-btn
            class="page__button"
            to="/contact"
            outlined
            width="150"
            nuxt
            height="50">
            CONTACT ME
          </v-btn>
        </div>

        <span class="code bottom-tags">
          &nbsp;&lt;/body&gt;
        </span>
      </v-col>

      <v-col class="page-layout__right">
        <video-mockup :mockup="mockup"/>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import PageSlider from '../components/PageSlider.vue';
import VideoMockup from '../components/VideoMockup.vue';

export default {
  components: {
    PageSlider,
    VideoMockup,
  },

  head() {
    return {
      title: 'IAM KAZ web developer portfolio, UI/UX designer, VueJS and NuxtJS front-end developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My personal web developer and UI/UX designer portfolio, feel free to checkout my portfolio and download my CV',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Web Developer, UI/UX designer, Vuejs Developer, NuxtJS Developer, NodeJS Developer, Developer',
        },
        {
          property: 'og:title',
          content: 'IAM KAZ',
        },
        {
          property: 'og:description',
          content: 'My personal web developer and UI/UX designer portfolio, feel free to checkout my portfolio and download my CV',
        },
        {
          property: 'og:image',
          content: 'https://iam-kaz.com/img/logo.jpg',
        },
        {
          property: 'og:url',
          content: 'https://iam-kaz.com/',
        },
        {
          property: 'og:site_name',
          content: 'IAM KAZ',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: 'IAM KAZ',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image:alt',
          content: 'IAM KAZ',
        },
        {
          name: 'twitter:description',
          content: 'My personal web developer and UI/UX designer portfolio, feel free to checkout my portfolio and download my CV',
        },
        {
          name: 'twitter:image',
          content: 'https://iam-kaz.com/img/logo.jpg',
        },
        {
          name: 'twitter:site',
          content: '@iam_kaz',
        },
        {
          name: 'twitter:creator',
          content: '@iam_kaz',
        },
      ],
    };
  },

  data() {
    return {
      prev: {
        name: 'Contact',
        route: '/contact',
      },

      next: {
        name: 'About',
        route: 'about',
      },

      mockup: {
        image: '/img/phone-mask1.png',
        video: '/vids/iamkaz2.mp4',
        poster: '/img/poster1.png',
      },
    };
  },
};
</script>
