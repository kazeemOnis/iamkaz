<template>
  <div class="page">
    <page-slider
      :prev="prev"
      :next="next"
    />

    <div class="page-padding">
      <section class="mb-5">
        <h1
          class="page__h1 tag text-center mb-5"
          data-after-content="</portfolio>"
          data-before-content="<portfolio>">Portfolio</h1>

          <p class="mb-3">
            From E-commerce sites, to static sites built with web technologies such as VueJS,
            NuxtJS, NodeJS. My portfolio also shines light on my UI/UX designs done with Adobe XD.
            Check out my latest projects, leave your comments and let me know.</p>

            <v-row class="mb-1" justify="space-around">
              <v-col class="">
                <v-btn class="filter active">Show all</v-btn>
              </v-col>
              <v-col v-for="(option, i) in skills" :key="i">
                <v-btn class="filter">{{ option.name }}</v-btn>
              </v-col>
            </v-row>

            <p class="filter__text">Use the filter to list them by skill or technology</p>
      </section>

      <section>
        <v-row>
          <v-col v-for="(option, i) in portfolio" :key="i" cols="12" md="4">
            <project
              :project="option"/>
          </v-col>
        </v-row>
      </section>
    </div>

  </div>
</template>

<script>
import PageSlider from '../../components/PageSlider.vue';
import Project from '../../components/Project.vue';

export default {
  components: {
    PageSlider, Project,
  },

  head() {
    return {
      title: 'IAM KAZ UI/UX designer web developer portfolio | Portfolio',
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
          content: 'IAM KAZ UI/UX designer web developer portfolio | Portfolio',
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
          content: 'https://iam-kaz.com/portfolio/',
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
          content: 'IAM KAZ UI/UX designer web developer portfolio | Portfolio',
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
        name: 'Skillset',
        route: '/skills',
      },
      next: {
        name: 'Contact',
        route: '/contact',
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
      portfolio: [
        {
          name: 'IAM-KAZ',
          image: {
            data: '/img/portfolio.png',
          },
          link: 'https://iam-kaz.com/',
        },
        {
          name: 'Rangle Analytics',
          image: {
            data: '/img/portfolio1.png',
          },
          link: 'https://rangleanalytics.com/',
        },
        {
          name: 'Rangle Invoicing Tool',
          image: {
            data: '/img/portfolio2.png',
          },
          link: 'https://account.rangleanalytics.com/',
        },
        {
          name: 'Planaday Events',
          image: {
            data: '/img/portfolio3.png',
          },
          link: 'https://www.planaday.events/',
        },
        {
          name: 'Chocojay beats',
          image: {
            data: '/img/portfolio4.png',
          },
          link: 'https://chocojaybeats.com/',
        },
        {
          name: 'Ankara Lagos',
          image: {
            data: '/img/portfolio5.png',
          },
          link: 'https://ankaralagos.com/',
        },
        {
          name: 'Health Wise NG',
          image: {
            data: '/img/portfolio6.png',
          },
          link: 'https://healthwiseng.com/',
        },
        {
          name: 'Nelson\'s Grillz',
          image: {
            data: '/img/portfolio7.png',
          },
          link: 'https://nelsonsgrillz.com.ng/',
        },
      ],
    };
  },
};
</script>

<style>

</style>
