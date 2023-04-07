<script>

</script>


<template>
    <div>
  <div
    class="container flex-col w-[1024px] m-8 max-md:w-80 flex items-center justify-center"
  >
      <p class="flex flex-col justify-center content-center text-white font-thin text-base mx-5 py-6 px-1 ">
        Fique à vontade para baixar o meu currículo em formato PDF e obter
        uma visão mais completa da minha carreira e habilidades. Estou ancioso
        para discutir oportunidades de trabalho, e como posso contribuir para o
        sucesso da sua empresa. 
      </p>
      <a
        href="/public/cv.pdf" download="jones_lima" 
        target="blank"
        type="button"
        class=" button text-white border-2 justify-between border-[#FB4220] items-center pl-10 rounded-full font-medium text-base h-14 w-60 inline-flex"
      >
        DOWNLOAD CV
        <svg
          class="icone flex justify-between z-auto"
          width="56"
          height="54"
          viewBox="1 -3 44 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="25" cy="24.5" rx="25" ry="24.5" fill="#1C1C1C" />
          <path
            d="M16.3823 25.103C16.3823 25.103 21.8396 30.8392 23.9656 33.0746C24.1425 33.2606 24.3771 33.3555 24.6129 33.3585C24.8487 33.3614 25.0846 33.2725 25.2676 33.0909C27.4514 30.9108 33.0592 25.3121 33.0592 25.3121C33.2397 25.133 33.3314 24.8949 33.3346 24.6557C33.3378 24.4127 33.2502 24.1698 33.0721 23.9825C32.7184 23.6091 32.1362 23.5993 31.7752 23.9612L25.5771 30.152L25.7672 15.952C25.7742 15.4307 25.3671 15.0025 24.8586 14.9961C24.3502 14.9898 23.9318 15.4076 23.9248 15.9289L23.7348 30.1289L17.7033 23.7835C17.3532 23.4152 16.7722 23.4117 16.4087 23.7748C16.2244 23.9589 16.1303 24.2007 16.127 24.4425C16.1238 24.6817 16.2091 24.9195 16.3823 25.103Z"
            fill="#FB4220"
          />
        </svg>
        
      </a>
  </div>
</div>

</template>

<style scoped>
.container {
  height: 335px;
  background: rgba(217, 217, 217, 0.02);
  box-shadow: 0px 4px 36px rgba(251, 66, 32, 0.28);
  backdrop-filter: blur(201.5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
}

.button {
    display: flex;

}
</style>
