<script setup></script>

<template>
  <div
    class="container flex items-center max-w-screen-4xl max-lg:flex gap-3 max-lg:flex-col  place-items-stretch h-auto bg-[color:#111111] justify-center"
  >
    <button
      class="box-button flex justify-center p-6 flex-col shadow-md hover:transition hover:duration-300 hover:ease-in-out"
    >
      <img
        src="/src/assets/img/acquavero.png"
        alt=""
        class="flex flex-col w-24 m-4 -mt-8 items-center"
      />
      <p class="flex flex-col text-white">
        I design and code beatifully simple I design and code beatifully simple
        I design and code beatifully simple I design and code beatifully simple
      </p>
    </button>
    <button class="box-button flex justify-center p-6 flex-col shadow-md">
      <img
        src="/src/assets/img/opennew.png"
        alt=""
        class="flex flex-col w-24 m-4 -mt-4 items-center"
      />
      <p class="flex flex-col text-white">
        Criação de storyboards, criação de moodboards e style frames produção e
        animação. Elementos gráficos em movimento, criação animação em 2D e 3D.
      </p>
    </button>
    <button class="box-button flex justify-center p-6 flex-col shadow-md">
      <img
        src="/src/assets/img/open.png"
        alt=""
        class="flex flex-col w-24 m-4 -mt-4"
      />
      <p class="flex flex-col text-white">
        Desenvolvimento de ilustrações, logotipos e outros designs. Layouts
        adequados para cada elemento gráfico Teste de elementos gráficos em
        diferentes mídias
      </p>
    </button>
    <button class="box-button flex justify-center p-6 flex-col shadow-md">
      <img
        src="/src/assets/img/poloepaula.png"
        alt=""
        class="flex flex-col w-24 m-4 -mt-2 items-center"
      />
      <p class="flex flex-col text-white">
        Suporte a sistemas de informação e soluções tecnológicas.Instalação e
        customização de softwares, administração sistemas e procedimentos de
        segurança de rede.
      </p>
    </button>
  </div>
</template>

<style scoped>
.box-button {
  width: 330px;
  height: 310px;
  background: rgba(255, 255, 255, 0.04);
  border: 2px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(95px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  font-size: 16px;
}
.box-button:hover {
  border: 1px solid #fb4220;
  box-shadow: -3px 1px 15px 2px #fb4220;
  border-radius: 16px;
}
</style>
