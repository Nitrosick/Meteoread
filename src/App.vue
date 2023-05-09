<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { API_KEY, API_URL } from './config'
import SearchInput from './components/SearchInput.vue'
import WeatherSummary from './components/WeatherSummary.vue'
import Highlights from './components/Highlights.vue'
import Coords from './components/Coords.vue'
import Humidity from './components/Humidity.vue'

const city = ref("London")
const weatherInfo = ref(null)
const warning = ref("")

const storage = localStorage.getItem('city_name')
if (storage) city.value = storage

const getWeather = () => {
  axios
    .get(API_URL, {
      params: {q: city.value, units: 'metric', appid: API_KEY}
    })
    .then(res => {
      if (res.status === 200) {
        warning.value = ''
        weatherInfo.value = res.data
        localStorage.setItem('city_name', city.value)
      }
    })
    .catch(error => {
      warning.value = 'Input correct city name'
      weatherInfo.value = null
    })
}

onMounted(getWeather)
</script>

<template>
  <div class="block summary">
    <SearchInput v-model:searchValue="city" @search="getWeather" />
    <WeatherSummary :info="weatherInfo" />
    <div v-if="warning" class="warning">{{ warning }}</div>
  </div>
  <Highlights :info="weatherInfo" />
  <Coords :coords="weatherInfo?.coord" />
  <Humidity :value="weatherInfo?.main.humidity" />
</template>

<style lang="less" scoped>
@import './assets/styles/variables.less';

.warning {
  margin-top: 30px;
  color: @color-subtext;
  text-align: center;
}

@media screen and (max-width: 1200px) {
    .summary {
      grid-row: 1 / 3;
    }
}
</style>
