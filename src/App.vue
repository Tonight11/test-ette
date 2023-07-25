<script setup>
	import BookingForm from './components/BookingForm.vue';
	import TheHeader from './components/TheHeader.vue';
</script>

<template>
	<TheHeader />
	<main class="book">
		<h1 class="book__title title">Добавление объекта. Аренда</h1>
		<BookingForm />
	</main>
</template>

<style scoped>
	.book {
		padding: 20px;
	}
</style>
