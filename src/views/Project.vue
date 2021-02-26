<template>
  <div v-if="data">
    <h3 class="subtitle">
      <i class="icon-list"></i>
      Acerca de
    </h3>
    <div class="md:flex banner">
      <div class="md:w-1/2">
        <vue-simple-markdown class="mx-4" :source="data.about"></vue-simple-markdown>
      </div>
      <div class="w-full md:w-1/2">
        <img v-if="data.imageBanner" :src="`${data.imageBanner.formats.medium.url}`" :alt="data.alternativeText" />
      </div>
    </div>

    <div class="project-item">
      <h3 class="subtitle">
        <i class="icon-heart"></i>
        ¿Qué lo hace especial?
      </h3>
      <div v-for="(feature) in data.features" :key="feature.id">
        <h4 class="text-dark">{{feature.title}}</h4>
        <p>{{feature.description}}</p>
      </div>
    </div>

    <div class="project-item">
      <h3 class="subtitle">
        <i class="icon-idea"></i>
        ¿Cómo lo hicimos?
      </h3>
      <p>{{data.description}}</p>
    </div>

    <div class="project-item">
      <h3 class="subtitle">
        <i class="icon-badge"></i>
        Mis contribuciones
      </h3>
      <div v-for="(contribution) in data.contributions" :key="contribution.id" >
        <h4 class="text-dark">{{contribution.title}}</h4>
        <p>{{contribution.description}}</p>
      </div>
    </div>

    <div class="project-item">
      <h3 class="subtitle">
        <i class="icon-code"></i>
        Tecnologías utilizadas
      </h3>
      <p>{{data.technologies.map(el => el.name).join(", ")}}</p>
    </div>

    <div class="w-full flex justify-center p-4">
      <a :href="data.url" class="btn btn-light" target="_blank">
        <i class="icon-globe"></i>
        Visitar {{data.name}}
      </a>
    </div>
  </div>
</template>
<script>
import "@/assets/scss/project.scss";
export default {
  props: ["data"]
};
</script>