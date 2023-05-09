<script setup>
import Cloudiness from './Cloudiness.vue';
import FeelsLike from './FeelsLike.vue';
import Gusts from './Gusts.vue';
import Pressure from './Pressure.vue';
import Sunrise from './Sunrise.vue';
import Wind from './Wind.vue';

const props = defineProps({
    info: {
        type: [Object, null],
        required: true
    }
})
</script>

<template>
    <div class="block highlights">
        <h1 class="highlights_title">Today's Highlights</h1>
        <div class="highlights_content">
            <Wind :wind="info?.wind" />
            <Pressure :pressure="info?.main.pressure" />
            <Sunrise :info="info?.sys" :timezone="info?.timezone" />
            <Gusts :gust="info?.wind.gust" />
            <FeelsLike :feels="info?.main.feels_like" />
            <Cloudiness :cloudiness="info?.clouds.all" />
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';
.highlights {
    grid-column: 2 / 5;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &_title {
        font-weight: 400;
    }

    &_content {
        flex-grow: 1;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    &_block {
        background-color: @color-element-background;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

@media screen and (max-width: 1200px) {
    .highlights {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
    }
}

@media screen and (max-width: 992px) {
    .highlights {
        &_content {
            gap: 5px;
        }
    }
}

@media screen and (max-width: 768px) {
    .highlights {
        &_content {
            grid-template-rows: repeat(3, auto);
            grid-template-columns: repeat(2, 1fr);
        }

        &_block {
            padding: 15px;
        }
    }
}

@media screen and (max-width: 480px) {
    .highlights {
        &_content {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
