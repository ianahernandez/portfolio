<template>
  <div class="contact">
    <p class="my-10 px-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ.
    </p>
    <div class="w-full flex flex-col md:flex-row">
      <div class="md:w-8/12 md:pr-4">
        <div class="card flex flex-wrap">
          <div class="w-full md:w-1/2 px-2 my-2">
            <label class="text-gray-700" for="name"><i class="icon-user-1"></i> Tu nombre</label>
            <input type="text" class="w-full bg-purple-100" placeholder="John Doe" id="name">
          </div>
          <div class="w-full md:w-1/2 px-2 my-2">
            <label class="text-gray-700" for="email"><i class="icon-email"></i> Correo electrónico</label>
            <input type="email" class="w-full bg-purple-100" placeholder="correo@example.com" id="email">
          </div>
          <div class="w-full px-2 my-2">
            <label class="text-gray-700" for="message"><i class="icon-message"></i> Mensaje</label>
            <textarea class="w-full bg-purple-100" name="content" id="message" rows="5" placeholder="Ingresa aquí tu mensaje"></textarea>
          </div>
          <button class="btn btn-primary ml-auto mr-2"><i class="icon-send-alt"></i> Enviar</button>
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
              <li>
                <a href=""><i class="icon-twitter text-primary-500 mr-2"></i><span class="text-gray-dark text-sm">@ianahernandez</span></a>
              </li>
              <li>
                <a href=""><i class="icon-behance text-primary-500 mr-2"></i><span class="text-gray-dark text-sm">@ianahernandez</span></a>
              </li>
              <li>
                <a href=""><i class="icon-linkedin text-primary-500 mr-2"></i><span class="text-gray-dark text-sm">@ianahernandez</span></a>
              </li>
              <li>
                <a href=""><i class="icon-github text-primary-500 mr-2"></i><span class="text-gray-dark text-sm">@ianahernandez</span></a>
              </li>
              <li>
                <a href=""><i class="icon-gitlab text-primary-500 mr-2"></i><span class="text-gray-dark text-sm">@ianahernandez</span></a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/scss/form.scss"

export default {
  name: 'Contact',
  data(){
    return{
    }
  },
  mounted(){
    this.$parent.titleName = "Contáctame"
  }
}
</script>