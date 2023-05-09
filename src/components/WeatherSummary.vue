<script setup>
import moment from 'moment'
import { computed } from 'vue'

const props = defineProps({
    info: {
        type: [Object, null],
        required: true
    }
})

const iconSrc = computed(() => {
    const hours = moment.utc().add(props.info.timezone - 3600, 'seconds').format('HH')

    let isNight = true
    if (hours > 6 && hours < 21) isNight = false

    let iconName = props.info.weather[0].description
    if (
        (iconName === 'clear sky' && isNight) ||
        (iconName === 'few clouds' && isNight)
    ) iconName = iconName + ' night'

    return `/src/assets/images/weather_icons/${iconName}.png`
})
</script>

<template>
    <div v-if="info?.cod === 200" class="summary">
        <img
            :src="iconSrc"
            alt="weather icon"
            class="summary_weather_icon"
        >

        <span class="summary_temperature">{{ Math.round(info.main.temp) }}°C</span>

        <div class="summary_weather_description">
            <font-awesome-icon icon="fa-solid fa-cloud-sun" />
            <span>{{ info.weather[0].description }}</span>
        </div>

        <div class="summary_splitter"></div>

        <div class="summary_location">
            <font-awesome-icon icon="fa-solid fa-map-marker-alt" />
            <span>{{ info.name }}, {{ info.sys.country }}</span>
        </div>

        <div class="summary_time">
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span>{{ moment.utc().add(info.timezone - 3600, 'seconds').format('ddd, MMM D, YYYY') }}</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.summary {
    display: flex;
    flex-direction: column;

    &_weather_icon {
        width: 75px;
        height: 75px;
        margin: 15px 0 20px 0;
        background-size: contain;
    }

    &_temperature {
        font-size: @font-huge;
        font-weight: 600;
    }

    &_weather_description,
    &_location,
    &_time {
        display: flex;
        align-items: center;
        gap: 10px;
        text-transform: capitalize;
        line-height: 30px;
    }

    &_splitter {
        height: 2px;
        margin: 25px 0 15px 0;
        background-color: @color-border;
    }
}
</style>
