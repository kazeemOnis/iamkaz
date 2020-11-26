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
          Skillset
        </h1>

        <div class="p-tag">
          <p>My core area of expertise is centered on front-end,</p>
          <p>client side development. I have over 3 years of</p>
          <p>experience developing SPA/SSR web applications and</p>
          <p>maintaining their respective content management systems.</p>
          <br>

          <p>HTML5, CSS3, JavaScript, NodeJS, VueJS, Nuxt, jQuery,</p>
          <p>SQL, PostgreSQL are the web technologies of my</p>
          <p>preferred development stack.</p>
          <br>

          <p>
            Download my <a download :href="cv">CV</a>, or view my
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </p>
          <p> for some of my personal work</p>
        </div>
      </div>

      <span class="code bottom-tags">
        &nbsp;&lt;/body&gt;
      </span>
    </v-col>

    <v-col class="page-layout__right">
      <v-row class="">
        <v-col
          v-for="(option, i) in values"
          :key="i">
          <skill-hexagon :skill="option"/>
        </v-col>
      </v-row>

      <skill-progress
        v-for="(option, i) in skills"
        :skill="option"
        :key="i"/>
      <!-- <div class="margin-auto">
      </div> -->
    </v-col>
  </v-row>
</div>
</template>

<script>
import PageSlider from '../components/PageSlider.vue';
import SkillProgress from '../components/SkillProgress.vue';
import SkillHexagon from '../components/SkillHexagon.vue';

export default {
  components: {
    PageSlider, SkillProgress, SkillHexagon,
  },

  head() {
    return {
      title: 'IAM KAZ UI/UX designer web developer portfolio | Skills & Experience',
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
          content: 'IAM KAZ UI/UX designer web developer portfolio | Skills & Experience',
        },
        {
          property: 'og:description',
          content: 'My skills and experience with web development and UI/UX designing, feel free to checkout my portfolio and download my CV',
        },
        {
          property: 'og:image',
          content: 'https://iam-kaz.com/img/logo.jpg',
        },
        {
          property: 'og:url',
          content: 'https://iam-kaz.com/skills/',
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
          content: 'IAM KAZ UI/UX designer web developer portfolio | Skills & Experience',
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
          content: 'My skills and experience with web development and UI/UX designing, feel free to checkout my portfolio and download my CV',
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
      cv: '/docs/Kazeem_Onisarotu_-_Front_End_Software_Developer.pdf',
      prev: {
        name: 'About',
        route: '/about',
      },
      next: {
        name: 'Portfolio',
        route: '/portfolio',
      },
      skills: [
        {
          name: 'HTML5',
          value: 70,
        },
        {
          name: 'CSS',
          value: 65,
        },
        {
          name: 'UI/UX',
          value: 65,
        },
        {
          name: 'JS',
          value: 65,
        },
        {
          name: 'Vue.js',
          value: 65,
        },
        {
          name: 'Nuxt.js',
          value: 65,
        },
        {
          name: 'GIT',
          value: 60,
        },
        {
          name: 'Node.js',
          value: 40,
        },
        {
          name: 'SQL',
          value: 40,
        },
        {
          name: 'PostgreSQL',
          value: 35,
        },
        {
          name: 'MySQL',
          value: 35,
        },
        {
          name: 'PHP',
          value: 25,
        },
        {
          name: 'Agile PMP',
          value: 25,
        },
        {
          name: 'Python',
          value: 20,
        },
      ],
      values: [
        {
          icon: 'mdi-timer-outline',
          name: 'Fast',
          description: 'Projects delivered in timely fashion, with site performance a top priority',
        },
        {
          icon: 'mdi-responsive',
          name: 'Responsive',
          description: 'Sites are designed to work on multiple screens/devices',
        },
        {
          icon: 'mdi-lightbulb-on-outline',
          name: 'Innovative',
          description: 'Innovative UI with simple and intuitive UX',
        },
      ],
    };
  },
};
</script>

<style>

</style>
