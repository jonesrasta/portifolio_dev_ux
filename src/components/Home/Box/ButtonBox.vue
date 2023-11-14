<script setup></script>

<template>


<div class="bg-[#0D1016] py-32">
  <h2 class="text-[#6FF1A6] justify-center flex text-3xl font-bold">
    Timeline
  </h2>

<ol class="items-center sm:flex px-16 py-8 bg-[#0D1016]">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full ring-0 ring-white sm:ring-8 shrink-0">
              <img src="/src/assets/img/poloepaula.webp" alt="logo polo e paula" class="w-44 px-1" />
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 mt-4"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-white mt-6">Flowbite Library v1.0.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full ring-0 ring-white sm:ring-8 shrink-0">
              <img src="/src/assets/img/openn.png" alt="logo polo e paula" class="w-44 px-1" />
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
</ol>

</div>







  <!-- <div>
    <h2
      class="flex justify-center text-3xl m-4 max-md:text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-[#FB4220]"
    >
      Experiência Profissional
    </h2>
  </div>
  <div
    class="container flex  max-lg:items-center max-w-screen-4xl max-lg:flex gap-3 max-lg:flex-col place-items-stretch h-auto justify-center"
  >
    <div
      id="dropdownBottom"
      class="z-50 hidden bg-[#2c2c2c] divide-y divide-gray-100 rounded-lg shadow w-80"
    >
      <ul
        class="py-12 text-sm text-white"
        aria-labelledby="dropdownBottomButton"
      >
        <li>
          <a
            class="block px-4 py-2"
          >
            Metodologia Ágil e Planning Poker para o desenvolvimento das
            sprints; Desenvolvimento de APIs e MVC de sistemas usando Laravel,
            Vue.js, Node, Python;
          </a>
        </li>
      </ul>
    </div>
    <button
      id="dropdownBottomButton"
      data-dropdown-toggle="dropdownBottom"
      data-dropdown-placement="bottom"
      class="box-button flex-col mr-3 mb-3 md:mb-0 text-white border-1 focus:outline-none font-medium text-sm px-2.5 text-center inline-flex"
      type="button"
    >
      <img
        src="/src/assets/img/acquavero.png"
        alt=""
        class="flex flex-col w-24 m-2 items-center"
      />
      FULLSTACK DEVELOPER
    </button>
    <div
      id="dropdownBottomI"
      class="z-50 hidden bg-[#2c2c2c] divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700"
    >
      <ul
        class="py-12 text-sm text-white dark:text-gray-200"
        aria-labelledby="dropdownBottomButtonI"
      >
        <li>
          <a
            class="block px-4 py-2"
          >
            Desenvolvimento de animações digitais Criação de animações para
            logos, utilizando After Effects, Ilustrator, Photoshop e Adobe
            Premiere. Criação de animações 2D, 3D e produção de efeitos visuais,
            garantindo que todos os projetos fossem concluídos de acordo com o
            orçamento e, em tempo hábil.
          </a>
        </li>
      </ul>
    </div>
    <button
      id="dropdownBottomButtonI"
      data-dropdown-toggle="dropdownBottomI"
      data-dropdown-placement="bottom"
      class="box-button flex-col mr-3 mb-3 md:mb-0 text-white border-1 focus:outline-none font-medium text-sm px-2.5 text-center inline-flex"
      type="button"
    >
      <img
        src="/src/assets/img/opennew.png"
        alt=""
        class="flex flex-col w-24 m-2 items-center"
      />
      MOTION DESIGNER
    </button>
    <div
      id="dropdownBottomII"
      class="z-50 hidden bg-[#2c2c2c] divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700"
    >
      <ul
        class="py-12 text-sm text-white dark:text-gray-200"
        aria-labelledby="dropdownBottomButtonII"
      >
        <li>
          <a
            class="block px-4 py-2"
          >
            Desenvolvimento de campanhas de marketing de alta qualidade:
            newsletters, apresentações, assets para mídia sociais, anúncios,
            kvs. Criação de e-mails marketing, criação de protótipos utilizando
            o figma e o pacote adobe.
          </a>
        </li>
      </ul>
    </div>
    <button
      id="dropdownBottomButtonII"
      data-dropdown-toggle="dropdownBottomII"
      data-dropdown-placement="bottom"
      class="box-button flex-col mr-3 mb-3 md:mb-0 text-white border-1 focus:outline-none font-medium text-sm px-2.5 text-center inline-flex"
      type="button"
    >
      <img
        src="/src/assets/img/open.png"
        alt=""
        class="flex flex-col w-24 m-2 items-center"
      />
      GRAPHIC DESIGNER
    </button>
    <div
      id="dropdownBottomIII"
      class="z-50 hidden bg-[#2c2c2c] divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700"
    >
      <ul
        class="py-12 text-sm text-white dark:text-gray-200"
        aria-labelledby="dropdownBottomButtonIII"
      >
        <li>
          <a
            class="block px-4 py-2"
          >
            Suporte a sistemas de informação e soluções tecnológicas, instalação
            e customização de softwares, suporte a toda a parte de hardware.
            Administração do sistema e procedimento de segurança de rede.
            Gerenciamento do Servidor Linux.
          </a>
        </li>
      </ul>
    </div>
    <button
      id="dropdownBottomButtonII"
      data-dropdown-toggle="dropdownBottomIII"
      data-dropdown-placement="bottom"
      class="box-button flex-col mr-3 mb-3 md:mb-0 text-white border-1 focus:outline-none font-medium text-sm py-2.5 text-center inline-flex items-center"
      type="button"
    >
      <img
        src="/src/assets/img/poloepaula.png"
        alt=""
        class="flex flex-col w-24 m-2 items-center"
      />
      IT SUPPORT ANALYST
    </button>
  </div> -->
</template>

<style scoped>
/* .box-button {
  width: 320px;
  height: 120px;
  background: rgba(255, 255, 255, 0.04);
  border: 2px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(95px);
  /* Note: backdrop-filter has minimal browser support */

  /* border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
.box-button:hover {
  border: 1px solid #fb4220;
  box-shadow: -3px 1px 15px 2px #fb4220;
  border-radius: 12px;
} */ 
</style>
