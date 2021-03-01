<template>
  <div class="post">
    <div class="flex">
      <section class="posts w-full md:w-8/12 md:pr-4">
        <div v-if="data.updated_by" class="mt-8 flex justify-between flex-wrap">
          <p class="text-gray-700">Por <span class="text-gray-700">{{data.updated_by.firstname}} {{data.updated_by.lastname}}</span> - <small>Publicado el {{data.updated_at}}</small></p>
          <div class="ml-auto">
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500" aria-label="Icon facebook">
              <i class="icon-facebook" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500" aria-label="Icon twitter">
              <i class="icon-twitter" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500" aria-label="Icon linkedin">
              <i class="icon-linkedin" />
            </a>
          </div>
        </div>

        <article  v-if="data.image">
          <div class="my-4">
            <img class="w-full rounded-lg" :src="`${$store.state.staticPath}${data.image.url}`" :alt="data.image.alternativeText">
            <span class="text-gray-700 text-sm">{{data.image.caption}}</span>
          </div>
          <vue-simple-markdown class="text-gray-800 leading-8" :source="data.content"></vue-simple-markdown>
          <!-- <div class="text-gray-800 leading-8" v-html="data.content"></div> -->
        </article>

        <div class="w-full my-10">
          <p class="heading-2 text-center">¿Te gustó?, ¡Comparte!</p>
          <div class="mt-3 text-center">
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500" aria-label="Icon facebook">
              <i class="icon-facebook" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500" aria-label="Icon twitter">
              <i class="icon-twitter" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500" aria-label="Icon linkedin">
              <i class="icon-linkedin" />
            </a>
          </div>
        </div>

        <!-- <div class="my-10">
          <h2 class="subtitle">{{ data.comments && data.comments.length ? `Comentarios  (${data.comments.length})` : "No hay comentarios" }}</h2>
          <div class="bg-white rounded-lg max-w-xl p-3 my-4" v-for="comment in data.comments" :key="comment.id">
            <p class="text-gray-800 text-sm mb-3">{{comment.content}}</p>
            <p class="text-gray-800 text-xs">Por <strong>{{comment.name}}</strong></p>
            <small class="text-gray-700">{{comment.date}}</small>
          </div>
        </div> -->

        <hr>

        <div class="max-w-xl my-10 pb-8">
          <Disqus shortname='ianahernandez'/>
          <!-- <h2 class="subtitle">Agrega un comentario</h2>
          <input type="text" class="w-full" placeholder="Tu nombre">
          <textarea class="w-full" name="content" id="" rows="10" placeholder="Comentario"></textarea>
          <button class="btn btn-primary float-right"><i class="icon-send-alt"></i> Comentar</button> -->
        </div>


      </section>





      <section class="relevant hidden md:block md:w-4/12 pl-4">
        <h3 class="subtitle">Destacado</h3>
        <div class="card px-2">
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
  </div>
</template>
<script>
import { VueSimpleMarkdown } from 'vue-simple-markdown'
import { Disqus } from 'vue-disqus'
import { DisqusCount } from 'vue-disqus'
import "@/assets/scss/form.scss"

export default {
  name: 'Post',
  data(){
    return{
      data: {},
      relevant: []
    }
  },
  components: {
    VueSimpleMarkdown,
    Disqus,
    DisqusCount
  },
  methods: {
    verifyCounter() {
      let postViewed = localStorage.postsViewed;
      if(!postViewed){
        localStorage.postsViewed = [this.data.id]
        this.$store.dispatch('incrementView', { id: this.data.id })
      } else if(postViewed && !postViewed.includes(this.data.id)){
        localStorage.postsViewed = JSON.stringify([...JSON.parse(localStorage.postsViewed), this.data.id])
        this.$store.dispatch('incrementView', { id: this.data.id })
      }
    }
  },
  async mounted(){
    let slug = this.$route.params.slug
    this.data = await this.$store.dispatch('getPostBySlug', { slug })
    this.$parent.titleName = this.data.title
    this.verifyCounter()
    this.relevant = await this.$store.dispatch('getPostsRelevant')
  }
}
</script>
<style lang="scss">

/* --- disqus css -- */
#dsq-app3952 #thread__wrapper footer {
  display: none;
  visibility: hidden;
  opacity: 0;
}
.publisher-anchor-color a {
    color: #2F2E8B !important;
}
#disqus_thread {
color: #2F2E8B;
border-style: 0px solid;
border-color: #cccccc;
padding: 5px;
}

#dsq-content #dsq-comments .dsq-comment-body {
color: #2F2E8B;
background-color: #fff;
}

.dsq-reaction-body {
color: #2F2E8B;
}

.dsq-reaction-header cite, .dsq-reaction-header span {
color: #2F2E8B;
}

.dsq-reaction-retweets {
color: #2F2E8B;
}

/*--- end disqus css --*/ 
</style>