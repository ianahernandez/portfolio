<template>
  <div class="blog">
    <div class="flex" v-if="data.length">
      <section class="posts w-full md:w-8/12 md:pr-4">
        <article v-for="post in data" :key="post.id" class="card my-4 p-2" 
        data-aos="fade-up" data-aos-duration="1000" 
        @click="readMore(post.slug)">
          <div class="flex items-start">
            <img class="img-thumb" :src="post.image.url" :alt="post.image.alternativeText">
            <div class="pl-3 w-full">
              <div class="flex flex-col items-baseline md:flex-row md:justify-between">
                <h2 class="heading-2">{{post.title}}</h2>
                <span class="tag text-sm h-5 px-2">{{post.category.name}}</span>
              </div>
              <span class="text-xs text-gray-700">{{post.updated_at | dateTime}}</span>
              <p class="text-sm line-clamp-2 mb-2">{{post.shortDescription}}</p>
              <div class="flex justify-between">
                <span class="text-xs text-gray-700">Por {{post.updated_by.firstname}} {{post.updated_by.lastname}}</span>
                <div class="flex">
                  <div class="text-primary-400 mr-2"><i class="icon-eye "></i> <span class="font-bold text-sm text-primary-400 ">{{post.views || 0}}</span></div>
                  <div class="text-red-300"><i class="icon-comment-alt"></i> <span class="font-bold text-sm text-red-300 "></span>
                    <DisqusCount class="text-red-300 " lang="es" shortname='ianahernandez' :identifier="`/blog/${post.slug}`" />
                  </div>
                  <!-- <div class="text-primary-400 mr-2"><i class="icon-eye "></i> <span class="font-bold text-sm text-primary-300 ">{{post.views}}</span></div>
                  <div class="text-red-300"><i class="icon-comment-alt"></i> <span class="font-bold text-sm text-red-300 "></span>{{post.comments}}</div> -->
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section class="relevant hidden md:block md:w-4/12 pl-4">
        <h3 class="subtitle">Destacado</h3>
        <div :class="`card px-2 ${relevant.length ? '' : 'loader h-40'}`">
          <div class="flex mb-4" v-for="post in relevant" :key="post.id">
            <div class="w-24">
              <img class="rounded" :src="post.image.url" :alt="post.title">
              <div class="text-red-300 text-xs"><i class="icon-comment-alt"></i> <span class="font-bold text-sm text-red-300 "></span>
                <DisqusCount class="text-red-300 " lang="es" shortname='ianahernandez' :identifier="`/blog/${post.slug}`" />
              </div>
            </div>
            <div class="pl-3">
              <h2 class="heading-2 text-base">{{post.title}}</h2>
              <p class="line-clamp-2 text-xs text-gray-700">{{post.shortDescription}}</p>
            </div>
          </div>
        </div>

        <!-- <div class="mt-4">
          <h3 class="subtitle">Recibir noticias</h3>
          <p class="text-sm my-2">
            It is a long established fact that a reader will be distracted by the
          </p>
          <button class="btn btn-primary m-auto"><i class="icon-message mr-2"></i> Suscribirme</button>
        </div> -->
      </section>
    </div>
    <div v-else="" class="loader loader-screen">
    </div>
  </div>
</template>
<script>
import { DisqusCount } from 'vue-disqus'

export default {
  name: 'Blog',
  metaInfo() {
    return {
      meta: [
        {vmid: 'description', name: 'description', content: "En este blog escribo sobre tema relevantes de tecnología, tutoriales, tips, curiosidades y cosas que esté aprendiendo para que otros también lo hagan."},
        {vmid: 'og:title', property: 'og:title', content: "Blog de tecnología"},
        {vmid: 'og:site_name', property: 'og:site_name', content: 'Ana Hernández | Developer'},
        {vmid: 'og:type', property: 'og:type', content: 'website'},
        {vmid: 'og:url', property: 'og:url', content: window.location.href},
        {vmid: 'og:image', property: 'og:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821726/banner_blog_9a5503b125.png"},
        {vmid: 'og:image:type', property: 'og:image:type', content: "image/png"},
        {vmid: 'og:description', property: 'og:description', content: "En este blog escribo sobre tema relevantes de tecnología, tutoriales, tips, curiosidades y cosas que esté aprendiendo para que otros también lo hagan."},
        {vmid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
        {vmid: 'twitter:domain', property: 'twitter:domain', content: 'ianahernandez.tech'},
        {vmid: 'twitter:url', property: 'twitter:url', content: window.location.href},
        {vmid: 'twitter:title', property: 'twitter:title', content: "Blog de tecnología"},
        {vmid: 'twitter:description', property: 'twitter:description', content: "En este blog escribo sobre tema relevantes de tecnología, tutoriales, tips, curiosidades y cosas que esté aprendiendo para que otros también lo hagan."},
        {vmid: 'twitter:image', property: 'twitter:image', content: "https://res.cloudinary.com/ianahernandez/image/upload/v1616821726/banner_blog_9a5503b125.png"},
        {vmid: 'twitter:site', property: 'twitter:site', content: '@ianahernandez'},
        {vmid: 'twitter:creator', property: 'twitter:creator', content: '@ianahernandez'},
      ],
      title: "Blog",
      titleTemplate: '%s | Ana Hernández'
    }
  },
  data(){
    return{
      data: [],
      relevant: []
    }
  },
  methods: {
    readMore(slug){
      this.$router.push({ name: "post", params: { slug: slug }})
    }
  },
  components: {
    DisqusCount
  },
  async mounted(){
    this.$parent.titleName = "Blog"
    this.data = await this.$store.dispatch('getPosts')
    this.relevant = await this.$store.dispatch('getPostsRelevant')
  }
}
</script>
<style lang="scss">
  .img-thumb{
    width: 100px;
    height: auto;
    border-radius: 5px;
  }
</style>