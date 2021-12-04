<template>
  <div
    class="login flex flex-col items-center justify-center h-screen bg-white"
  >
    <a href="/#">
      <img
        class="login__logo mt-5 mb-5 object-contain w-28 my-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />
    </a>

    <div
      class="
        login__container
        w-80
        flex flex-col flex-none
        rounded
        border border-solid border-gray-200
        p-5
      "
    >
      <h1 class="text-4xl font-medium mb-5">Sign-in</h1>

      <form method="" action="/login" v-on:submit.prevent="logInUser()">
        <h5 class="mb-1">E-mail</h5>
        <input
          class="
            h-8
            mb-3
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          v-model="email"
          type="text"
        />

        <h5 class="mb-1">Password</h5>
        <input
          class="
            h-8
            mb-3
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          v-model="password"
          type="password"
        />

        <button
          class="
            login__signInButton
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
          Sign In
        </button>
      </form>

      <p class="mt-4 text-xs">
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
        Sale. Please see our Privacu Notice, our Cookies Norice and our
        Interest-Based Ads Notice.
      </p>
      <a href="/#/register">
        <button
          class="
            login__registerButton
            bg-gray-300
            rounded-sm
            w-full
            h-8
            border border-solid
            mt-3
            border-gray-400
          "
        >
          Create your Amazon Account
        </button>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        email: "",
        password: "",
      }
    },
    methods: {
      logInUser: function () {
        this.$store.dispatch('logUserIn', {email: this.email, password: this.password});
      }
    }
  }
</script>