<template>
  <img
    class="home__image w-full -z-1 -mb-150 gradient-mask-b-0"
    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
    alt=""
  />
  <div
    class="
      home__container
      flex flex-col
      gap-2
      justify-center
      ml-auto
      mr-auto
      max-w-screen-2xlp
    "
  >
    <div class="home__row flex flex-row gap-1.5 z-10 ml-1.5 mr-1.5">
      <Product :product="productItems[0]" />
      <Product :product="productItems[1]" />
    </div>

    <div class="home__row flex flex-row gap-1.5 z-10 ml-1.5 mr-1.5">
      <Product :product="productItems[2]" />
      <Product :product="productItems[3]" />
      <Product :product="productItems[4]" />
    </div>
    <div class="home__row flex flex-row gap-1.5 z-10 ml-1.5 mr-1.5">
      <Product :product="productItems[5]" />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import { mapGetters } from "vuex";
export default {
  name: "HomeComponent",
  computed: {
    ...mapGetters(["productItems"]),
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  components: { Product },
};
</script>
