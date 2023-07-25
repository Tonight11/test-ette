<template>
	<div class="form-control">
		<select :value="modelValue" @input="changeOption">
			<option v-for="option in options" :value="option" :key="option">
				{{ option }}
			</option>
		</select>
		<span>{{ label }}</span>
	</div>
</template>

<script setup>
	import { defineProps, defineEmits } from 'vue';

	defineProps(['label', 'modelValue', 'options']);
	const emit = defineEmits(['update:modelValue']);
	const changeOption = event => {
		emit('update:modelValue', event.target.value);
	};
</script>

<style></style>
