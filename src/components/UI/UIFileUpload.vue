<template>
	<div class="form-control img-form">
		<input id="photo" type="file" accept="image/*" @change="handleFileChange" />
		<div class="img-form__text">{{ label }}</div>
		<div class="img-form__desc">
			Первое фото будет отображаться в результатах поиска, выберите наиболее
			удачное. Вы можете загрузить до 20 фотографий в формате JPG или PNG.
			Максимальный размер фото — 25MB.
		</div>

		<label for="photo">
			<img src="../../assets/img/photo.png" alt="" />
		</label>
		<img v-if="imageUrl" :src="imageUrl" alt="Выбранное изображение" />
	</div>
</template>

<script setup>
	import { defineProps, defineEmits, ref } from 'vue';

	const { label } = defineProps(['label']);
	const emit = defineEmits();
	const imageUrl = ref(null);

	const handleFileChange = event => {
		const file = event.target.files[0];

		imageUrl.value = file ? URL.createObjectURL(file) : null;
		emit('update:modelValue', file.name);
	};
</script>

<style scoped>
	.img-form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.img-form__text {
		font-weight: bold;
	}
	.img-form__desc {
		margin-bottom: 20px;
	}
	.img-form input {
		display: none;
	}
	.img-form label {
		cursor: pointer;
	}
</style>
