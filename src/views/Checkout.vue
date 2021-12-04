<template>
  <div class="bg-white h-full">
    <div>
      <Header />
      <CheckoutComponent />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import CheckoutComponent from "@/components/CheckoutComponent";
export default {
  name: "Checkout",
  components: { Header, CheckoutComponent },
};
</script>
