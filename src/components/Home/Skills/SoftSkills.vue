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
    <div class="mt-14 mx-auto w-full h-full">
        <h2 class="text-[#6FF1A6] justify-center flex text-3xl font-bold mb-8">
            Skills
        </h2>
    </div>
    <div class=" bg-[#0D1016] mx-auto w-full h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-sm:grid-cols-1 grid gap-x-4 gap-y-6 px-16 justify-center items-center group"
        data-spotlight>
        <!-- Card 1 -->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#5ff89f] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/vuejs.png" width="200" height="200"
                            alt="Card 01" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">Vue Js</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 80%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 2 -->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#feea31] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/js.png" width="200" height="200"
                            alt="Card 02" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">JavaScript</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 55%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 3 -->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#f04728] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/html.png" width="200" height="200"
                            alt="Card 03" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">HTML</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 95%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 4 -->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#2747f1] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/css.png" width="200" height="200"
                            alt="Card 04" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">CSS</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 90%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 5 -->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#28c8c5] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/tailwind.png" width="200" height="200"
                            alt="Card 05" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">Tailwind</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 78%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 6 -->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#a751fe] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/figma.png" width="200" height="200"
                            alt="Card 06" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">Figma</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 75%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 7-->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#51dbfd] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/flutter.png" width="200" height="200"
                            alt="Card 07" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">Flutter</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 40%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 8-->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#3191d1] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/ts.png" width="200" height="200"
                            alt="Card 08" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">TypeScript</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 32%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 9-->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#9b9b9b] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/github.png" width="200" height="200"
                            alt="Card 09" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">GitHub</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 70%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 10-->
        <div
            class="relative h-full bg-[#252a33] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#1fd5fb] after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div class="relative h-full bg-[#161A22] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                <!-- Radial gradient -->
                <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-[#303744] rounded-full blur-[80px]"></div>
                </div>
                <div class="flex flex-col h-full items-center text-center">
                    <!-- Image -->
                    <div class="relative inline-flex">
                        <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                            aria-hidden="true"></div>
                        <img class="inline-flex" src="/src/assets/img/cards/react.png" width="200" height="200"
                            alt="Card 10" />
                    </div>
                    <!-- Text -->
                    <div class="grow mb-5">
                        <h2 class="text-xl text-slate-200 font-bold mb-1">React</h2>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                        <div class="bg-[#6FF1A6] h-3 rounded-full" style="width: 30%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>