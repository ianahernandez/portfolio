<template>
  <div class="resumen">
    <div class="content">
      <div class="flex flex-col md:flex-row">
        <div class="w-full pb-4 md:w-1/2 md:pr-2">
          <div class>
            <h2 class="subtitle mt-0">
              <i class="icon-grade mr-2"></i> Educación
            </h2>
            <template v-if="data && data.studies">
              <card-resume v-for="item in data.studies" :key="`study- ${item.id}`"
                :institute="item.institute"
                :dateFrom="item.from"
                :dateTo="item.to"
                :description="item.description"
              />
            </template>

            <h2 class="subtitle mt-0">
              <i class="icon-certificate mr-2"></i> Cursos y certificaciones
            </h2>
            <template v-if="data && data.courses">
              <card-resume v-for="item in data.courses" :key="`course- ${item.id}`"
                :institute="item.institute"
                :date="item.date"
                :duration="item.duration"
                :description="item.name"
              />
            </template>
          </div>
        </div>
        <div class="w-full md:w-1/2 md:pl-3">
          <div class>
            <h2 class="subtitle mt-0">
              <i class="icon-work-2 mr-2"></i> Experiencia
            </h2>
            <template v-if="data &&  data.experiences">
              <card-resume v-for="item in data.experiences" :key="`work- ${item.id}`"
                :institute="item.institute"
                :dateFrom="item.from"
                :dateTo="item.to"
                :description="item.name"
                :actual="item.actual"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardResume from "@/layouts/components/ui/CardResume";

export default {
  name: "Resume",
  data() {
    return {
      data: null,
    };
  },
  components: {
    CardResume
  },
  async mounted() {
    this.$parent.titleName = "Resumen";
    this.data = await this.$store.dispatch('getResume')
  }
};
</script>
