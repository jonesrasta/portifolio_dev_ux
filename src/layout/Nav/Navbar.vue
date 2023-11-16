<script setup>
import { Collapse } from 'flowbite';
</script>

<template>
  <nav class="bg-[#0d1016f8] w-full z-50 flex backdrop-blur-md justify-center max-lg:justify-between px-5 h-24 fixed">
    <img src="/src/assets/img/logo.webp" class="h-18 m-3 lg:hidden" alt="Flowbite Logo" />
    <button class="text-white justify-between lg:hidden z-40" type="button" data-drawer-target="drawer-right-example"
      data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
      <span class="sr-only">Open main menu</span>
      <svg class="w-7 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-width="3" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div id="drawer-right-example"
      class="fixed top-0 right-0 z-40 h-screen w-64 p-4 overflow-y-auto transition-transform translate-x-full duration-150 bg-[#0d1016f8] lg:hidden rounded-2xl"
      tabindex="-1" aria-labelledby="drawer-right-label">
      <div class="flex flex-col my-28">
        <ul class="space-y-2 font-medium py-2 overflow-y-auto">
          <li>
            <a href="/"
              class="flex items-center p-3 text-white rounded-lg max-md:font-normal max-md:text-xl hover:bg-[#1f1f1fea] hover:shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M20.715 24c-.864 0-1.711-.351-2.322-.962l-10.953-10.952c-.275-.274-.655-.432-1.044-.432l-.111.004c-1.681.129-3.373-.481-4.584-1.692-1.097-1.099-1.701-2.561-1.701-4.117 0-1.046.237-2.225.715-3.279l3.809 3.811c.436-.073.968-.393 1.405-.935.283-.35.427-.675.466-.91l-3.826-3.826c1.056-.476 2.219-.71 3.255-.71 1.533 0 3.043.601 4.143 1.702 1.208 1.209 1.823 2.88 1.69 4.584-.031.428.125.851.43 1.156l10.951 10.951c.62.621.962 1.446.962 2.322 0 1.811-1.474 3.285-3.285 3.285zm-14.319-14.343c.915 0 1.81.371 2.456 1.018l10.953 10.951c.239.24.571.377.909.377.71 0 1.288-.577 1.288-1.287 0-.344-.134-.667-.378-.911l-10.949-10.951c-.715-.716-1.083-1.707-1.009-2.718.088-1.127-.317-2.227-1.111-3.022-.493-.492-1.098-.833-1.758-1l1.49 1.491c.218 1.001.125 1.947-.804 3.097-1.002 1.243-2.292 1.932-3.88 1.586l-1.489-1.49c.167.66.508 1.266 1 1.759.796.794 1.893 1.2 3.017 1.11l.265-.01zm1.664 5.877l-4.665 4.627c-.229.229-.504.407-.79.558l-.579.302-1.026 2.145.833.834 2.101-1.07.301-.58c.15-.286.347-.545.574-.774l4.665-4.627-1.414-1.415zm7.15-7.798l4.507-4.499c.168-.17.442-.168.611 0 .168.17.169.442 0 .611l-4.507 4.5.89.89 4.507-4.5c.169-.169.441-.168.61.001.168.168.17.441.001.609l-4.508 4.5 1.039 1.039 4.767-4.759c.582-.583.873-1.346.873-2.11 0-.768-.293-1.537-.881-2.125-.584-.585-1.35-.877-2.113-.877-.766 0-1.529.293-2.113.877l-4.767 4.759 1.084 1.084zm5.49 12.464c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.223-.5-.5-.5z" />
              </svg>
              <span class="ml-6">Skills</span>
            </a>
          </li>
          <li>
            <a href="/servicos"
              class="flex items-center p-3 text-white rounded-lg max-md:font-normal max-md:text-xl hover:bg-[#1f1f1fea] hover:shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
              </svg>
              <span class="ml-6">Experience</span>
            </a>
          </li>
          <li>
            <a href="/clientes"
              class="flex items-center p-3 text-white rounded-lg max-md:font-normal max-md:text-xl hover:bg-[#1f1f1fea] hover:shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M21 3c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.323.861 2.433 2.05 2.832.168 4.295-2.021 4.764-4.998 5.391-1.709.36-3.642.775-5.052 2.085v-7.492c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v12.367c-1.163.414-2 1.512-2 2.817 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.295-.824-2.388-1.973-2.808.27-3.922 2.57-4.408 5.437-5.012 3.038-.64 6.774-1.442 6.579-7.377 1.141-.425 1.957-1.514 1.957-2.803zm-16.8 0c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm3.6 18c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8zm10.2-16.2c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z" />
              </svg>
              <span class="ml-6">Projects</span>
            </a>
          </li>
          <li>
            <a href="/projetos"
              class="flex items-center p-3 text-white rounded-lg max-md:font-normal max-md:text-xl hover:bg-[#1f1f1fea] hover:shadow-xl">
              <svg fill="#FFFFFF" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                clip-rule="evenodd">
                <path
                  d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-15.667-6l-5.333 4v-4h-3v-14.001l18 .001v14h-9.667zm-6.333-2h3v2l2.667-2h8.333v-10l-14-.001v10.001z" />
              </svg>
              <span class="ml-6">Contact</span>
            </a>
          </li>
        </ul>

        <a href="/" class="flex items-center justify-center my-6">
          <img src="/src/assets/img/logo.webp" alt="Logo Footer" class="w-10" />

        </a>
        <div class="flex px-2 justify-center items-center space-x-3 my-0">
          <a href="https://m.facebook.com/profile.php/?id=61550753822935"
            class="bg-[#272727] shadow-md w-12 h-12 rounded-full flex items-center justify-center" target="_blank"
            aria-label="Instagram">
            <svg width="23" height="23" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M47 23.643C47 10.5822 36.4819 0 23.5 0C10.5181 0 0 10.5822 0 23.643C0 35.4435 8.59361 45.2249 19.8281 47V30.4775H13.8584V23.643H19.8281V18.4339C19.8281 12.5089 23.3342 9.23602 28.7041 9.23602C31.2758 9.23602 33.9651 9.69744 33.9651 9.69744V15.5129H31.001C28.0825 15.5129 27.1719 17.3357 27.1719 19.2052V23.643H33.6893L32.647 30.4775H27.1719V47C38.4064 45.2249 47 35.4435 47 23.643Z"
                fill="white" />
            </svg>
            <span class="sr-only">Facebook</span>
          </a>
          <a href="https://www.linkedin.com/in/lucimare-miranda-silva-a731b5110/"
            class="bg-[#272727] shadow-md w-12 h-12 rounded-full flex items-center justify-center" target="_blank"
            aria-label="Linkedin">
            <svg width="23" height="23" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.7525 4.8913C9.7525 7.59326 7.57875 9.78261 4.89583 9.78261C2.21292 9.78261 0.0391667 7.59326 0.0391667 4.8913C0.0391667 2.1913 2.21292 0 4.89583 0C7.57875 0 9.7525 2.1913 9.7525 4.8913ZM9.79167 13.6957H0V45H9.79167V13.6957ZM25.4231 13.6957H15.6941V45H25.425V28.5672C25.425 19.4302 37.2318 18.6828 37.2318 28.5672V45H47V25.1785C47 9.76109 29.5278 10.3226 25.4231 17.912V13.6957Z"
                fill="white" />
            </svg>
            <span class="sr-only">Whatsapp</span>
          </a>
          <a href="https://www.instagram.com/lucimare.miranda.adv/"
            class="bg-[#272727] shadow-md w-12 h-12 rounded-full flex items-center justify-center" target="_blank"
            aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.5055 12.1806C17.5531 12.1806 11.9453 17.9042 11.9453 25C11.9453 32.0958 17.5531 37.8194 24.5055 37.8194C31.4578 37.8194 37.0656 32.0958 37.0656 25C37.0656 17.9042 31.4578 12.1806 24.5055 12.1806ZM24.5055 33.3343C20.0127 33.3343 16.3397 29.5967 16.3397 25C16.3397 20.4033 20.0017 16.6657 24.5055 16.6657C29.0092 16.6657 32.6712 20.4033 32.6712 25C32.6712 29.5967 28.9983 33.3343 24.5055 33.3343ZM40.509 11.6563C40.509 13.3186 39.1973 14.6463 37.5794 14.6463C35.9506 14.6463 34.6498 13.3075 34.6498 11.6563C34.6498 10.005 35.9616 8.66618 37.5794 8.66618C39.1973 8.66618 40.509 10.005 40.509 11.6563ZM48.8278 14.691C48.642 10.6856 47.7456 7.13768 44.8707 4.21455C42.0066 1.29142 38.5305 0.376548 34.6061 0.175722C30.5615 -0.0585741 18.4385 -0.0585741 14.3939 0.175722C10.4805 0.365391 7.00429 1.28026 4.12934 4.20339C1.25438 7.12652 0.368935 10.6744 0.17217 14.6798C-0.0573898 18.8079 -0.0573898 31.181 0.17217 35.309C0.358003 39.3144 1.25438 42.8623 4.12934 45.7855C7.00429 48.7086 10.4695 49.6235 14.3939 49.8243C18.4385 50.0586 30.5615 50.0586 34.6061 49.8243C38.5305 49.6346 42.0066 48.7197 44.8707 45.7855C47.7347 42.8623 48.6311 39.3144 48.8278 35.309C49.0574 31.181 49.0574 18.819 48.8278 14.691ZM43.6026 39.7384C42.75 41.9251 41.0993 43.6098 38.9459 44.4912C35.7211 45.7966 28.0691 45.4954 24.5055 45.4954C20.9418 45.4954 13.2789 45.7855 10.0651 44.4912C7.92253 43.621 6.27189 41.9363 5.40831 39.7384C4.12934 36.4471 4.42448 28.6372 4.42448 25C4.42448 21.3628 4.14027 13.5418 5.40831 10.2616C6.26096 8.07486 7.9116 6.39016 10.0651 5.50876C13.2898 4.20339 20.9418 4.50463 24.5055 4.50463C28.0691 4.50463 35.732 4.21455 38.9459 5.50876C41.0884 6.379 42.739 8.06371 43.6026 10.2616C44.8816 13.5529 44.5864 21.3628 44.5864 25C44.5864 28.6372 44.8816 36.4582 43.6026 39.7384Z"
                fill="white" />
            </svg>
            <span class="sr-only">Instagram</span>
          </a>
        </div>
      </div>
      <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example"
        class="text-gray-400 rounded-lg text-sm w-8 h-8 absolute top-8 right-4 inline-flex items-center justify-center">
        <svg class="bg-neutral-900 w-12 h-6" width="16" height="16" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 20.188L15.685 11.979L23.885 3.697L20.188 0L11.976 8.318L3.666 0.115L0 3.781L8.321 12.021L0.115 20.334L3.781 24L12.018 15.682L20.303 23.885L24 20.188Z"
            fill="#6FF1A6" />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>

    </div>

    <div class="flex max-lg:hidden">
      <ul class="font-medium flex p-4 md:p-0 mt-4 md:space-x-16 md:mt-0 justify-center items-center">
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-white md:p-0 active:text-[#6FF1A6]" aria-current="page">Skills</a>
        </li>
        <li>
          <a href="/servicos" class="text-white hover:text-[#6FF1A6]">Experience</a>
        </li>
        <a href="/" class="flex items-center">
          <img src="/src/assets/img/logo.webp" class="w-14 mr-3 p-3" alt="Flowbite Logo" />
        </a>
        <li>
          <a href="/clientes" class="text-white hover:text-[#6FF1A6]">Projects</a>
        </li>
        <li>
        <a href="/projetos" class="text-white hover:text-[#6FF1A6]">Contact</a>
      </li>
    </ul>
  </div>


</nav></template>

<style scoped>
</style>