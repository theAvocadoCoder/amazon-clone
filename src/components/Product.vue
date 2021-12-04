<template>
  <div
    v-if="product"
    class="
      product
      flex flex-col
      bg-white
      z-10
      items-center
      justify-end
      m-2.5
      p-5
      w-full
      max-h-96
      min-w-24
    "
  >
    <div class="product__info w-full h-24 mb-4">
      <p>{{ product.title }}</p>
      <p class="product__price mt-1">
        <small>$</small>
        <strong>{{ Number(product.price) }}</strong>
      </p>
      <div class="product__rating flex">
        <p>{{ ratingCalc() }}</p>
      </div>
    </div>
    <img
      class="max-h-48 w-full object-contain mb-4"
      :src="product.image"
      alt="image"
    />
    <button
      v-on:click="addToCart()"
      class="
        bg-yellow-button
        border border-solid border-yellow-border
        mt-2.5
        p-1
        text-button-text-black text-xs
      "
    >
      Add to Basket
    </button>
  </div>
</template>

<script>
export default {
  name: "Product",
  methods: {
    ratingCalc: function () {
      const rating_ = this.product.rating;
      let stars = "";

      for (let i = 0; i < rating_; i++) {
        stars += "⭐";
      }

      return stars;
    },
    addToCart: function () {
      this.$store.dispatch("addCartItem", this.product);
    },
  },
  props: ["product"],
};
</script>
