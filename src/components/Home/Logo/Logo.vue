<script setup>
import styles from "./logo.module.scss";
</script>

<template>
  <div class="md:columns-2 mx-auto overflow-hidden max-w-4xl mt-24"></div>
  <div>
    <h2
      :class="styles.title"
      class="text-center font-bold text-transparent bg-clip-text text-2xl bg-gradient-to-l from-white to-[#FB4220]"
    >
      Talk is cheap. Show me the code Show me the code
    </h2>
    <p
      :class="styles.subtitle"
      class="text-center font-regular text-white pt-6"
    >
      Desenvolvedor de Software apaixonado por solução de problemas e pela
      criação de <br/>soluções eficientes para sua empresa.
    </p>
    <div class="flex justify-center p-8">
      <!--<a
          href="https://wa.me/+5511955509876"
          target="blank"
          class="button font-medium border-2 border-[#FB4220] rounded-full text-white pl-5"
          >LET'S CHAT!</a
        >-->
      <a
        href="https://wa.me/+5511955509876"
        target="blank"
        type="button"
        class="text-white border-2 justify-between border-[#FB4220] items-center pl-10 rounded-full font-medium text-base h-14 w-64 inline-flex"
      >
        LET'S CHAT!
        <svg
          class="icone flex justify-between z-auto"
          width="56"
          height="54"
          viewBox="1 -3 36 50"
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
      id="carouselExampleCaptions"
      class="relative"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div
        class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="0"
          data-te-carousel-active
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="1"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="2"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>
      <div
        class="relative overflow-hidden after:clear-both after:block after:content-['']"
      >
        <div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active
          data-te-carousel-item
          style="backface-visibility: hidden"
        >
          <img
            src="/src/assets/img/slide1.svg"
            class="block justify-center w-[816px] p-4 py-16"
            alt="..."
          />
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style="backface-visibility: hidden"
        >
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
            class="block w-full"
            alt="..."
          />
          <div
            class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
          >
          </div>
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style="backface-visibility: hidden"
        >
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
            class="block w-full"
            alt="..."
          />
          <div
            class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
          >
          </div>
        </div>
      </div>
          <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/10 group-hover:bg-white/10 group-focus:ring-4 group-focus:ring-[#FB4220] group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-[#FB4220] sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/10 group-hover:bg-white/10 group-focus:ring-4 group-focus:ring-[#FB4220] group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-[#FB4220] sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
    </div>
  </div>
</template>

<style scoped>
.button {
  font-family: ubuntu mono;
  font-weight: 500;
}
</style>
