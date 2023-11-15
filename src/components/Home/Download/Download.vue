<script>

</script>


<template>
  <div>
    <div
      class="container bg-[#0D1016] flex-col w-[1024px] max-sm:p-8  mb-24 mx-auto max-md:w-80 flex items-center justify-center">
      <p
        class="flex flex-col justify-center max-sm:w-80 max-sm:px-6 content-center text-white font-thin text-base mx-28 mb-10 px-1 ">
        Fique à vontade para baixar o meu currículo em formato PDF e obter
        uma visão mais completa da minha carreira e habilidades. Estou ancioso
        para discutir oportunidades de trabalho, e como posso contribuir para o
        sucesso da sua empresa.
      </p>
      <a :href="'/files/Jones Lima.pdf'" download target="blank" type="button"
        class="bg-[#6FF1A6] flex items-center rounded-full bg-primary py-3 px-5 text-lg font-medium leading-normal transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]">
        Download CV
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-1 h-6 w-6 mx-2">
          <path fill-rule="evenodd"
            d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
            clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 335px;
  background: rgba(217, 217, 217, 0.02);
  backdrop-filter: blur(201.5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
}
</style>
