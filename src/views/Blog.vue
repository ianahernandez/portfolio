<template>
  <div class="blog">
    <div class="flex">
      <section class="posts w-full md:w-8/12 md:pr-4">
        <article v-for="post in data" :key="post.id" class="card my-4 p-2" @click="readMore(post.slug)">
          <div class="flex items-start">
            <img class="img-thumb" :src="`${$store.state.staticPath}${post.image.formats.thumbnail.url}`" :alt="post.image.alternativeText">
            <div class="pl-3">
              <div class="flex flex-col items-baseline md:flex-row md:justify-between">
                <h2 class="heading-2">{{post.title}}</h2>
                <span class="tag text-sm h-5 px-2">{{post.category.name}}</span>
              </div>
              <span class="text-xs text-gray-700">{{post.updated_at}}</span>
              <p class="text-sm line-clamp-2 mb-2">{{post.shortDescription}}</p>
              <div class="flex justify-between">
                <span class="text-xs text-gray-700">Por {{post.updated_by.firstname}} {{post.updated_by.lastname}}</span>
                <div class="flex">
                  <div class="text-primary-400 mr-2"><i class="icon-eye "></i> <span class="font-bold text-sm text-primary-400 ">10</span></div>
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
import { DisqusCount } from 'vue-disqus'

export default {
  name: 'Blog',
  data(){
    return{
      data: [],
      /* data: [
        {
          id: 1,
          title: "Neomorfismo",
          imgThumb: "https://www.adictosaltrabajo.com/wp-content/uploads/2020/04/Captura-de-pantalla-2020-04-20-a-las-10.22.48-300x208.png",
          img: "https://www.adictosaltrabajo.com/wp-content/uploads/2020/04/Captura-de-pantalla-2020-04-20-a-las-10.22.48-300x208.png",
          shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus.",
          updatedAt: "Hace una semana",
          author: "Ana Hernández",
          views: 21,
          comments: 4,
          category: "Diseño UX/UI",
          slug: "diseno-ui-ux"
        },
        {
          id: 2,
          title: "El home office",
          imgThumb: "https://www.bizneo.com/blog/wp-content/uploads/2020/03/home-office.jpg",
          img: "https://www.bizneo.com/blog/wp-content/uploads/2020/03/home-office.jpg",
          shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus.",
          updatedAt: "Hace un mes",
          author: "Ana Hernández",
          views: 17,
          comments: 6,
          category: "Actualidad",
          slug: "el-home-office"
        },
        {
          id: 3,
          title: "Buenas prácticas de UI/UIX",
          imgThumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchUvVZvBkmhFXKdkXYxTpLv1wQqICqXtr8w&usqp=CAU",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchUvVZvBkmhFXKdkXYxTpLv1wQqICqXtr8w&usqp=CAU",
          shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus.",
          updatedAt: "Hace un mes",
          author: "Ana Hernández",
          views: 17,
          comments: 72,
          category: "Actualidad",
          slug:"buenas-practicas-de-ui-ux"
        }
      ], */
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
          title: "Buenas prácticas de UI/UIX",
          imgThumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchUvVZvBkmhFXKdkXYxTpLv1wQqICqXtr8w&usqp=CAU",
          shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati, at animi distinctio necessitatibus.",
          comments: 72,
        }
      ]
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
    //console.log(await this.$store.dispatch('getPosts'))
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