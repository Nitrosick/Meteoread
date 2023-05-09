<script setup>
import moment from 'moment';
import { computed } from 'vue'
import icon from '../assets/images/sun-moving.png'

const props = defineProps({
    info: {
        type: null,
        validator: v => v === undefined || typeof v === 'object',
        required: true
    },
    timezone: {
        type: null,
        validator: v => v === undefined || typeof v === 'number',
        required: true
    }
})

const sunriseTime = computed(() => moment.utc(props.info.sunrise * 1000).add(props.timezone, 'seconds').format('HH:mm:ss'))
const sunsetTime = computed(() => moment.utc(props.info.sunset * 1000).add(props.timezone, 'seconds').format('HH:mm:ss'))
</script>

<template>
    <div class="sunrise highlights_block">
        <span class="sunrise_title">Sunrise and sunset</span>
        <img :src="icon" alt="sunrise" class="sunrise_icon">

        <div class="sunrise_mini_icons">
            <font-awesome-icon icon="fa-solid fa-sun" />
            <font-awesome-icon icon="fa-solid fa-moon" />
        </div>

        <div class="sunrise_desc">
            <span>Sunrise</span>
            <span>Sunset</span>
        </div>

        <div class="sunrise_values">
            <span class="sunrise_values_val">{{ info ? sunriseTime : '-' }}</span>
            <span class="sunrise_values_val">{{ info ? sunsetTime : '-' }}</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.sunrise {
    &_icon {
        height: auto;
        margin: 15px 0 30px 0;
        width: 100%;
        align-self: center;
    }

    &_mini_icons {
        display: flex;
        justify-content: space-between;
    }

    &_desc {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        span {
            color: @color-gold-text;
        }
    }

    &_values {
        display: flex;
        justify-content: space-between;

        &_val {
            font-weight: 600;
        }
    }
}

@media screen and (max-width: 768px) {
    .sunrise {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
}
</style>
