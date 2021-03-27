<template>
  <div id="about" class="content" >
    <template v-if="data">
      <div class="card md:flex" data-aos="zoom-in" data-aos-duration="1000">
        <div class="w-full md:w-1/3 xl:w-1/5 px-5 flex flex-col justify-between">
          <div class="img-profile">
            <img
              :src="`${data.image.url}`"
              alt="Foto de Ana"
              :width="data.image.width"
              :height="data.image.height"
            />
          </div>
          <div
            class="px-6 sm:px-0 pw-full flex justify-around lg:justify-between mt-4 mb-3 lg:mb-0 text-lg"
          >
            <a
              :aria-label="`Icon ${item.icon}`"
              v-for="item in data.social_media_ids"
              :key="item.id"
              :href="item.url"
              class="btn-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i :class="`icon-${item.icon}`" />
            </a>
          </div>
        </div>
        <div class="w-full md:w-2/3 xl:w-4/5 lg:ml-10 flex flex-col md:justify-between">
          <div>
            <h2 class="subtitle text-center md:text-left">{{data.name}} {{data.lastname}}</h2>
            <div class="w-full flex flex-wrap text-sm lg:text-base mb-3">
              <div class="text-gray-700 mr-4">
                <i class="icon-work-2 mr-3" />
                {{data.title}}
              </div>
              <div class="text-gray-700 mr-4">
                <i class="icon-grade mr-3" />
                {{data.profession}}
              </div>
              <div class="text-gray-700">
                <i class="icon-pin mr-3" />
                {{data.location}}
              </div>
            </div>
            <hr />
            <vue-simple-markdown class="lg:text-lg my-3" :source="data.about"></vue-simple-markdown>
          </div>
          <a class="btn btn-primary" :href="downloadCv(data.cvFile.url)">
            <i class="icon-download"></i>
            Descargar CV
          </a>
        </div>
      </div>
      <div class="mt-4">
        <h3 class="title my-5" data-aos="fade-right" data-aos-duration="1000">Lo que hago</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- <div v-for="skill in data.technic_skills" :key="skill.id" class="card" data-aos="zoom-in" data-aos-duration="1000">
            <div class="card-image">
              <img :src="skill.image.url" :alt="skill.image.caption" width="206" height="153"/>
            </div>
            <p class="text-center">{{skill.name}}</p>
          </div>-->
          <div
            class="card overflow-hidden"
            v-for="(item,index) in data.technic_skills"
            :key="index"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div class="card-image h-32">
              <img :src="item.image.url" :alt="`${item.image.alternativeText}`"  height="150" class="img-rectangle"/>
            </div>
            <p class="text-center card-no-hover">{{item.name}}</p>
            <div class="card-hover">
              <h2 class="subtitle text-cream">{{item.name? item.name:""}}</h2>
              <p class="text-cream line-clamp-4">{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else="" class="loader loader-screen">
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { VueSimpleMarkdown } from "vue-simple-markdown";
export default {
  name: "About",
  metaInfo() {
    return {
      meta: [
        {vmid: 'description', name: 'description', content: "Ana Hernández. Desarrollo de software profesional. Portafolio y blog con contenido de la industia tecnológica. Encuéntrame como @ianahernandez"},
        {vmid: 'og:title', property: 'og:title', content: "Ana Hernández | Desarrolladora de software"},
        {vmid: 'og:site_name', property: 'og:site_name', content: 'Ana Hernández | Developer'},
        {vmid: 'og:type', property: 'og:type', content: 'website'},
        {vmid: 'og:url', property: 'og:url', content: window.location.href},
        {vmid: 'og:image', property: 'og:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821731/banner_principal_60ff0eecf4.png"},
        {vmid: 'og:image:type', property: 'og:image:type', content: "image/png"},
        {vmid: 'og:description', property: 'og:description', content: "Ana Hernández. Desarrollo de software profesional. Portafolio y blog con contenido de la industia tecnológica. Encuéntrame como @ianahernandez"},
        {vmid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
        {vmid: 'twitter:domain', property: 'twitter:domain', content: 'ianahernandez.tech'},
        {vmid: 'twitter:url', property: 'twitter:url', content: window.location.href},
        {vmid: 'twitter:title', property: 'twitter:title', content: "Ana Hernández | Desarrolladora de software"},
        {vmid: 'twitter:description', property: 'twitter:description', content: "Ana Hernández. Desarrollo de software profesional. Portafolio y blog con contenido de la industia tecnológica. Encuéntrame como @ianahernandez"},
        {vmid: 'twitter:image', property: 'twitter:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821731/banner_principal_60ff0eecf4.png"},
        {vmid: 'twitter:site', property: 'twitter:site', content: '@ianahernandez'},
        {vmid: 'twitter:creator', property: 'twitter:creator', content: '@ianahernandez'},
      ],
      title: "Sobre mí",
      titleTemplate: '%s | Ana Hernández'
    }
  },
  data() {
    return {
      data: null
    };
  },
  components: {
    VueSimpleMarkdown
  },
  methods: {
    downloadCv(url){
      return url.replace("upload", "upload/fl_attachment");
    }
  },
  async mounted() {
    this.$parent.titleName = "Sobre mí";
    this.data = await this.$store.dispatch("getProfileInfo");
  }
};
</script>