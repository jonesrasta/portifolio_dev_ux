<script setup>
// Cards spotlight
class Spotlight {
    constructor(containerElement) {
        this.container = containerElement;
        this.cards = Array.from(this.container.children);
        this.mouse = {
            x: 0,
            y: 0,
        };
        this.containerSize = {
            w: 0,
            h: 0,
        };
        this.initContainer = this.initContainer.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.init();
    }

    initContainer() {
        this.containerSize.w = this.container.offsetWidth;
        this.containerSize.h = this.container.offsetHeight;
    }

    onMouseMove(event) {
        const { clientX, clientY } = event;
        const rect = this.container.getBoundingClientRect();
        const { w, h } = this.containerSize;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const inside = x < w && x > 0 && y < h && y > 0;
        if (inside) {
            this.mouse.x = x;
            this.mouse.y = y;
            this.cards.forEach((card) => {
                const cardX = -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
                const cardY = -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
                card.style.setProperty('--mouse-x', `${cardX}px`);
                card.style.setProperty('--mouse-y', `${cardY}px`);
            });
        }
    }

    init() {
        this.initContainer();
        window.addEventListener('mousemove', this.onMouseMove);
    }
}

// Init Spotlight
const spotlights = document.querySelectorAll('[data-spotlight]');
spotlights.forEach((spotlight) => {
    new Spotlight(spotlight);
});
</script>

<template>
    <section class="bg-[#0D1016] px-16 max-sm:px-6 py-20 max-md:py-40 max-lg:py-44 ">
        <div class="px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
                <h2
                    class="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white leading-tight">
                    Talk is cheap. <br /> Show me <span class="text-[#6FF1A6] leading-tight">the code.</span></h2>
                <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-400">Desenvolvedor Front-End
                    dedicado, minha paixão reside na superação de desafios e na concepção de soluções eficazes.</p>
                <div class="flex flex-col sm:flex-row sm:space-y-0 space-x-6 max-sm:space-y-6">
                    <a href="#"
                        class="inline-flex justify-center items-center py-3 px-8 text-lg font-medium text-center rounded-full bg-[#6FF1A6] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]">
                        Saiba mais
                        <svg class="w-4 h-4 ml-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="#"
                        class="inline-flex justify-center items-center text-[#6FF1A6] hover:underline hover:text-[#5ff89f]">
                        LET’S CHAT!
                    </a>
                </div>
            </div>
            <div>
                <img src="/src/assets/img/jones4.png" alt="" class="ml-4">
            </div>
        </div>


    </section>

    <div class="group" data-spotlight>
        <div
            class="mx-4 -mt-36 max-lg:-mt-44 relative bg-[#252a33] rounded-2xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#5ff89f] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]">

                    </div>
                </div>

                <div
                    class="mx-auto justify-center items-center px-16 max-sm:px-4 md:py-4 lg:mt-8 grid grid-cols-2 gap-8 p-4 text-[#6FF1A6] xl:grid-cols-4 sm:p-8">
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="mb-2 text-3xl font-extrabold">500+</h2>
                        <p class="text-gray-400">Contributions</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="mb-2 text-3xl font-extrabold">20+</h2>
                        <p class="text-gray-400">Repositories</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="mb-2 text-3xl font-extrabold">10+</h2>
                        <p class="text-gray-400">Projects</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="mb-2 text-3xl font-extrabold">05+</h2>
                        <p class="text-gray-400">Works</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
