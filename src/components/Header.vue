<template>
  <div
    class="w-full header h-16 flex items-center bg-gray-900 sticky top-0 z-50"
  >
    <a href="/#">
      <img
        class="header__logo w-24 object-contain mt-3 mx-6 my-0"
        :src="amazonLogo"
        alt="Amazon Logo"
      />
    </a>

    <div
      class="
        header__search
        flex flex-grow
        items-center
        rounded-sm
        overflow-hidden
        mr-4
      "
    >
      <input class="h-10 w-full rounded-none" type="text" />
      <Icon
        icon="bx:bx-search-alt-2"
        class="text-base p-2 h-10 w-10 bg-yellow-400"
      />
    </div>
    <div class="header__nav flex gap-3 justify-evenly items-center self-center">
      <div class="header__option flex flex-col items-center self-center">
        <div>
          <template v-if="getUser">
            <span
              class="
                span__optionLineOne
                text-white text-xs
                font-bold
                justify-self-start
              "
              >Hello, {{ getUser }}</span
            >
          </template>

          <template v-else>
            <a href="/#/login">
              <span
                class="
                  span__optionLineOne
                  text-white text-xs
                  font-bold
                  justify-self-start
                "
                >Hello, Sign in</span
              >
            </a>
          </template>
        </div>

        <span
          class="
            span__optionLineTwo
            text-white text-sm
            font-extrabold
            justify-self-start
          "
          >Account and Lists</span
        >
      </div>
      <div class="header__option flex flex-col gap-1.5">
        <span
          class="
            span__optionLineOne
            text-white text-xs
            font-bold
            justify-self-start
          "
          >Returns</span
        >
        <span
          class="
            span__optionLineTwo
            text-white text-sm
            font-extrabold
            justify-self-start
          "
          >& Orders</span
        >
      </div>
      <a href="/#/checkout">
        <div
          class="
            header__optionBasket
            flex
            justify-evenly
            items-center
            self-center
          "
        >
          <div class="cart__one pb-2">
            <Icon
              icon="fa:shopping-basket"
              class="h-8 w-8 text-white inline-block"
            />
            <div
              class="
                inline
                fixed
                right-12
                left-auto
                top-2
                p-1
                py-0
                bg-gray-900
                rounded-full
              "
            >
              <span
                class="
                  text-yellow-500 text-md
                  p-0
                  m-0
                  font-extrabold
                  text-center
                "
                >{{ cartQuantity }}</span
              >
            </div>
          </div>
          <div class="flex flex-col mr-4 ml-2 gap-1.5">
            <span class="text-transparent text-sm"> </span>
            <span class="cart__spanTwo text-white text-sm font-extrabold -mt-1"
              >Cart</span
            >
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters } from "vuex";
import { auth } from "@/firebase";

export default {
  name: "Header",
  data() {
    return {
      amazonLogo: "http://pngimg.com/uploads/amazon/amazon_PNG11.png",
    };
  },
  components: {
    Icon,
  },
  computed: {
    ...mapGetters(["cartQuantity", "getUser"]),
    userAuth: function () {
      return auth.onAuthStateChanged((authUser) => {
        console.log("The user is >>>", authUser);

        if (authUser) {
          // user just logged in or was logged in
          return authUser;
        } else {
          // the user is logged out
          return null;
        }
      });
    },
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
};
</script>

<style></style>
