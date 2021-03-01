<template>
  <div class="contact">
    <p class="my-10 px-4">
      Me gusta participar en proyectos, e integrarme a equipos que estén haciendo cosas increíbles. 
      También me gusta colaborar en proyectos de código abierto para la comunidad. Si crees que puedo ser parte de tu proyecto,
       no dudes en escribirme y ¡Hagámoslo!. 
    </p>
    <div class="w-full flex flex-col md:flex-row">
      <div class="md:w-8/12 md:pr-4">
        <div :class="`card flex flex-wrap ${loading ? 'loader' : ''}`">
          <div class="w-full md:w-1/2 px-2 my-2">
            <label class="text-gray-700" for="name"><i class="icon-user-1"></i> Tu nombre</label>
            <input type="text" class="w-full bg-purple-100" v-model="data.name" placeholder="John Doe" id="name">
            <span class="text-xs text-red-600">{{errors["name"]}}</span>
          </div>
          <div class="w-full md:w-1/2 px-2 my-2">
            <label class="text-gray-700" for="email"><i class="icon-email"></i> Correo electrónico</label>
            <input type="email" class="w-full bg-purple-100" v-model="data.email" placeholder="correo@example.com" id="email">
            <span class="text-xs text-red-600">{{errors["email"]}}</span>
          </div>
          <div class="w-full px-2 my-2">
            <label class="text-gray-700" for="message"><i class="icon-message"></i> Mensaje</label>
            <textarea class="w-full bg-purple-100" name="content" v-model="data.message" id="message" rows="5" placeholder="Ingresa aquí tu mensaje"></textarea>
            <span class="text-xs text-red-600">{{errors["message"]}}</span>
          </div>
          <button class="btn btn-primary ml-auto mr-2" @click="sendMessage"><i class="icon-send-alt"></i> Enviar</button>
        </div>
      </div>
      <div class="md:w-4/12 md:pl-4 flex md:flex-col flex-wrap px-2 mt-6 md:mt-0 md:pl-10">
          <div class="mb-8 w-full">
            <h2 class="heading-2">Mi ubicación</h2>
            <span class="text-gray-dark text-sm">
              <i class="icon-pin text-primary-500 mr-2"></i>
              Barquisimeto, Venezuela
            </span>
          </div>
          <div class="w-full">
            <h2 class="heading-2">Encuéntrame</h2>
            <ul>
              <li v-for="network in socialNetworks" :key="network.id">
                <a :href="network.url" target="_blank" rel="noreferrer"><i :class="`icon-${network.icon} text-primary-500 mr-2`"></i><span class="text-gray-dark text-sm">@{{network.username}}</span></a>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <modal
      :show.sync="showSuccess"
      title="Listo!"
      classes="w-1/2 self-center"
      @update:show="showSuccess = false"
      
    >
      <template v-slot:content>
        <p class="subtitle text-center">
          Gracias por tu mensaje, {{messageName}}. 
        </p>
        <p class="text-primary-500 text-center">
          Pronto me comunicaré contigo para que sigamos en contacto.
        </p>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from "@/layouts/components/ui/Modal.vue";
import "@/assets/scss/form.scss"

export default {
  name: 'Contact',
  data(){
    return{
      data: {
        name: "",
        email:"",
        message: ""
      },
      socialNetworks: [],
      errors: {
      },
      showSuccess: false,
      messageName: "",
      loading: false,
      regEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    }
  },
  methods: {
    async sendMessage() {
      await Object.keys(this.data).forEach(key => {
        if(!this.data[key].length){
          this.$set(this.errors, key, "Este campo es requerido");
        } else {
          this.$delete(this.errors, key);
        }
      })
      if(this.data.email){
        if(!this.regEmail.test(this.data.email)){
          this.$set(this.errors, "email", "Ingrese un correo válido.");
        }else {
          this.$delete(this.errors, "email");
        }
      }
      if(!Object.values(this.errors).length){
        this.loading = true;
        let res = await this.$store.dispatch('sendMessage', this.data)
        if(res){
          this.loading = false;
          this.messageName = this.data.name,
          this.showSuccess = true;
          this.data = {
            name: "",
            email:"",
            message: ""
          }
        }
      }
    },
  },
  components:{
    Modal
  },
  async mounted(){
    this.$parent.titleName = "Contáctame"
    this.socialNetworks = await this.$store.dispatch('getSocialNetworks')
  }
}
</script>