<template>
  <div class="checkout flex p-5 max-content">
    <div class="checkout_left">
      <img
        class="checkout__ad w-full mb-2"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />

      <div>
        <h2
          class="
            checkout__title
            text-2xl
            font-bold
            mr-2
            p-2
            border-b border-solid border-gray-300
          "
        >
          Your Shopping Basket
        </h2>

        <template v-for="item in cartItems" :key="item.id">
          <CheckoutProduct :product="item" :quantity="item.quantity" />
        </template>
      </div>
    </div>
    <div class="checkout_right">
      <Subtotal />
    </div>
  </div>
</template>

<script>
import Subtotal from "@/components/Subtotal";
import CheckoutProduct from "@/components/CheckoutProduct";
import { mapGetters } from "vuex";
export default {
  name: "CheckoutComponent",
  components: { Subtotal, CheckoutProduct },
  computed: {
    ...mapGetters(["cartItems"]),
  },
};
</script>  