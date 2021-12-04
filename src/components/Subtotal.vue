<template>
  <div
    class="
      subtotal
      flex flex-col
      justify-space-betwen
      w-96
      h-32
      p-5
      bg-gray-200
      border border-solid border-gray-100
      rounded-md
    "
  >
    <p>
      Subtotal ({{ cartQuantity }} items):
      <strong>
        <CurrencyInput
          class=""
          v-model="subtotal"
          :options="{
            currency: 'USD',
            precision: 2,
            hideCurrencySymbolOnFocus: false,
            hideGroupingSeparatorOnFocus: false,
            hideNegligibleDecimalDigitsOnFocus: false,
          }"
        />
      </strong>
    </p>
    <small class="subtotal__gift flex items-center">
      <input class="mr-2" type="checkbox" /> This order contains a gift
    </small>

    <button
      class="
        bg-yellow-button
        rounded-sm
        w-full
        h-12
        border border-solid
        mt-3
        border-yellow-border
        text-gray-900
      "
    >
      Proceed to Checkout
    </button>
  </div>
</template>

<script>
import CurrencyInput from "@/components/CurrencyInput";
import { mapGetters } from "vuex";

export default {
  name: "Subtotal",
  computed: {
    ...mapGetters(["cartTotal", "cartQuantity"]),
    subtotal: function () {
      return Number(this.cartTotal);
    },
  },
  components: { CurrencyInput },
};
</script>