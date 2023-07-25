<template>
	<div class="form-control">
		<label v-if="label">{{ label }}</label>
		<input
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<script setup>
	import { defineProps, defineEmits } from 'vue';

	defineProps(['label', 'modelValue', 'placeholder']);
</script>

<style>
	.form-control {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.form-control input,
	.form-control select,
	textarea {
		width: 100%;
		max-width: 300px;
		padding: 15px 20px;
		outline: none;
		background: transparent;
		border-radius: 12px;
		color: #212121;
		border: 1px solid #d6d6d6;
		font-size: 1em;
	}

	.form-control span {
		position: absolute;
		z-index: 2;
		left: 0;
		font-size: 0.7em;
		background-color: white;
		transform: translateX(14px) translateY(-7.5px);
		padding: 0 6px 1px 5px;
		border-radius: 2px;
		letter-spacing: 1px;
		border: 1px solid #212121;
		color: #212121;
	}
</style>
