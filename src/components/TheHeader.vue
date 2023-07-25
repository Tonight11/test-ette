<script setup>
	import IconsBurger from './icons/IconsBurger.vue';
</script>

<template>
	<header class="header">
		<div class="header__burger">
			<IconsBurger />
		</div>
		<div class="header__avatar">Баястан</div>
	</header>
</template>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		border-radius: 0px 0px 24px 24px;
		background: #edf3ff;
		box-shadow: 0px 5px 11px 0px rgba(140, 178, 240, 0.13);
	}
	.header__burger {
		cursor: pointer;
	}

	.header__avatar {
		font-size: 14px;
		font-weight: 600;
	}
</style>
