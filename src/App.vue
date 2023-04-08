<script setup>
import Banner from "./components/banner/Banner.vue"
import Navbar from "./components/Home/Nav/Navbar.vue";
import Logo from "./components/Home/Logo/Logo.vue";
import Footer from "./layout/Footer/Footer.vue"
import ButtonBox from "./components/Home/Box/ButtonBox.vue";
import Download from "./components/Home/Download/Download.vue";



</script>

<template>
  
  <div class=" bg-[color:#111111] max-w-screen-4xl w-full flex flex-col mx-auto items-center">
    <Banner class="z-10"/>
    <Navbar class="z-10" />
    <!--<img src="/src/assets/img/circle2.svg" alt="" class="w-96 fixed z-0 right-32 mx-5 my-96">
    <img src="/src/assets/img/circle2.svg" alt="" class="w-36 fixed z-0 left-32 mx-36 my-96">
    <img src="/src/assets/img/circle2.svg" alt="" class="w-14 fixed z-0 -left-20 mx-24  mt-44">-->
    <Logo class="z-10"/>
    <ButtonBox />
    <Download class="z-10"/>
    <Footer class="z-30" />
    </div>




</template>

<style scoped>
.background {
  background: rgba(17, 17, 17, 0.8);
filter: blur(2.5px);
backdrop-filter: blur(80px);

}
</style>
