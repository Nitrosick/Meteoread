<script setup>
import icon from '../assets/images/humidity.png'

const props = defineProps({
    value: {
        type: null,
        validator: v => v === undefined || typeof v === 'number',
        required: true
    }
})
</script>

<template>
    <div class="block humidity">
        <img :src="icon" alt="humidity" class="humidity_icon">
        <div class="humidity_info">
            <span class="humidity_info_title">Humidity: {{ value ? value + '%' : '-' }}</span>
            <p class="humidity_info_desc">
                Humidity is a concentration of water vapor present in the air.<br />
                Water vapor, the gaseous state of water, is generally invisible to the human eye.<br /><br />
                The same amount of water vapor results in higher relative humidity in cool air then warm air.
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.humidity {
    display: flex;
    align-items: center;
    gap: 30px;
    grid-column: 3 / 5;

    &_icon {
        height: 75px;
        width: 75px;
    }

    &_info {
        &_desc {
            font-size: @font-small;
            color: @color-subtext;
            margin: 5px 0 15px 0;
        }
    }
}

@media screen and (max-width: 1200px) {
    .humidity {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
}

@media screen and (max-width: 480px) {
    .humidity {
        gap: 15px;
    }
}
</style>
