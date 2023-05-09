<script setup>
const props = defineProps({
    cloudiness: {
        type: null,
        validator: v => v === undefined || typeof v === 'number',
        required: true
    }
})
</script>

<template>
    <div class="cloudiness highlights_block">
        <span class="cloudiness_title">Cloudiness</span>
        <div class="cloudiness_content">
            <div v-if="cloudiness">
                <span class="cloudiness_value">{{ cloudiness }}</span>
                <span class="cloudiness_measure">%</span>
            </div>

            <span v-else class="cloudiness_value">-</span>

            <div>
                <font-awesome-icon icon="fa-solid fa-cloud" />
                <p class="cloudiness_content_desc">The sky fraction obscured by clouds</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.cloudiness {
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
