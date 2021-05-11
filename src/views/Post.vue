<template>
  <div class="post">
    <h1 class="title pl-0 md:w-8/12">{{ data.title }}</h1>
    <div class="flex" v-if="data.title">
      <section class="posts w-full md:w-8/12 md:pr-4">
        <div v-if="data.updated_by" class="mt-8 flex justify-between flex-wrap">
          <p class="text-gray-700">
            Por
            <span
              class="text-gray-700"
            >{{data.updated_by.firstname}} {{data.updated_by.lastname}}</span> -
            <small>Publicado el {{data.created_at | dateTimeFull}}</small>
          </p>
          <div class="ml-auto">
            <button
              @click="shareFacebookPost()"
              class="btn-icon text-gray-500 hover:text-primary-500"
              aria-label="Icon facebook"
              target="_blank"
            >
              <i class="icon-facebook" />
            </button>

            <button
              @click="tweetPost()"
              target="_blank"
              class="btn-icon text-gray-500 hover:text-primary-500"
              aria-label="Icon twitter"
            >
              <i class="icon-twitter" />
            </button>

            <button
              @click="shareLinkedin()"
              class="btn-icon text-gray-500 hover:text-primary-500"
              aria-label="Icon linkedin"
            >
              <i class="icon-linkedin" />
            </button>
          </div>
        </div>

        <article v-if="data.image">
          <div class="my-4">
            <img
              class="w-full rounded-lg img-post"
              :src="data.image.url"
              :alt="data.image.alternativeText"
            />
            <span class="text-gray-700 text-sm">{{data.image.caption}}</span>
          </div>
          <vue-simple-markdown
            class="text-gray-800 leading-8"
            :postrender="parseLinks"
            :source="data.content"
          ></vue-simple-markdown>
          <!-- <div class="text-gray-800 leading-8" v-html="data.content"></div> -->
        </article>

        <div class="w-full my-10">
          <p class="heading-2 text-center">¿Te gustó?, ¡Comparte!</p>
          <div class="mt-3 text-center">
            <button
              @click="shareFacebookPost()"
              class="btn-icon text-gray-500 hover:text-primary-500"
              aria-label="Icon facebook"
              target="_blank"
            >
              <i class="icon-facebook" />
            </button>

            <button
              @click="tweetPost()"
              target="_blank"
              class="btn-icon text-gray-500 hover:text-primary-500"
              aria-label="Icon twitter"
            >
              <i class="icon-twitter" />
            </button>

            <button
              @click="shareLinkedin()"
              class="btn-icon text-gray-500 hover:text-primary-500"
              aria-label="Icon linkedin"
            >
              <i class="icon-linkedin" />
            </button>
          </div>
        </div>

        <!-- <div class="my-10">
          <h2 class="subtitle">{{ data.comments && data.comments.length ? `Comentarios  (${data.comments.length})` : "No hay comentarios" }}</h2>
          <div class="bg-white rounded-lg max-w-xl p-3 my-4" v-for="comment in data.comments" :key="comment.id">
            <p class="text-gray-800 text-sm mb-3">{{comment.content}}</p>
            <p class="text-gray-800 text-xs">Por <strong>{{comment.name}}</strong></p>
            <small class="text-gray-700">{{comment.date}}</small>
          </div>
        </div>-->

        <hr />

        <div class="max-w-xl my-10 pb-8">
          <Disqus shortname="ianahernandez" lang="es_ES" />
          <!-- <h2 class="subtitle">Agrega un comentario</h2>
          <input type="text" class="w-full" placeholder="Tu nombre">
          <textarea class="w-full" name="content" id="" rows="10" placeholder="Comentario"></textarea>
          <button class="btn btn-primary float-right"><i class="icon-send-alt"></i> Comentar</button>-->
        </div>
      </section>

      <section class="relevant hidden md:block md:w-4/12 pl-4">
        <h3 class="subtitle">Destacado</h3>
        <div class="card px-2">
          <template v-if="relevantFiltered.length">
            <div
              class="flex mb-4 cursor-pointer"
              v-for="post in relevantFiltered"
              :key="post.id"
              @click="readMore(post.slug)"
            >
              <div class="w-24">
                <img class="rounded" :src="post.image.url" :alt="post.title" />
                <div class="text-red-300 text-xs">
                  <i class="icon-comment-alt"></i>
                  <span class="font-bold text-sm text-red-300"></span>
                  <DisqusCount
                    class="text-red-300"
                    lang="es"
                    shortname="ianahernandez"
                    :identifier="`/blog/${post.slug}`"
                  />
                </div>
              </div>
              <div class="pl-3">
                <h2 class="heading-2 text-base">{{post.title}}</h2>
                <p class="line-clamp-2 text-xs text-gray-700">{{post.shortDescription}}</p>
              </div>
            </div>
          </template>
          <div v-else>
            <p class="text-center">No hay más publicaciones destacadas</p>
          </div>
        </div>

        <!-- <div class="mt-4">
          <h3 class="subtitle">Recibir noticias</h3>
          <p class="text-sm my-2">
            It is a long established fact that a reader will be distracted by the
          </p>
          <button class="btn btn-primary m-auto"><i class="icon-message mr-2"></i> Suscribirme</button>
        </div>-->
      </section>
    </div>
    <div v-else class="loader loader-screen"></div>
  </div>
</template>
<script>
import { VueSimpleMarkdown } from "vue-simple-markdown";
import { Disqus } from "vue-disqus";
import { DisqusCount } from "vue-disqus";
import "@/assets/scss/form.scss";

export default {
  name: "Post",
  metaInfo() {
    return {
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.metaInfoData.description
        },
        {
          vmid: "og:title",
          property: "og:title",
          content: this.metaInfoData.title
        },
        {
          vmid: "og:site_name",
          property: "og:site_name",
          content: "Ana Hernández | Developer"
        },
        { vmid: "og:type", property: "og:type", content: "article" },
        { vmid: "og:url", property: "og:url", content: window.location.href },
        {
          vmid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/ianahernandez/image/upload/v1616821726/banner_blog_9a5503b125.png"
        },
        {
          vmid: "og:image:type",
          property: "og:image:type",
          content: "image/jpeg"
        },
        {
          vmid: "og:description",
          property: "og:description",
          content: this.metaInfoData.description
        },
        {
          vmid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          vmid: "twitter:domain",
          property: "twitter:domain",
          content: "ianahernandez.tech"
        },
        {
          vmid: "twitter:url",
          property: "twitter:url",
          content: window.location.href
        },
        {
          vmid: "twitter:title",
          property: "twitter:title",
          content: this.metaInfoData.title
        },
        {
          vmid: "twitter:description",
          property: "twitter:description",
          content: this.metaInfoData.description
        },
        {
          vmid: "twitter:image",
          property: "twitter:image",
          content:
            "https://res.cloudinary.com/ianahernandez/image/upload/v1616821726/banner_blog_9a5503b125.png"
        },
        {
          vmid: "twitter:site",
          property: "twitter:site",
          content: "@ianahernandez"
        },
        {
          vmid: "twitter:creator",
          property: "twitter:creator",
          content: "@ianahernandez"
        }
      ],
      title: this.metaInfoData.title,
      titleTemplate: "%s | Ana Hernández"
    };
  },
  data() {
    return {
      data: {},
      relevant: []
    };
  },
  computed: {
    urlShare() {
      return encodeURIComponent(window.location.href);
      //return encodeURIComponent("https://stackoverflow.com/questions/40015037/can-vue-router-open-a-link-in-a-new-tab")
    },
    metaInfoData() {
      return {
        title: this.data ? this.data.title : "",
        description: this.data ? this.data.shortDescription : "",
        image: this.data ? this.data.image : ""
      };
    },
    relevantFiltered() {
      return this.relevant.filter(el => el.id != this.data.id) || [];
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
      if (!postViewed) {
        localStorage.postsViewed = [this.data.id];
        this.$store.dispatch("incrementView", { id: this.data.id });
      } else if (postViewed && !postViewed.includes(this.data.id)) {
        localStorage.postsViewed = JSON.stringify([
          JSON.parse(localStorage.postsViewed),
          this.data.id
        ]);
        this.$store.dispatch("incrementView", { id: this.data.id });
      }
    },
    tweetPost() {
      let titleShare = this.data.title;
      titleShare = `${titleShare.replace(" ", "%20")}👇👇%0A`;
      let tags = `${this.data.tags
        .map(el => el.name.replace(" ", ""))
        .join("%2C")}%0A`;
      window.open(
        `https://twitter.com/share?url=${this.urlShare}&text=${titleShare}&hashtags=${tags}&via=ianahernandez`,
        "facebook-share-dialog",
        "width=500,height=300"
      );
      return false;
    },
    shareFacebookPost() {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + this.urlShare,
        "facebook-share-dialog",
        "width=700,height=400"
      );
      return false;
    },
    shareLinkedin() {
      window.open(
        "http://www.linkedin.com/shareArticle?mini=true&url=" +
          this.urlShare +
          "&title=HolaTitulo",
        "",
        "_blank, width=500, height=500, resizable=yes, scrollbars=yes"
      );
      return false;
    },
    parseLinks(html) {
      let exp = /href/gi;
      return html.replace(exp, 'rel="noopener" href');
    },
    readMore(slug) {
      this.$router.push({ name: "post", params: { slug: slug } });
    }
  },
  async mounted() {
    let slug = this.$route.params.slug;
    this.data = await this.$store.dispatch("getPostBySlug", { slug });
    this.$parent.titleName = null;
    this.verifyCounter();
    this.relevant = await this.$store.dispatch("getPostsRelevant");
  }
};
</script>
<style lang="scss">
/* --- disqus css -- */
#dsq-app3952 #thread__wrapper footer {
  display: none;
  visibility: hidden;
  opacity: 0;
}
.publisher-anchor-color a {
  color: #2f2e8b !important;
}
#disqus_thread {
  color: #2f2e8b;
  border-style: 0px solid;
  border-color: #cccccc;
  padding: 5px;
}

#dsq-content #dsq-comments .dsq-comment-body {
  color: #2f2e8b;
  background-color: #fff;
}

.dsq-reaction-body {
  color: #2f2e8b;
}

.dsq-reaction-header cite,
.dsq-reaction-header span {
  color: #2f2e8b;
}

.dsq-reaction-retweets {
  color: #2f2e8b;
}

/*--- end disqus css --*/
/* Image post */
.img-post {
  max-height: 600px;
}
</style>