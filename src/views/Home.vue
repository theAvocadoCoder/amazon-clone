<template>
  <div  class="home bg-amazon-bg h-full">
    <!-- Header -->
    <Header />
    <!-- Home Container -->
    <HomeComponent />

  </div>
</template>

<script>
import Header from '@/components/Header'
import HomeComponent from '@/components/HomeComponent'
export default {
  name: 'Home',
  components: { Header, HomeComponent },
}
</script>
