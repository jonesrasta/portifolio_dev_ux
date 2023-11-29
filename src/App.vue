<script setup>
import Navbar from "./layout/Nav/Navbar.vue";
import Home from "./pages/Home/Home.vue";
import Footer from "./layout/Footer/Footer.vue"
import Whatsapp from "./layout/Whatsapp/WhatsappButton.vue";



</script>

<template>
    <Navbar />
    <div class="bg-[#0D1016] ">
        <div class="container mx-auto">
            <Home />
            <Footer />
            <Whatsapp />
        </div>
    </div>
</template>

<style scoped></style>
