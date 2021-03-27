<template>
  <div class="resumen">
    <div class="content" v-if="data">
      <div class="flex flex-col md:flex-row">
        <div class="w-full pb-4 md:w-1/2 md:pr-2">
          <div class>
            <h2 class="subtitle mt-0" data-aos="fade-right" data-aos-duration="1000">
              <i class="icon-grade mr-2"></i> Educación
            </h2>
            <template v-if="data.studies">
              <card-resume v-for="item in data.studies" :key="`study- ${item.id}`"
                data-aos="zoom-in" data-aos-duration="1000"
                :institute="item.institute"
                :dateFrom="item.from"
                :dateTo="item.to"
                :description="item.description"
              />
            </template>

            <h2 class="subtitle mt-0" data-aos="fade-right" data-aos-duration="1000">
              <i class="icon-certificate mr-2"></i> Cursos y certificaciones
            </h2>
            <template v-if="data.courses">
              <card-resume v-for="item in data.courses" :key="`course- ${item.id}`"
                data-aos="zoom-in" data-aos-duration="1000"
                :institute="item.institute"
                :date="item.date"
                :duration="item.duration"
                :description="item.name"
                :credential="item.certificateUrl"
              />
            </template>
          </div>
        </div>
        <div class="w-full md:w-1/2 md:pl-3">
          <div class>
            <h2 class="subtitle mt-0" data-aos="fade-right" data-aos-duration="1000">
              <i class="icon-work-2 mr-2"></i> Experiencia
            </h2>
            <template v-if="data.experiences">
              <card-resume v-for="item in data.experiences" :key="`work- ${item.id}`"
                data-aos="zoom-in" data-aos-duration="1000"
                :institute="item.institute"
                :dateFrom="item.from"
                :dateTo="item.to"
                :description="item.description"
                :actual="item.actual"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-else="" class="loader loader-screen">
    </div>
  </div>
</template>

<script>
import CardResume from "@/layouts/components/ui/CardResume";

export default {
  name: "Resume",
  metaInfo() {
    return {
      meta: [
        {vmid: 'description', name: 'description', content: "Resumen de estudios formales, cursos y experiencias profesionales."},
        {vmid: 'og:title', property: 'og:title', content: "Resumen de Ana Hernández"},
        {vmid: 'og:site_name', property: 'og:site_name', content: 'Ana Hernández | Developer'},
        {vmid: 'og:type', property: 'og:type', content: 'website'},
        {vmid: 'og:url', property: 'og:url', content: window.location.href},
        {vmid: 'og:image', property: 'og:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821733/banner_resumen_6b69687396.png"},
        {vmid: 'og:image:type', property: 'og:image:type', content: "image/png"},
        {vmid: 'og:description', property: 'og:description', content: "Resumen de estudios formales, cursos y experiencias profesionales."},
        {vmid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
        {vmid: 'twitter:domain', property: 'twitter:domain', content: 'ianahernandez.tech'},
        {vmid: 'twitter:url', property: 'twitter:url', content: window.location.href},
        {vmid: 'twitter:title', property: 'twitter:title', content: "Resumen de Ana Hernández"},
        {vmid: 'twitter:description', property: 'twitter:description', content: "Resumen de estudios formales, cursos y experiencias profesionales."},
        {vmid: 'twitter:image', property: 'twitter:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821733/banner_resumen_6b69687396.png"},
        {vmid: 'twitter:site', property: 'twitter:site', content: '@ianahernandez'},
        {vmid: 'twitter:creator', property: 'twitter:creator', content: '@ianahernandez'},
      ],
      title: "Resumen",
      titleTemplate: '%s | Ana Hernández'
    }
  },
  data() {
    return {
      data: null,
    };
  },
  components: {
    CardResume
  },
  async mounted() {
    this.$parent.titleName = "Resumen";
    this.data = await this.$store.dispatch('getResume')
  }
};
</script>
