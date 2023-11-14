<script setup>
import Navbar from "./components/Home/Nav/Navbar.vue";
import Logo from "./components/Home/Logo/Logo.vue";
import Footer from "./layout/Footer/Footer.vue"
import ButtonBox from "./components/Home/Box/ButtonBox.vue";
import Skills from "./components/Home/Skills/SoftSkills.vue"
import Download from "./components/Home/Download/Download.vue";
import Whatsapp from "./layout/Whatsapp/WhatsappButton.vue";



</script>

<template>
    <div class="bg-[#0D1016]">
    <Navbar />
    <Logo />
    <Skills />
    <ButtonBox />
   <Download />
    <Footer />
    <Whatsapp />
</div>
</template>

<style scoped>

</style>
