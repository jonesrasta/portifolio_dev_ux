<script setup>
import Navbar from "./layout/Nav/Navbar.vue";
import Logo from "./components/Home/Logo/Logo.vue";
import Timeline from "./components/Home/Timeline/TimeLine.vue";
import Skills from "./components/Home/Skills/SoftSkills.vue";
import Contact from "./components/Home/Contact/Contact.vue";
import Download from "./components/Home/Download/Download.vue";
// import Cards from "./components/Home/Cards/Cards.vue";
import Footer from "./layout/Footer/Footer.vue"
import Whatsapp from "./layout/Whatsapp/WhatsappButton.vue";



</script>

<template>
    <Navbar />
    <div class="bg-[#0D1016] ">
        <div class="container mx-auto">
            <Logo />
            <Skills />
            <Timeline />
            <Contact />
            <Download />
            <!-- <Cards /> -->
            <Footer />
            <Whatsapp />
        </div>
    </div>
</template>

<style scoped></style>
