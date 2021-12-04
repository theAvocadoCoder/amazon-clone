<template>
  <div
    class="register flex flex-col items-center justify-center h-screen bg-white"
  >
    <a href="/#">
      <img
        class="register__logo mt-5 mb-5 object-contain w-28 my-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />
    </a>

    <div
      class="
        register__container
        w-80
        flex flex-col flex-none
        rounded
        border border-solid border-gray-200
        p-5
      "
    >
      <h1 class="text-4xl font-medium mb-5">Sign Up</h1>

      <form method="POST" action="" v-on:submit.prevent="registerUser()">
        <h5 class="mb-1">First Name</h5>
        <input
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="text"
          v-model="firstName"
        />

        <h5 class="mb-1">Last Name</h5>
        <input
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="text"
          v-model="lastName"
        />

        <h5 class="mb-1">E-mail</h5>
        <input
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="text"
          v-model="email"
        />

        <h5 class="mb-1">Password</h5>
        <input
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="password"
          v-model="password"
        />

        <h5 class="mb-1">Confirm Password</h5>
        <input
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="password"
          v-model="confirmPassword"
        />

        <button
          class="
            register__signUpButton
            bg-yellow-button
            rounded-sm
            w-full
            h-8
            border border-solid
            mt-3
            border-yellow-border
          "
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <p class="mt-4 text-xs">
        By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use &
        Sale. Please see our Privacu Notice, our Cookies Norice and our
        Interest-Based Ads Notice.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    registerUser: function () {
      this.$store.dispatch("addNewUser", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
    },
  },
};
</script>