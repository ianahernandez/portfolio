<template>
  <div class="content">
    <div class="mb-8 p-3">
      <VueSlickCarousel v-if="categories.length" v-bind="carouseLSettings">
        <ItemCarousel v-for="category in categories" :key="category.id" :text="category.name" :foto="category.image.url"></ItemCarousel>
      </VueSlickCarousel>
    </div>
    <section class="flex portfolio">
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="card overflow-hidden" v-for="(item,index) in data" :key="index">
          <span v-if="!item.isHover" class="card-no-hover tag tag-left">{{item.categories[0].name}}</span>
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

    <modal
      v-if="projectSelected"
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
            <img class="rounded-lg" :src="`${$store.state.staticPath}${image.formats.large.url}`" :alt="image.alternativeText" />
            <p class="mt-2">{{image.caption}}</p>
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
  data() {
    return {
      /* data: [
        {
          category: "Marketplace",
          name: "Suimap",
          img: "https://suimap.com/web/image/res.company/1/logo?unique=87ab3c9",
          imageBanner:
            "https://suimap.com/web/image/32580/montaje%20front%20(1).png",
          description: `Desarrollamos una aplicación web de arquitectura cliente servidor, segura y escalable. Que cuenta con intranet, en la
                      que los usuarios, de acuerdo a su nivel de acceso puede gestionar datos, realizar transacciones y hacer seguimiento
                      de las mismas. Portal web de comercio electrónico, con diferentes plataformas de pago integradas, blog, mensajería entre otros.`,
          about:
            "Suimap  es el primer marketplace en su tipo que le brinda a los negocios la posibilidad de gestionar sus ventas on-line y off-line de forma unificada. Podrán emplear campañas de marketing, realizar promociones e integrar su logística sin necesidad de acudir a otras herramientas. ¡Todo desde un solo lugar! Mucho más que un centro comercial on-line, es todo un ecosistema de ventas inteligente.",
          technologies: ["HTML", "CSS", "Javascript", "JQuery"],
          isHover: false,
          url: "https://suimap.com",
          features: [
            {
              title: "Sistema de gestión",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus, iste labore aspernatur natus dolor temporibus, incidunt ea voluptates unde! Molestiae numquam omnis sint officiis ipsam."
            },
            {
              title: "Geolocalización",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus, iste labore aspernatur natus dolor temporibus, incidunt ea voluptates unde! Molestiae numquam omnis sint officiis ipsam."
            },
            {
              title: "Chat en vivo",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus, iste labore aspernatur natus dolor temporibus, incidunt ea voluptates unde! Molestiae numquam omnis sint officiis ipsam."
            },
            {
              title: "UI",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus, iste labore aspernatur natus dolor temporibus, incidunt ea voluptates unde! Molestiae numquam omnis sint officiis ipsam."
            }
          ],
          contributions: [
            {
              title: "Desarrollo frontend",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus."
            },
            {
              title: "Desarrollo Backend",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus."
            },
            {
              title: "Diseño lógico",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus."
            }
          ],
          gallery: [
            {
              title: "Título 1",
              url:
                "https://suimap.com/web/image/20948/banner%20crea%20tu%20tienda-05.jpg"
            },
            {
              title: "Título 2",
              url:
                "https://suimap.com/web/image/37401/suimap-crea-tu-propio-ecommerce1.png"
            },
            {
              title: "Título 3",
              url:
                "https://suimap.com/web/image/20952/banner%20crea%20tu%20tienda-06.jpg"
            }
          ]
        },
        {
          category: "E-commerce",
          name: "Distribuidores IDP",
          img: "https://suimap.com/web/image/res.company/1/logo?unique=87ab3c9",
          description: "Lorem ipsum...",
          technologies: ["HTML", "CSS", "Javascript", "JQuery"],
          isHover: false
        }
      ], */
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
      openModalProject: false,
      openModalGallery: false,
      projectSelected: null
    };
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
    }
  },
  async mounted() {
    this.$parent.titleName = "Portafolio";
    this.data = await this.$store.dispatch('getProjects')
    this.categories = await this.$store.dispatch('getCategories')
  }
};
</script>