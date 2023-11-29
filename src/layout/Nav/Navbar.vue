<script setup>
import { Collapse } from 'flowbite';
</script>

<template>
  <nav class="bg-[#0d1016c2] w-full z-50 flex backdrop-blur-md justify-center max-lg:justify-between px-5 h-24 fixed">
    <img src="/src/assets/img/logo.webp" class="h-18 m-3 flex justify-center items-center" alt="Flowbite Logo" />
    <!-- <button class="text-white justify-between lg:hidden z-40" type="button" data-drawer-target="drawer-right-example"
      data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
      <span class="sr-only">Open main menu</span>
      <svg class="w-7 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-width="3" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div id="drawer-right-example"
      class="fixed top-0 right-0 z-40 h-screen w-64 p-4 overflow-y-auto transition-transform translate-x-full duration-150 bg-[#0d1016fa] lg:hidden rounded-2xl"
      tabindex="-1" aria-labelledby="drawer-right-label">
      <div class="flex flex-col my-28">
        <ul class="space-y-2 font-medium py-2 overflow-y-auto">
          <li>
            <a href="/skills"
              class="flex items-center p-3 text-white rounded-lg max-md:font-normal max-md:text-xl hover:bg-[#1f1f1fea] hover:shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M20.715 24c-.864 0-1.711-.351-2.322-.962l-10.953-10.952c-.275-.274-.655-.432-1.044-.432l-.111.004c-1.681.129-3.373-.481-4.584-1.692-1.097-1.099-1.701-2.561-1.701-4.117 0-1.046.237-2.225.715-3.279l3.809 3.811c.436-.073.968-.393 1.405-.935.283-.35.427-.675.466-.91l-3.826-3.826c1.056-.476 2.219-.71 3.255-.71 1.533 0 3.043.601 4.143 1.702 1.208 1.209 1.823 2.88 1.69 4.584-.031.428.125.851.43 1.156l10.951 10.951c.62.621.962 1.446.962 2.322 0 1.811-1.474 3.285-3.285 3.285zm-14.319-14.343c.915 0 1.81.371 2.456 1.018l10.953 10.951c.239.24.571.377.909.377.71 0 1.288-.577 1.288-1.287 0-.344-.134-.667-.378-.911l-10.949-10.951c-.715-.716-1.083-1.707-1.009-2.718.088-1.127-.317-2.227-1.111-3.022-.493-.492-1.098-.833-1.758-1l1.49 1.491c.218 1.001.125 1.947-.804 3.097-1.002 1.243-2.292 1.932-3.88 1.586l-1.489-1.49c.167.66.508 1.266 1 1.759.796.794 1.893 1.2 3.017 1.11l.265-.01zm1.664 5.877l-4.665 4.627c-.229.229-.504.407-.79.558l-.579.302-1.026 2.145.833.834 2.101-1.07.301-.58c.15-.286.347-.545.574-.774l4.665-4.627-1.414-1.415zm7.15-7.798l4.507-4.499c.168-.17.442-.168.611 0 .168.17.169.442 0 .611l-4.507 4.5.89.89 4.507-4.5c.169-.169.441-.168.61.001.168.168.17.441.001.609l-4.508 4.5 1.039 1.039 4.767-4.759c.582-.583.873-1.346.873-2.11 0-.768-.293-1.537-.881-2.125-.584-.585-1.35-.877-2.113-.877-.766 0-1.529.293-2.113.877l-4.767 4.759 1.084 1.084zm5.49 12.464c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.223-.5-.5-.5z" />
              </svg>
              <span class="ml-6">Skills</span>
            </a>
          </li>
          <li>
            <a href="/timeline"
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
        </ul> -->

        <!-- <a href="/" class="flex items-center justify-center my-6">
          <img src="/src/assets/img/logo.webp" alt="Logo Footer" class="w-10" />

        </a> -->
        <!-- <div class="flex px-2 justify-center items-center space-x-3 my-0">
          <a href="https://www.linkedin.com/in/joneslima/"
            class="bg-[#272727] shadow-md w-12 h-12 rounded-full flex items-center justify-center" target="_blank"
            aria-label="Linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            <span class="sr-only">Linkedin</span>
          </a>
          <a href="https://github.com/jonesrasta"
            class="bg-[#272727] shadow-md w-12 h-12 rounded-full flex items-center justify-center" target="_blank"
            aria-label="Github">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span class="sr-only">GitHub</span>
          </a>
          <a href="https://wa.me/+5511955509876"
            class="bg-[#272727] shadow-md w-12 h-12 rounded-full flex items-center justify-center" target="_blank"
            aria-label="Whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span class="sr-only">Whatsapp</span>
          </a>
        </div>
      </div>
      <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example"
        class="text-gray-400 rounded-lg text-sm w-8 h-8 absolute top-8 right-4 inline-flex items-center justify-center">
        <svg class="bg-[#0d1016fa] w-12 h-6" width="16" height="16" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 20.188L15.685 11.979L23.885 3.697L20.188 0L11.976 8.318L3.666 0.115L0 3.781L8.321 12.021L0.115 20.334L3.781 24L12.018 15.682L20.303 23.885L24 20.188Z"
            fill="#6FF1A6" />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>

    </div> -->

    <!-- <div class="flex max-lg:hidden">
      <ul class="font-medium flex p-4 md:p-0 mt-4 md:space-x-16 md:mt-0 justify-center items-center">
        <li>
          <a href="/skills" class="block py-2 pl-3 pr-4 text-white md:p-0 active:text-[#6FF1A6]" aria-current="page">Skills</a>
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
  </div> -->


</nav></template>

<style scoped></style>