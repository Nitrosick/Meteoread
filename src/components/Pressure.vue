<script setup>
import { computed } from 'vue'
import icon from '../assets/images/barometer.png'

const props = defineProps({
    pressure: {
        type: null,
        validator: v => v === undefined || typeof v === 'number',
        required: true
    }
})

const mmPressure = computed(() => Math.round(props.pressure * 0.750062))
</script>

<template>
    <div class="pressure highlights_block">
        <span class="pressure_title">Pressure</span>
        <img :src="icon" alt="barometer" class="pressure_icon">
        <div class="pressure_value">
            <span class="pressure_value_val">{{ pressure ? mmPressure : '-' }}</span>
            <span v-if="pressure" class="pressure_value_meas">mm</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.pressure {
    gap: 30px;

    &_icon {
        height: 120px;
        width: 185px;
        align-self: center;
    }

    &_value {
        align-self: center;

        &_val {
            font-size: @font-large;
            font-weight: 600;
        }

        &_meas {
            color: @color-subtext;
        }
    }
}

@media screen and (max-width: 768px) {
    .pressure {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        gap: 15px;

        &_icon {
            height: auto;
            width: 60%;
        }
    }
}
</style>
