<script setup>
import icon from '../assets/images/equalizer.png'

const props = defineProps({
    wind: {
        type: [Object, null],
        required: false
    }
})
</script>

<template>
    <div class="wind highlights_block">
        <span class="wind_title">Wind</span>
        <img :src="icon" alt="equalizer" class="wind_icon">
        <div class="wind_values">
            <div>
                <span class="wind_values_val">{{ wind ? wind.speed.toFixed(1) : '-' }}</span>
                <span v-if="wind" class="wind_values_meas">m/s</span>
            </div>
            <div>
                <span class="wind_values_val">{{ wind ? wind.deg : '-' }}</span>
                <span v-if="wind" class="wind_values_meas">deg</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.wind {
    gap: 30px;

    &_icon {
        height: 120px;
        width: 120px;
        align-self: center;
    }

    &_values {
        display: flex;
        gap: 15px;
        justify-content: space-between;

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
    .wind {
        gap: 15px;

        &_icon {
            height: auto;
            width: 45%;
        }
    }
}
</style>
