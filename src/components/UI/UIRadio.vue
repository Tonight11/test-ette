<template>
	<input
		type="radio"
		:value="value"
		:checked="isChecked"
		@change="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script setup>
	import { computed, defineProps } from 'vue';

	const props = defineProps(['value', 'modelValue']);
	defineEmits(['update:modelValue']);

	const isChecked = computed(() => {
		return props.modelValue === props.value;
	});
</script>
