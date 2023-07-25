import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useBookStore = defineStore('book', () => {
	const bookData = ref({
		selectedObjectType: '',
		selectedPropertyType: '',
		rentalType: '',
		address: '',
		rooms: '',
		area: '',
		floor: '',
		totalFloors: '',
		price: '',
		commission: '',
		description: '',
		photo: null,
	});

	const clearBookData = () => {
		bookData.value.selectedObjectType = '';
		bookData.value.selectedPropertyType = '';
		bookData.value.rentalType = '';
		bookData.value.address = '';
		bookData.value.rooms = '';
		bookData.value.area = '';
		bookData.value.floor = '';
		bookData.value.totalFloors = '';
		bookData.value.price = '';
		bookData.value.commission = '';
		bookData.value.description = '';
		bookData.value.photo = null;
	};

	const submitBookData = () => {
		const jsonData = {
			selectedObjectType: bookData.value.selectedObjectType,
			selectedPropertyType: bookData.value.selectedPropertyType,
			rentalType: bookData.value.rentalType,
			address: bookData.value.address,
			rooms: bookData.value.rooms,
			area: bookData.value.area,
			floor: bookData.value.floor,
			totalFloors: bookData.value.totalFloors,
			price: bookData.value.price,
			commission: bookData.value.commission,
			description: bookData.value.description,
			photo: bookData.value.photo,
		};

		alert(JSON.stringify(jsonData, null, 2));
	};

	return {
		bookData,
		clearBookData,
		submitBookData,
	};
});
