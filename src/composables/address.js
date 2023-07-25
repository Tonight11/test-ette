import { useBookStore } from '@/stores/book';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

export function useGetAddress(coord) {
	const { bookData } = storeToRefs(useBookStore());
	let timer;
	let waitSuggTimer = 2000;
	watch(
		() => bookData.value.address,
		(newValue, oldValue) => {
			clearTimeout(timer);
			timer = setTimeout(async () => {
				await HTTPRequest(newValue);
			}, waitSuggTimer);
		}
	);

	const url = import.meta.env.VITE_URL;
	const token = import.meta.env.VITE_TOKEN;
	const HTTPRequest = async query => {
		const res = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Token ' + token,
			},
			body: JSON.stringify({ query: query }),
		});
		const { suggestions } = await res.json();
		const nearestStreet = suggestions[0];
		bookData.value.address = nearestStreet.value;
		coord.value = [+nearestStreet.data.geo_lat, +nearestStreet.data.geo_lon];
	};
}
