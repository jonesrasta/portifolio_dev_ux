0f0f <script setup>
</script>

<template>
    <div class="container bg-[#0D1016] mx-auto px-8 mb-24">
        <h2 class="text-[#6FF1A6] text-center text-3xl font-bold mb-2">
            Contact
        </h2>
        <div
            class="mt-12 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-14 mx-auto border border-[#ffffff1c] bg-[#252a3369] hover:border-l-[#ffffff42] hover:border-t-[#ffffff42] rounded-xl text-white shadow-lg">
            <div class="flex flex-col justify-between">
                <div>
                    <h2 class="text-3xl font-bold leading-tight">Lets talk about everything!</h2>
                </div>
                <div class="mt-8 text-center order-2">
                    <img src="/src/assets/img/jones5.webp" alt="" class="-ml-10 max-md:hidden">
                </div>
            </div>
            <div class="my-4 text-black max-sm:my-0">
                <div>
                    <span class="text-lg text-gray-400 font-bold">Company Name</span>
                    <input
                        class="w-full bg-[#ffffff17] text-white mt-2 p-2 rounded-md border-0 focus:outline-none focus:shadow-outline focus:ring-[#6cd698]"
                        type="text" placeholder="">
                </div>
                <div class="mt-8">
                    <span class="text-lg text-gray-400 font-bold">Email</span>
                    <input
                        class="w-full bg-[#ffffff17] text-white mt-2 p-2 rounded-md focus:outline-none focus:shadow-outline focus:ring-[#6cd698]"
                        type="text">
                </div>
                <div class="mt-8">
                    <span class="text-lg text-gray-400 font-bold">Message</span>
                    <textarea
                        class="w-full h-32 bg-[#ffffff17] text-white mt-2 p-2 rounded-md focus:outline-none focus:shadow-outline focus:ring-[#6cd698]"></textarea>
                </div>
                <button
                    class="text-lg font-medium tracking-wide rounded-full py-3 w-full my-6 bg-[#6FF1A6] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]">
                    Enviar mensagem
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>