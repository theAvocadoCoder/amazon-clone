<template>
  <div
    class="
      checkoutProduct
      flex flex-row
      bg-gray-100
      mt-6
      z-10
      p-5
      h-full
      justify-around
    "
  >
    <img
      class="checkoutProduct__image bg-red-200 p-0 w-36 object-contain mr-8"
      :src="product.image"
      alt="image"
    />
    <div class="checkoutProduct__info flex flex-col max-w-48 h-24">
      <p class="checkoutProduct__title">{{ product.title }}</p>
      <p class="checkoutProduct__price">
        <small>$</small>
        <strong>{{ Number(product.price) }}</strong>
      </p>
      <p class="checkoutProduct__rating flex">{{ ratingCalc() }}</p>
      <p class="checkoutProduct__quantity mt-1">{{ quantity }}</p>
      <button
        v-on:click="removeFromCart()"
        class="
          bg-yellow-button
          border border-solid border-yellow-border
          w-24
          mt-2.5
          p-1
          text-button-text-black text-xs
        "
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutProduct",
  methods: {
    ratingCalc: function () {
      const rating_ = this.product.rating;
      let stars = "";

      for (let i = 0; i < rating_; i++) {
        stars += "⭐";
      }

      return stars;
    },
    removeFromCart: function () {
      this.$store.dispatch("removeCartItem", this.product);
    },
  },
  props: ["product", "quantity"],
};
</script>