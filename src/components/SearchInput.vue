<script setup>
const props = defineProps({
    searchValue: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['update:searchValue', 'search'])
</script>

<template>
    <div class="search_input">
        <input
            class="search_input_field"
            type="text"
            placeholder="City name..."
            autofocus
            :value="searchValue"
            @input="$emit('update:searchValue', $event.target.value)"
            @keyup.enter="$emit('search')"
        />
        <font-awesome-icon
            class="search_input_icon"
            icon="fa-solid fa-search"
        />
    </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/variables.less';

.search_input {
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: @color-element-background;
    border-radius: 10px;
    padding: 0 15px;

    &_field {
        width: 100%;
        flex-grow: 1;
        padding: 15px 0;
    }

    &_icon {
        color: @color-main-text;
    }
}
</style>
