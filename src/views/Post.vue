<template>
  <div class="post">
    <div class="flex">
      <section class="posts w-full md:w-8/12 md:pr-4">
        <div v-if="data.updated_by" class="mt-8 flex justify-between flex-wrap">
          <p class="text-gray-700">Por <span class="text-gray-700">{{data.updated_by.firstname}} {{data.updated_by.lastname}}</span> - <small>Publicado el {{data.updated_at}}</small></p>
          <div class="ml-auto">
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500">
              <i class="icon-facebook" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500">
              <i class="icon-twitter" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500">
              <i class="icon-linkedin" />
            </a>
          </div>
        </div>

        <article  v-if="data.image">
          <div class="my-4">
            <img class="w-full rounded-lg" :src="`${$store.state.staticPath}${data.image.url}`" :alt="data.alternativeText">
            <span class="text-gray-500 text-sm">{{data.image.caption}}</span>
          </div>
          <vue-simple-markdown class="text-gray-800 leading-8" :source="data.content"></vue-simple-markdown>
          <!-- <div class="text-gray-800 leading-8" v-html="data.content"></div> -->
        </article>

        <div class="w-full my-10">
          <p class="heading-2 text-center">¿Te gustó?, ¡Comparte!</p>
          <div class="mt-3 text-center">
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500">
              <i class="icon-facebook" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500">
              <i class="icon-twitter" />
            </a>
            <a href="#" class="btn-icon text-gray-500 hover:text-primary-500">
              <i class="icon-linkedin" />
            </a>
          </div>
        </div>

        <div class="my-10">
          <h2 class="subtitle">{{ data.comments && data.comments.length ? `Comentarios  (${data.comments.length})` : "No hay comentarios" }}</h2>
          <div class="bg-white rounded-lg max-w-xl p-3 my-4" v-for="comment in data.comments" :key="comment.id">
            <p class="text-gray-800 text-sm mb-3">{{comment.content}}</p>
            <p class="text-gray-800 text-xs">Por <strong>{{comment.name}}</strong></p>
            <small class="text-gray-700">{{comment.date}}</small>
          </div>
        </div>

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
            <div class="w-32">
              <img class="rounded" :src="post.imgThumb" :alt="post.title">
              <div class="text-red-300 text-xs mt-1"><i class="icon-comment-alt"></i> <span class="font-bold text-red-300 "></span>{{post.comments}}</div>
            </div>
            <div class="pl-3">
              <h2 class="heading-2 text-base">{{post.title}}</h2>
              <p class="line-clamp-2 text-xs text-gray-700">{{post.shortDescription}}</p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h3 class="subtitle">Recibir noticias</h3>
          <p class="text-sm my-2">
            It is a long established fact that a reader will be distracted by the
          </p>
          <button class="btn btn-primary m-auto"><i class="icon-message mr-2"></i> Suscribirme</button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { Disqus } from 'vue-disqus'
import "@/assets/scss/form.scss"

export default {
  name: 'Post',
  data(){
    return{
      /* data: {
        id: 1,
        title: "El home office",
        imgThumb: "https://www.bizneo.com/blog/wp-content/uploads/2020/03/home-office.jpg",
        img: "https://www.bizneo.com/blog/wp-content/uploads/2020/03/home-office.jpg",
        shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus.",
        text: `<h3 style="font-size: 1.5rem; font-weight: 700;">What is Lorem Ipsum?</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <h3 style="font-size: 1.5rem; font-weight: 700;">Why do we use it?</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>`,
        updatedAt: "Hace una semana",
        date: "26 de enero de 2021",
        author: "Ana Herández",
        views: 21,
        category: "Diseño UX/UI",
        imageCredits: "Imagen de unsplash.com",
        comments: [
          {
            id:2,
            name: "José D' Amelio",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            date: "26 de Enero de 2021 1:40am"
          },
          {
            id:1,
            name: "Katherin Hernández",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            date: "21 de Octubre de 2020 8:40am"
          }
        ]
      }, */
      data: {},
      relevant: [
        {
          id: 1,
          title: "Neomorfismo",
          imgThumb: "https://www.adictosaltrabajo.com/wp-content/uploads/2020/04/Captura-de-pantalla-2020-04-20-a-las-10.22.48-300x208.png",
          shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus.",
          comments: 4,
        },
        {
          id: 2,
          title: "Buenas prácticas de UI/UX",
          imgThumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchUvVZvBkmhFXKdkXYxTpLv1wQqICqXtr8w&usqp=CAU",
          shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus.",
          comments: 72,
        }
      ]
    }
  },
  components: {
    Disqus
  },
  async mounted(){
    let slug = this.$route.params.slug
    this.data = await this.$store.dispatch('getPostBySlug', { slug })
    this.$parent.titleName = this.data.title
    console.log(this.data)
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