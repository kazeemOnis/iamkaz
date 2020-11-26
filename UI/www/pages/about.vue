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
        <h1 class="page__h1 h1-tag mb-10">
          About me
        </h1>

        <div class="p-tag">
          <p>Hi I’m Kazeem Onisarotu, a Web Developer, UI/UX Designer,</p>
          <p>Project Manager. I thoroughly enjoy breaking down the entire</p>
          <p>life cycle of projects by applying agile practices to ensure</p>
          <p>key goals and objectives are delivered timely, and</p>
          <p>meet a high standard.</p>
          <br>
          <p>Technology is something I'm extremely curious about.</p>
          <p>I'm always looking to learn, to be mentored, and to gain</p>
          <p>insights, knowledge and experience from collaborating</p>
          <p>with others.</p>
        </div>
      </div>

      <span class="code bottom-tags">
        &nbsp;&lt;/body&gt;
      </span>
    </v-col>

    <v-col class="page-layout__right">
      <v-row class="justify-center mb-5">
        <v-col>
          <v-card height="350" max-width="350" class="page__profile">
            <v-img :src="image.data" height="350" position="top">
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="justify-space-between align-center">
        <v-col v-for="(option, i) in images" :key="i">
          <v-card height="100" max-width="100" class="page__profile" @click="changeImage(option)">
            <v-img :src="option.data" height="100" position="top">
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</div>
</template>

<script>
import PageSlider from '../components/PageSlider.vue';

export default {
  components: {
    PageSlider,
  },

  created() {
    const [image] = this.images;
    this.image = image;
  },

  head() {
    return {
      title: 'IAM KAZ UI/UX designer web developer portfolio | About me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kazeem Onisarotu, a Web Developer, UI/UX Designer, Project Manager, Technology is something I\'m extremely curious about. I\'m always looking to learn, to be mentored, and to gain experience. Feel free to checkout my portfolio and download my CV',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Web Developer, UI/UX designer, Vuejs Developer, NuxtJS Developer, NodeJS Developer, Developer',
        },
        {
          property: 'og:title',
          content: 'IAM KAZ UI/UX designer web developer portfolio | About me',
        },
        {
          property: 'og:description',
          content: 'Kazeem Onisarotu, a Web Developer, UI/UX Designer, Project Manager, Technology is something I\'m extremely curious about. I\'m always looking to learn, to be mentored, and to gain experience. Feel free to checkout my portfolio and download my CV',
        },
        {
          property: 'og:image',
          content: 'https://iam-kaz.com/img/logo.jpg',
        },
        {
          property: 'og:url',
          content: 'https://iam-kaz.com/about/',
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
          content: 'IAM KAZ UI/UX designer web developer portfolio | About me',
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
          content: 'Kazeem Onisarotu, a Web Developer, UI/UX Designer, Project Manager, Technology is something I\'m extremely curious about. I\'m always looking to learn, to be mentored, and to gain experience. Feel free to checkout my portfolio and download my CV',
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
        name: 'Home',
        route: '/',
      },
      next: {
        name: 'Skillset',
        route: '/skills',
      },
      image: null,
      images: [
        {
          data: '/img/profile.jpg',
        },
        {
          data: '/img/profile1.jpg',
        },
        {
          data: '/img/profile2.jpg',
        },
      ],
    };
  },

  methods: {
    changeImage(image) {
      this.image = image;
    },
  },
};
</script>

<style>

</style>
