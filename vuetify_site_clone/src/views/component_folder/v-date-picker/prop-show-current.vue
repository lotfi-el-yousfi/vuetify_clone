<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="date1"
      :show-current="false"
    ></v-date-picker>
    <v-date-picker
      v-model="date2"
      show-current="2013-07-13"
    ></v-date-picker>
  </v-row>
</template>

<script setup>
  import { ref } from 'vue'

  const date1 = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
  const date2 = ref('2013-07-29')
</script>

<script>
  export default {
    data () {
      return {
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: '2013-07-29',
      }
    },
  }
</script>
