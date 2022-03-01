<template>
	<div id="bottom">
		<button class="btn pointer" @click="navigate('/')">
			<fa-icon icon="store-alt" />
		</button>
		<button class="btn pointer" @click="navigate('/categories')">
			<fa-icon icon="th-large" />
		</button>
		<button class="btn pointer">
			<fa-icon icon="heart" />
		</button>
		<button class="btn pointer" @click="navigate('/cart')">
			<fa-icon icon="shopping-cart" />
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		navigate(route) {
			this.$router.push(route);
		},
	},
};
</script>

<style scoped>
#bottom {
	height: 3rem;
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 1rem;

	position: fixed;
	inset: auto 0 0 0;
	z-index: 10;
	background: white;
	box-shadow: var(--revShadow);
	animation: slide-up 1.25s ease both;
}

#bottom button {
	flex: 1;
	width: 100%;
	height: 100%;
	text-align: center;
}

@keyframes slide-up {
	from {
		transform: translateY(150%);
	}
	to {
		transform: translateY(0);
	}
}
</style>
