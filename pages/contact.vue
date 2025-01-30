!
<template>
  <div class="bg-white text-darkBlue w-full lg:h-screen pt-[10vh] flex flex-col-reverse gap-4 lg:flex-row lg:gap-0">
    <div class="flex flex-col gap-8 w-full lg:w-[70%] shrink-0 px-16 pb-4 lg:h-full lg:overflow-auto">
      <h1 class="text-2xl lg:text-[64px] lg:leading-[64px] font-bold lg:font-normal font-arkhip uppercase text-center">Contact</h1>
      <p class="lg:text-lg text-justify">Vous avez une demande particulière ? Besoin d'une information ? Nous serons heureux de répondre à vos questions.</p>
      <h2 class="text-xl lg:text-3xl font-bold lg:font-normal font-arkhip uppercase mt-8">Contactez nous</h2>
      <EnquiryForm subject="autre" />
    </div>
    <img draggable="false" src="/images/misc/bras.webp" class="w-full h-[20vh] lg:w-[unset] lg:h-[unset] lg:grow min-w-0 object-cover" />
  </div>
</template>
