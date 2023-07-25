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
	const formErrors = ref([]);

	function validateForm() {
		formErrors.value = [];

		if (!bookData.value.selectedObjectType) {
			formErrors.value.push('Выберите тип объекта');
		}

		if (!bookData.value.selectedPropertyType) {
			formErrors.value.push('Выберите тип недвижимости');
		}

		if (!bookData.value.rentalType) {
			formErrors.value.push('Выберите тип аренды');
		}

		if (!bookData.value.rooms) {
			formErrors.value.push('Укажите количество комнат');
		}

		if (!bookData.value.area) {
			formErrors.value.push('Укажите площадь');
		}

		if (!bookData.value.floor) {
			formErrors.value.push('Укажите этаж');
		}
		if (!bookData.value.totalFloors) {
			formErrors.value.push('Укажите кол-во этаж');
		}
		if (!bookData.value.price) {
			formErrors.value.push('Укажите цену');
		}
		if (!bookData.value.commission) {
			formErrors.value.push('Укажите коммисию');
		}
		if (!bookData.value.photo) {
			formErrors.value.push('Укажите фото');
		}
		return formErrors.value.length === 0;
	}

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
		clearBookData();
	};

	return {
		bookData,
		submitBookData,
		validateForm,
		formErrors,
	};
});
