<script setup>
const props = defineProps({
    gust: {
        type: null,
        validator: v => v === undefined || typeof v === 'number',
    }
})
</script>

<template>
    <div class="gusts highlights_block">
        <span class="gusts_title">Wind gusts</span>
        <div class="gusts_content">
            <div v-if="gust">
                <span class="gusts_value">{{ gust.toFixed(1) }}</span>
                <span class="gusts_measure">m/s</span>
            </div>

            <span v-else class="gusts_value">-</span>

            <div>
                <font-awesome-icon icon="fa-solid fa-wind" />
                <p class="gusts_content_desc">Learn <a href="https://en.wikipedia.org/wiki/Wind_gust" target="_blank">more</a> about gusts</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.gusts {
    gap: 5px;

    &_content {
        display: flex;
        align-items: flex-end;
        gap: 30px;

        &_desc {
            color: @color-subtext;
            font-size: @font-small;

            a {
                color: @color-subtext;
                font-size: @font-small;
            }
        }
    }

    &_value {
        font-size: @font-large;
        font-weight: 600;
    }

    &_measure {
        color: @color-subtext;
    }
}
</style>
