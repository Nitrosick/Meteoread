<script setup>
import icon from '../assets/images/compass.png'

const props = defineProps({
    coords: {
        type: null,
        validator: v => v === undefined || typeof v === 'object',
        required: true
    }
})
</script>

<template>
    <div class="block coords">
        <img :src="icon" alt="compass" class="coords_icon">
        <div class="coords_info">
            <span class="coords_info_title">Longitude: {{ coords ? coords.lat : '-' }}</span>
            <p class="coords_info_desc">Longitude measures distance east or west of the prime meridian.</p>
            <span class="coords_info_title">Latitude: {{ coords ? coords.lon : '-' }}</span>
            <p class="coords_info_desc">Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator.</p>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.coords {
    display: flex;
    align-items: center;
    gap: 30px;
    grid-column: 1 / 3;

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
    .coords {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
}

@media screen and (max-width: 480px) {
    .coords {
        gap: 15px;
    }
}
</style>
