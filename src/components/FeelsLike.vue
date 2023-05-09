<script setup>
const props = defineProps({
    feels: {
        type: null,
        validator: v => v === undefined || typeof v === 'number',
        required: true
    }
})
</script>

<template>
    <div class="feels_like highlights_block">
        <span class="feels_like_title">Feels like</span>
        <div class="feels_like_content">
            <div v-if="feels">
                <span class="feels_like_value">{{ Math.round(feels) }}</span>
                <span class="feels_like_measure">°C</span>
            </div>

            <span v-else class="feels_like_value">-</span>

            <div>
                <font-awesome-icon icon="fa-solid fa-smile" />
                <p class="feels_like_content_desc">How hot or cold it realy feels</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.feels_like {
    gap: 5px;

    &_content {
        display: flex;
        align-items: flex-end;
        gap: 30px;

        &_desc {
            color: @color-subtext;
            font-size: @font-small;
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
