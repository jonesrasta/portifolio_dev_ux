<script setup>
import styles from "./logo.module.scss";
import { Carousel } from "flowbite";

const items = [
  {
    position: 0,
    el: document.getElementById("carousel-item-1"),
  },
  {
    position: 1,
    el: document.getElementById("carousel-item-2"),
  },
  {
    position: 2,
    el: document.getElementById("carousel-item-3"),
  },
  {
    position: 3,
    el: document.getElementById("carousel-item-4"),
  },
];

const options = {
  defaultPosition: 1,
  interval: 3000,

  indicators: {
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses:
      "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    items: [
      {
        position: 0,
        el: document.getElementById("carousel-indicator-1"),
      },
      {
        position: 1,
        el: document.getElementById("carousel-indicator-2"),
      },
      {
        position: 2,
        el: document.getElementById("carousel-indicator-3"),
      },
      {
        position: 3,
        el: document.getElementById("carousel-indicator-4"),
      },
    ],
  },


};
</script>

<template>
  <div class="container flex justify-center flex-col">
    <div
      class="flex md:columns-2 mx-auto m-24 max-md:m-12 overflow-hidden z-20"
    ></div>

    <h2
      :class="styles.title"
      class="flex flex-col justify-center text-5xl max-md:text-3xl text-center font-bold text-transparent p-1 bg-clip-text bg-gradient-to-l from-white to-[#FB4220]"
    >
      Talk is cheap. Show me the code.
    </h2>
    <p :class="styles.subtitle" class="text-center font-regular text-white p-4">
      Desenvolvedor de Software apaixonado por solução de problemas e pela
      criação de soluções eficientes para sua empresa.
    </p>

    <div class="flex justify-center p-8">
      <a
        href="https://wa.me/+5511955509876"
        target="blank"
        type="button"
        class="button text-white border-2 bg-[#111111] justify-between border-[#FB4220] items-center pl-10 rounded-full font-bold text-xl h-14 w-64 inline-flex"
      >
        LET'S CHAT!
        <svg
          class="icone flex justify-between z-auto"
          width="56"
          height="54"
          viewBox="1 -4 36 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22.5" cy="22.5" r="22.5" fill="#1C1C1C" />
          <path
            d="M23.6782 29.7238C23.6782 29.7238 30.1591 23.9358 32.6847 21.6809C32.8949 21.4934 33 21.2467 33 21C33 20.7533 32.8949 20.5079 32.6847 
            20.3191C30.1606 18.0655 23.6782 12.2788 23.6782 12.2788C23.4709 12.0925 23.1973 12 22.9237 12C22.6458 12 22.3694 12.0951 22.1577 12.2839C21.7358 
            12.6591 21.733 13.2681 22.152 13.6407L29.3197 20.0364H13.0799C12.4838 20.0364 12 20.4681 12 21C12 21.5319 12.4838 21.9636 13.0799 21.9636H29.3197L22.1505 
            28.3606C21.7344 28.7319 21.7387 29.3396 22.1592 29.7148C22.3723 29.9049 22.6502 30 22.9266 30C23.2002 30 23.4709 29.9075 23.6782 29.7238Z"
            fill="#FB4220"
          />
          <path
            d="M23.6782 29.7238C23.6782 29.7238 30.1591 23.9358 32.6847 21.6809C32.8949 21.4934 33 21.2467 33 21C33 20.7533 32.8949 20.5079 32.6847 20.3191C30.1606 
            18.0655 23.6782 12.2788 23.6782 12.2788C23.4709 12.0925 23.1973 12 22.9237 12C22.6458 12 22.3694 12.0951 22.1577 12.2839C21.7358 12.6591 21.733 13.2681 
            22.152 13.6407L29.3197 20.0364H13.0799C12.4838 20.0364 12 20.4681 12 21C12 21.5319 12.4838 21.9636 13.0799 21.9636H29.3197L22.1505 28.3606C21.7344 28.7319 
            21.7387 29.3396 22.1592 29.7148C22.3723 29.9049 22.6502 30 22.9266 30C23.2002 30 23.4709 29.9075 23.6782 29.7238Z"
            fill="#FB4220"
          />
        </svg>
      </a>
    </div>

    <div
      id="default-carousel"
      class="justify-center p-0 relative w-full"
      data-carousel="slide"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-96 overflow-hidden rounded-lg md:h-96 m-1 md:m-16">
        <!-- Item 1 -->
        <div class="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/img/Display1.svg"
            class="absolute block justify-center w-[490px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div class="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/img/Display2.svg"
            class="absolute block justify-center w-[490px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/img/Display3.svg"
            class="absolute block justify-center w-[490px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/img/Display4.svg"
            class="justify-center w-[490px] absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div class="absolute flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          class="w-2 h-2 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-2 h-2 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-2 h-2 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-2 h-2 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/10 dark:bg-gray-800/30 group-hover:bg-white/20 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-[#FB4220] group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-[#FB4220] sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/10 dark:bg-gray-800/30 group-hover:bg-white/20 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-[#FB4220] group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-[#FB4220] sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    <!--<img src="/src/assets/img/circle2.svg" alt="" class="absolute left-2/3 w-56 -my-8">-->
  </div>
</template>

<style scoped>

.button {
  font-family: ubuntu mono;

}
.button:hover {
  border: 3px solid #fb4220;
  box-shadow: 1px 1px 8px 1px #fb4220;
  border-radius: 99px;
}
</style>
