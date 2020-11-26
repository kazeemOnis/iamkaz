<template>
<div class="page">
  <page-slider
    :prev="prev"
    :next="next"
  />

  <v-row class="page-layout">
    <v-col class="page-layout__left" cols="12" md="6">
      <span class="code top-tags">
        &nbsp;&lt;form&gt;
      </span>

      <div class="page-layout__text">
        <h1 class="page__h1 h1-tag mb-10">
          Contact Me
        </h1>

        <div class="p-tag mb-10">
          <p> Have questions? drop an inquiry, or email</p>
          <p><a href="mailto:konisarotu@gmail.com">konisarotu@gmail.com</a></p>
        </div>

          <v-form ref="form" v-model="valid" class="contact-form">

            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="form.subject"
              :rules="subRules"
              label="Subject"
              required
            ></v-text-field>

            <v-textarea
              :rules="msgRules"
              v-model="form.message"
              name="message"
              rows="3"
              label="Message"
            ></v-textarea>

          </v-form>

          <v-btn
            class="page__button"
            outlined
            height="50"
            @click="send">
            CONTACT ME
          </v-btn>
      </div>

      <!-- <span class="code bottom-tags">
        &nbsp;&lt;/body&gt;
      </span> -->
    </v-col>

    <v-col class="page-layout__right" cols="12" md="6">
      <div class="map-info fadeInUp">
        <p>Kazeem Onisarotu,</p>
        <p>Lagos, Nigeria,</p>
        <p><a href="tel:+2348081369445">+234 808 136 9445</a>,</p>
        <p><span>@: </span> <a href="mailto:konisarotu@gmail.com">konisarotu@gmail.com</a></p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.632692285!2d3.1438685786656255!3d6.548035696995775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1599720027204!5m2!1sen!2sng" width="100%" height="650" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

  head() {
    return {
      title: 'IAM KAZ UI/UX designer web developer portfolio | Contact me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kazeem Onisarotu, a Web Developer, UI/UX Designer, Project Manager. Feel free to contact me for freelance projects',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Web Developer, UI/UX designer, Vuejs Developer, NuxtJS Developer, NodeJS Developer, Developer',
        },
        {
          property: 'og:title',
          content: 'IAM KAZ UI/UX designer web developer portfolio | Contact me',
        },
        {
          property: 'og:description',
          content: 'Kazeem Onisarotu, a Web Developer, UI/UX Designer, Project Manager. Feel free to contact me for freelance projects',
        },
        {
          property: 'og:image',
          content: 'https://iam-kaz.com/img/logo.jpg',
        },
        {
          property: 'og:url',
          content: 'https://iam-kaz.com/contact/',
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
          content: 'IAM KAZ UI/UX designer web developer portfolio | Contact me',
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
          content: 'Kazeem Onisarotu, a Web Developer, UI/UX Designer, Project Manager. Feel free to contact me for freelance projects',
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
        name: 'Portfolio',
        route: '/portfolio',
      },
      next: {
        name: 'Home',
        route: '/',
      },
      nameRules: [
        (v) => !!v || 'Name is required',
      ],
      subRules: [
        (v) => !!v || 'Subject is required',
      ],
      msgRules: [
        (v) => !!v || 'Message is required',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      valid: true,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },

  methods: {
    async send() {
      const res = await this.$refs.form.validate();
      if (res) {
        // console.log('Weytin dey sup');
      }
    },
  },
};
</script>

<style>

</style>
