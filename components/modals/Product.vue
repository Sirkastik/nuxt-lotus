<template>
	<div class="product-modal">
		<span class="close pointer" @click="$emit('close')">
			<fa-icon icon="arrow-left" />
		</span>
		<span class="shop pointer" @click="goToShop">
			<fa-icon icon="store" />
		</span>
		<span class="reviews pointer" @click="goToReviews">
			<fa-icon icon="comment" />
		</span>
		<span class="like pointer" @click.prevent="addToWishlist">
			<fa-icon icon="heart" />
		</span>
		<div class="img">
			<img
				:src="require(`@/assets/img/${product.name}.webp`)"
				:alt="`${product.name}`"
			/>
		</div>
		<div class="data">
			<div class="title">{{ product.name }}</div>
			<div class="categories">
				<span v-for="cat in product.category" :key="cat">{{ cat }}</span>
			</div>
			<p>
				{{ product.description }}
			</p>

			<div class="chooseQuantity">
				<span class="price"> Ksh.{{ formatPrice(product.price) }} </span>
				<span class="quantity">
					<fa-icon icon="minus" @click="minus" />
					<span>{{ quantity }}</span>
					<fa-icon icon="plus" @click="add" />
				</span>
			</div>
			<button v-if="inCart" class="add" @click="$router.push('/cart')">
				<span class="cart pointer">
					<fa-icon icon="shopping-cart" />
				</span>
				<span>Go to cart</span>
				<span class="cart pointer">
					<fa-icon icon="arrow-right" />
				</span>
			</button>
			<button
				v-else
				class="add"
				:class="{ disabled: !quantity }"
				@click="addToCart"
			>
				<span class="cart pointer">
					<fa-icon icon="cart-plus" />
				</span>
				<span>Add to cart</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ["product"],

	data() {
		return {
			quantity: 0,
			cart: null,
			wishlist: null,
		};
	},

	created() {
		this.cart = JSON.parse(localStorage.getItem("cart"));
		this.wishlist = JSON.parse(localStorage.getItem("wishlist"));
		if (this.inCart) {
			const [cart] = this.cart.filter((item) => item.id === this.product.id);
			this.quantity = cart.quantity;
		}
	},

	computed: {
		inCart() {
			return this.cart && this.cart.some((item) => item.id === this.product.id);
		},
		inWishlist() {
			return (
				this.wishlist &&
				this.wishlist.some((item) => item.id === this.product.id)
			);
		},
		newProduct() {
			return { ...this.product, quantity: this.quantity };
		},
	},

	methods: {
		formatPrice(value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		add() {
			this.quantity += 1;
			if (this.inCart) {
				this.updateCart();
			}
		},

		minus() {
			this.quantity -= 1;
			if (this.inCart) {
				this.updateCart();
			}
		},

		updateCart() {
			const cart = this.cart.map((item) => {
				if (item.id === this.product.id)
					return { ...item, quantity: this.quantity };
				return item;
			});
			localStorage.setItem("cart", JSON.stringify(cart));
		},

		addToCart() {
			const cart = this.cart ? this.addItem() : [this.newProduct];
			localStorage.setItem("cart", JSON.stringify(cart));
		},

		addItem() {
			let cart = this.cart;
			if (this.inCart) return cart;
			cart.push(this.newProduct);
			return cart;
		},

		addToWishlist(product) {
			console.log(product);
		},

		goToShop() {
			console.log("Going to shop...");
		},
		goToReviews() {
			console.log("Going to reviews...");
		},
	},
};
</script>

<style scoped>
.product-modal {
	position: fixed;
	inset: 0;
	z-index: 1000;
	background: var(--bg);
	animation: slide-up 0.5s ease-in-out;
}

@keyframes slide-up {
	0% {
		opacity: 0;
		transform: scale(0.2);
	}
	100% {
		transform: scale(1);
	}
	0% {
		opacity: 0;
		transform: scale(0.2);
	}
}

.close,
.shop,
.like,
.reviews {
	position: absolute;
	left: 0.75rem;
	z-index: 3;
	display: grid;
	place-content: center;
	border-radius: 50%;
	opacity: 0.5;
}

.shop,
.like,
.reviews {
	width: 1.85rem;
	height: 1.85rem;
	font-size: 0.85em;
	background: var(--main);
	color: var(--bg);
}

.close {
	padding-left: 0.3rem;
	font-size: 1.25rem;
	top: 1rem;
}

.shop {
	top: 15vh;
}

.reviews {
	top: 30vh;
}

.like {
	left: 4.25rem;
	top: calc(50vh - 2.6rem);
}

.img {
	height: 50vh;
	width: calc(100vw - 3.5rem);
	border-bottom-left-radius: 10%;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.155);
	margin-left: auto;
	overflow: hidden;
	position: relative;
}

.img > img {
	position: absolute;
	bottom: 0;
	z-index: -1;
	max-width: 100vw;
	min-height: 100%;
}

.data {
	padding: 1rem 1.3rem;
}

.title {
	font-size: 1.25em;
	text-transform: capitalize;
	font-weight: bold;
}

.categories {
	font-weight: 600;
	opacity: 0.75;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.categories > span {
	background: var(--main);
	color: var(--bg);
	opacity: 0.75;
	padding: 0 0.75rem;
	border-radius: 5rem;
}

.data p {
	opacity: 0.5;
	margin-block: 0.25rem;
}

.chooseQuantity {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-block: 0.5rem;
}

.price {
	font-weight: bold;
	font-size: 1.25em;
}

.quantity {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
}

.quantity > * {
	cursor: pointer;
	opacity: 0.5;
}

.quantity > span {
	cursor: default;
	opacity: 0.8;
	font-weight: bold;
}

.add {
	cursor: pointer;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: 5rem;
	background: var(--main);
	color: var(--bg);
	font-weight: bold;
	padding: 0.5rem 2.5rem;
	margin-block: 1rem;
}

.add.disabled {
	pointer-events: none;
	opacity: 0.5;
}
</style>
