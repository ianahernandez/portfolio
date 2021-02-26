<template>
  <div class="card-resume">
    <div class="card-resume-line"></div>
    <div class="card-resume-content">
      <h3 class="text-gray-dark">{{institute}}</h3>
      <p class="text-sm">{{description}}</p>
      <div v-if="dateFrom" class="text-xs"><span class="text-gray-700">{{dateFrom | dateShort}} - {{actual ? "Actualidad": dateTo | dateShort}}</span></div>
      <div v-if="date" class="text-xs"><span class="text-gray-700">{{date | dateFull }}  {{duration ? ` - ${duration} horas`: ''  }}</span></div>
      <a v-if="credential" :href="credential" class="text-violet text-xs hover:text-primary-500" target="_blank">Ver credencial</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["institute", "dateFrom", "dateTo", "description", "date", "duration", "actual", "credential"],
}
</script>