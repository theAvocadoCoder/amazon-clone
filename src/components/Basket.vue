<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add items to your basket</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - <CurrencyInput
                    v-model="product.price" 
                    :options="{ 
                        currency: 'USD', 
                        precision: 2,
                        hideCurrencySymbolOnFocus: false,
                        hideGroupingSeparatorOnFocus: false,
                        hideNegligibleDecimalDigitsOnFocus: false
                    }" 
                /> x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: <CurrencyInput
                    v-model="total" 
                    :options="{ 
                        currency: 'USD', 
                        precision: 2,
                        hideCurrencySymbolOnFocus: false,
                        hideGroupingSeparatorOnFocus: false,
                        hideNegligibleDecimalDigitsOnFocus: false
                    }" 
                /></p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">
        Checkout
      </button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
    import CurrencyInput from "@/components/CurrencyInput"
    import { mapGetters, mapState } from "vuex";

    export default {
        computed: {
            ...mapState({
                checkoutStatus: state => state.cart.checkoutStatus
            }),
            ...mapGetters("basket", {
                products: "basketProducts",
                total: "Basket Total Price"
            })
        },
        methods: {
            checkout (products) {
                this.$store.dispatch("basket/checkout", products)
            }
        },
        components: { CurrencyInput }
    };
</script>
