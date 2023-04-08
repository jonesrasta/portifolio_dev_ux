<script setup></script>

<template>
  <div>
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
  </div>
</template>

<style scoped>
.box-button {
  width: 320px;
  height: 120px;
  background: rgba(255, 255, 255, 0.04);
  border: 2px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(95px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
.box-button:hover {
  border: 1px solid #fb4220;
  box-shadow: -3px 1px 15px 2px #fb4220;
  border-radius: 12px;
}
</style>
