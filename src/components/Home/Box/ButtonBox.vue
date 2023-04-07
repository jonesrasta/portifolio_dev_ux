<script setup></script>

<template>
  <div
    class="container flex items-center max-w-screen-4xl max-lg:flex gap-3 max-lg:flex-col p-3 max-md:p-6 place-items-stretch h-auto justify-center"
  >
    <button
      class="box-button flex justify-center p-6 flex-col shadow-md hover:transition hover:duration-300 hover:ease-in-out"
    >
      <img
        src="/src/assets/img/acquavero.png"
        alt=""
        class="flex flex-col w-24 m-2 items-center"
      />
      <p class="flex flex-col text-white font-bold text-sm">
        FULSTACK DEVELOPER
      </p>
    </button>
    <button class="box-button flex justify-center p-6 flex-col shadow-md">
      <img
        src="/src/assets/img/opennew.png"
        alt=""
        class="flex flex-col w-24 m-2 items-center"
      />
      <p class="flex flex-col text-white font-bold text-sm">MOTION DESIGNER</p>
    </button>
    <button class="box-button flex justify-center p-6 flex-col shadow-md">
      <img
        src="/src/assets/img/open.png"
        alt=""
        class="flex flex-col w-24 m-2"
      />
      <p class="flex flex-col text-white font-bold text-sm">GRAPHIC DESIGNER</p>
    </button>
    <button class="box-button flex justify-center p-6 flex-col shadow-md">
      <img
        src="/src/assets/img/poloepaula.png"
        alt=""
        class="flex flex-col w-24 m-2 items-center"
      />
      <p class="flex flex-col text-white font-bold text-sm">
        IT SUPPORT ANALYST
      </p>
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
