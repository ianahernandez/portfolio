<template>
  <div class="content">
    <template v-if="data.length">
      <div class="mb-8 p-3">
        <VueSlickCarousel v-if="categories.length" v-bind="carouseLSettings">
          <div class="mr-3 py-2" v-on:click="filterCategory(-1)">
            <div :class="`item-carousel ${ selectedCategory == -1 ? 'active' : ''} transition duration-500 ease-in-out` " @click="$emit('select')">
              <img src="@/assets/img/categories/all.png" alt="Todo">
              <p>Todo</p>
            </div>
          </div>
  
          <ItemCarousel  data-aos="fade-right" data-aos-duration="1000" 
          v-for="category in categories" :key="category.id" 
          :isActive="category.id == selectedCategory" :text="category.name" 
          :foto="category.image.url"
          v-on:select="filterCategory(category.id)"
          ></ItemCarousel>
        </VueSlickCarousel>
      </div>
      <section class="flex portfolio">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <div class="card overflow-hidden" v-for="(item,index) in dataFiltered" 
          :key="index" data-aos="zoom-in" data-aos-duration="1000">
            <span v-if="item.category" class="card-no-hover tag tag-left">{{item.category.name}}</span>
            <div class="card-image h-32">
              <img :src="item.image.url" :alt="`Logo de ${item.image.alternativeText}`" />
            </div>
            <p class="text-center">{{item.subtitle}}</p>
            <div class="card-hover">
              <h2 class="subtitle text-cream">{{item.name? item.name:""}}</h2>
              <p class="text-cream line-clamp-3">{{item.shortDescription}}</p>
              <div class="absolute bottom-0 right-0">
                <button class="btn btn-light btn-sm" @click="openGallery(item)">
                  <i class="icon-picture"></i>
                  Galería
                </button>
                <button class="btn btn-dark btn-sm pt-1" @click="openProject(item)">Ver más ›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    <div v-else="" class="loader loader-screen">
    </div>
    <modal
      v-if="projectSelected && openModalProject"
      :title="projectSelected.name"
      :show.sync="openModalProject"
      @update:show="openModalProject = false"
    >
      <template v-slot:content>
        <Project :data="projectSelected"></Project>
      </template>
    </modal>

    <modal
      v-if="projectSelected"
      :title="projectSelected.name"
      :show.sync="openModalGallery"
      @update:show="openModalGallery = false"
    >
      <template v-slot:content>
        <VueSlickCarousel class="mx-3 mb-4" v-bind="carouselGallery">
          <div class="md:p-4" v-for="(image) in projectSelected.gallery" :key="image.id">
            <img class="rounded-lg img-gallery" :src="image.formats.large ? image.formats.large.url: image.url" :alt="image.alternativeText" />
            <p class="mt-2">{{image.caption}}</p>
          </div>
          <div v-if="!projectSelected.gallery || !projectSelected.gallery.length">
              <p class="m-auto py-4">No hay imágenes en la galería</p>
          </div>
        </VueSlickCarousel>
      </template>
    </modal>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import ItemCarousel from "@/layouts/components/ui/ElementCarousel.vue";
import Modal from "@/layouts/components/ui/Modal.vue";
import Project from "@/views/Project.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "@/assets/css/carousel.css";

export default {
  name: "Portfolio",
  metaInfo() {
    return {
      meta: [
        {vmid: 'description', name: 'description', content: "A través de estos proyectos, muestro un poco el resultado de mis aportes individuales y como parte de un equipo de desarrollo. Desempeñando diversos roles y utilizando variedad de tecnologías."},
        {vmid: 'og:title', property: 'og:title', content: "Portafolio de Ana Hernández"},
        {vmid: 'og:site_name', property: 'og:site_name', content: 'Ana Hernández | Developer'},
        {vmid: 'og:type', property: 'og:type', content: 'website'},
        {vmid: 'og:url', property: 'og:url', content: window.location.href},
        {vmid: 'og:image', property: 'og:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821731/banner_portfolio_94eb657e26.png"},
        {vmid: 'og:image:type', property: 'og:image:type', content: "image/png"},
        {vmid: 'og:description', property: 'og:description', content: "A través de estos proyectos, muestro un poco el resultado de mis aportes individuales y como parte de un equipo de desarrollo. Desempeñando diversos roles y utilizando variedad de tecnologías."},
        {vmid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
        {vmid: 'twitter:domain', property: 'twitter:domain', content: 'ianahernandez.tech'},
        {vmid: 'twitter:url', property: 'twitter:url', content: window.location.href},
        {vmid: 'twitter:title', property: 'twitter:title', content: "Portafolio de Ana Hernández"},
        {vmid: 'twitter:description', property: 'twitter:description', content: "A través de estos proyectos, muestro un poco el resultado de mis aportes individuales y como parte de un equipo de desarrollo. Desempeñando diversos roles y utilizando variedad de tecnologías."},
        {vmid: 'twitter:image', property: 'twitter:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821731/banner_portfolio_94eb657e26.png"},
        {vmid: 'twitter:site', property: 'twitter:site', content: '@ianahernandez'},
        {vmid: 'twitter:creator', property: 'twitter:creator', content: '@ianahernandez'},
      ],
      title: "Portafolio",
      titleTemplate: '%s | Ana Hernández'
    }
  },
  data() {
    return {
      data: [],
      carouseLSettings: {
        dots: false,
        focusOnSelect: true,
        infinite: false,
        speed: 700,
        slidesToShow: 8,
        slidesToScroll: 8,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      },
      categories: [],
      carouselGallery: {
        dots: true,
        focusOnSelect: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 2,
      },
      selectedCategory: -1,
      openModalProject: false,
      openModalGallery: false,
      projectSelected: null
    };
  },
  computed: {
    dataFiltered(){
      return this.selectedCategory != -1  ? this.data.filter(el => el.category.id == this.selectedCategory) : this.data;
    },
  },
  components: {
    VueSlickCarousel,
    ItemCarousel,
    Modal,
    Project
  },
  methods: {
    openProject(item) {
      this.projectSelected = item;
      this.openModalProject = true;
    },
    openGallery(item) {
      this.projectSelected = item;
      this.openModalGallery = true;
    },
    filterCategory(id){
      this.selectedCategory = id;
    }
  },
  async mounted() {
    this.$parent.titleName = "Portafolio";
    this.categories = await this.$store.dispatch('getCategories')
    this.$parent.loading = false;
    this.data = await this.$store.dispatch('getProjects')
  }
};
</script>
<style lang="scss">
  .img-gallery{
    height: 420px;
    margin: auto;
  }
</style>