<template>
  <div class="card-resume">
    <div class="card-resume-line"></div>
    <div class="card-resume-content">
      <h3 class="text-gray-dark">{{institute}}</h3>
      <p class="text-sm">{{description}}</p>
      <div v-if="dateFrom" class="text-xs"><span class="text-gray-600">{{dateFrom}} - {{actual? "Actualidad": dateTo}}</span></div>
      <div v-if="date" class="text-xs"><span class="text-gray-600">{{date}} - {{duration}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["institute", "dateFrom", "dateTo", "description", "date", "duration", "actual"],
}
</script>