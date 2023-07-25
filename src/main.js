import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import YmapPlugin from 'vue-yandex-maps';
import App from './App.vue';

const app = createApp(App);

const settings = {
	apiKey: 'b1bf2182-fcb0-42f6-8d37-c196fb54a377',
	lang: 'ru_RU', // Используемый язык
	coordorder: 'latlong', // Порядок задания географических координат
	debug: false, // Режим отладки
	version: '2.1', // Версия Я.Кар
};

app.use(YmapPlugin, settings);
app.use(createPinia());

app.mount('#app');
