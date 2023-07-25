<template>
	<div class="booking-form">
		<UISelect
			label="Тип объекта:"
			v-model="bookData.selectedObjectType"
			:options="objectTypeOptions"
		/>
		<UISelect
			label="Тип недвижимости:"
			v-model="bookData.selectedPropertyType"
			:options="propertyTypeOptions"
		/>

		<div class="booking-form__map">
			<UIInput
				label="Введите адрес или выберите на карте"
				placeholder="Укажите адрес"
				v-model="bookData.address"
			/>
			<YandexMap
				:coordinates="coordinates"
				:detailed-controls="detailedControls"
				:controls="controls"
			>
				<YandexMarker
					:coordinates="coordinates"
					:marker-id="123"
				></YandexMarker>
			</YandexMap>
		</div>

		<div class="booking-form__type type-book">
			<div class="type-book__item">
				<UIRadio
					name="type"
					id="one"
					value="Длительно"
					v-model="bookData.rentalType"
				/>
				<label for="one">Длительно</label>
			</div>
			<div class="type-book__item">
				<UIRadio
					name="type"
					id="two"
					value="Посуточно"
					v-model="bookData.rentalType"
				/>
				<label for="two">Посуточно</label>
			</div>
		</div>

		<div class="booking-form__type type-book rooms-type">
			Комнат
			<div class="type-book__item">
				<UIRadio name="room" id="st" value="Студия" v-model="bookData.rooms" />
				<label for="st">Студия</label>
			</div>
			<div class="type-book__item">
				<UIRadio name="room" id="1" value="1" v-model="bookData.rooms" />
				<label for="1">1</label>
			</div>
			<div class="type-book__item">
				<UIRadio name="room" id="2" value="2" v-model="bookData.rooms" />
				<label for="2">2</label>
			</div>
			<div class="type-book__item">
				<UIRadio name="room" id="3" value="3" v-model="bookData.rooms" />
				<label for="3">3</label>
			</div>
			<div class="type-book__item">
				<UIRadio name="room" id="4" value="4+" v-model="bookData.rooms" />
				<label for="4">4+</label>
			</div>
		</div>
		<UIInput placeholder="Общая площадь м2" v-model="bookData.area" />
		<UIInput placeholder="Этаж:" v-model="bookData.floor" />
		<UIInput placeholder="Количество этажей:" v-model="bookData.totalFloors" />
		<UIInput placeholder="Цена за месяц:" v-model="bookData.price" />
		<UIInput placeholder="Комиссия:" v-model="bookData.commission" />

		<div class="form-group">
			<textarea
				id="description"
				v-model="bookData.description"
				rows="4"
				placeholder="Расскажите о недвижимости, собственниках, соседях, транспортной доступности и т.д."
			></textarea>
		</div>

		<div class="form-group">
			<UIFileUpload label="Фото" v-model="bookData.photo" />
		</div>
		<small class="error" style="color: red" v-if="formErrors.length">{{
			formErrors[0]
		}}</small>
		<div class="booking-form__bot">
			<button class="btn btn-main" @click="nextStep">Далее</button>
		</div>
	</div>
</template>

<script setup>
	import UISelect from '@/components/UI/UISelect.vue';
	import UIInput from '@/components/UI/UIInput.vue';
	import UIFileUpload from '@/components/UI/UIFileUpload.vue';
	import UIRadio from '@/components/UI/UIRadio.vue';
	import { useBookStore } from '@/stores/book';
	import { storeToRefs } from 'pinia';
	import { ref } from 'vue';
	import { yandexMap } from 'vue-yandex-maps';
	import { useGetAddress } from '@/composables/address';

	const coordinates = ref([55, 35]);
	const controls = ['fullscreenControl'];
	const detailedControls = {
		zoomControl: { position: { right: 10, top: 50 } },
	};
	const { validateForm, submitBookData } = useBookStore();
	const { bookData, formErrors } = storeToRefs(useBookStore());
	const objectTypeOptions = ref(['Жилье', 'Магазин', 'Отель']);
	const propertyTypeOptions = ref(['Квартира', 'Дом', 'Яхта']);

	function nextStep() {
		if (validateForm()) {
			submitBookData();
		}
	}

	useGetAddress(coordinates);
</script>

<style>
	.booking-form {
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	.next-button {
		display: block;
		width: 100%;
		padding: 10px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 3px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.next-button:hover {
		background-color: #0056b3;
	}

	.type-book {
		display: inline-flex;
		align-items: center;
		background-color: #f5f5f5;
		border-radius: 8px;
		padding: 5px;
		max-width: 250px;
	}

	.rooms-type {
		max-width: 100%;
		gap: 10px;
	}

	input[type='radio'] {
		display: none;
	}
	.type-book__item {
		flex: 1;
	}
	.type-book__item label {
		width: 100%;

		text-align: center;
		display: block;
		padding: 15px;
		color: #535353;
		border-radius: 8px;
		cursor: pointer;
		font-size: 15px;
		font-weight: 500;
		white-space: nowrap;
		position: relative;
		transition: 0.4s ease-in-out 0s;
		background-color: transparent;
	}
	input[type='radio']:checked ~ label {
		background-color: #ffffff;
		color: #3c83f8;
	}

	.yandex-container {
		margin-top: 20px;
		height: 300px;
		max-width: 500px;
	}
</style>
