<script setup>
import Navbar from "./components/Home/Nav/Navbar.vue";
import Logo from "./components/Home/Logo/Logo.vue";
import Footer from "./layout/Footer/Footer.vue"
import ButtonCv from "./components/Button/ButtonCv.vue"
import ButtonBox from "./components/Home/Box/ButtonBox.vue";



</script>

<template>
  <div class="bg-[color:#111111] max-w-screen-2xl flex flex-col mx-auto justify-center">
    <Navbar />
    <Logo />
    <ButtonBox />
    <ButtonCv />
    <Footer />
  </div>
</template>

<style scoped>
</style>
