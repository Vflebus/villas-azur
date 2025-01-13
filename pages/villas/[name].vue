<template>
  <div v-if="villa" class="bg-white text-darkBlue w-full lg:h-screen overflow-x-hidden pt-[10vh]">
    <div class="flex flex-col lg:flex-row gap-8 lg:h-full">
      <div class="w-full h-[50vh] lg:w-3/5 lg:h-full shrink-0">
        <img draggable="false" :src="`/images/villas/${villa.name}/${material}/Image${villa.imagesHighlight[material].first}.png`" class="w-full h-1/2 object-cover" />
        <div class="flex h-1/2">
          <img draggable="false" :src="`/images/villas/${villa.name}/${material}/Image${villa.imagesHighlight[material].second}.png`" class="w-1/2 h-full object-cover" />
          <img draggable="false" :src="`/images/villas/${villa.name}/${material}/Image${villa.imagesHighlight[material].third}.png`" class="w-1/2 h-full object-cover" />
        </div>
      </div>
      <div class="grow px-[2vw] flex flex-col gap-8 h-full overflow-auto pb-8">
        <div>
          <h1 class="text-2xl lg:text-[64px] lg:leading-[64px] font-bold lg:font-normal font-arkhip uppercase text-center">villa {{ villaName }}</h1>
          <div class="flex justify-center gap-4" v-if="villa.imagesHighlight.beton && villa.imagesHighlight.bois">
            <button :class="{ 'underline font-bold': material === 'beton' }" @click="material = 'beton'">Béton banché</button>
            <button :class="{ 'underline font-bold': material === 'bois' }" @click="material = 'bois'">Bois</button>
          </div>
        </div>
        <div class="flex gap-8 justify-center">
          <div>
            <div class="flex items-center justify-center gap-4 text-lg"><Icon name="fluent:bed-24-regular" class="w-8 h-8" /> {{ villa.rooms }}</div>
            <p class="text-center font-bold">Chambres</p>
          </div>
          <div>
            <div class="flex items-center justify-center gap-4 text-lg"><Icon name="fluent-emoji-high-contrast:bathtub" class="w-8 h-8" /> {{ villa.bathrooms }}</div>
            <p class="text-center font-bold">Salle de bain</p>
          </div>
        </div>
        <div class="grow">
          <p v-for="paragraph in villa.description" class="lg:text-lg text-justify">
            {{ paragraph }}
          </p>
        </div>
        <div class="flex justify-center gap-8">
          <a target="_blank" :href="`/images/villas/${villa.name}/plan.pdf`" class="border-2 border-darkBlue text-darkBlue p-4 rounded-xl font-bold">Voir le plan</a>
          <button class="border-2 border-darkBlue text-darkBlue p-4 rounded-xl font-bold" @click="showAskEmailModal = true">Demander un devis</button>
        </div>
      </div>
    </div>
    <Modal :isOpen="showAskEmailModal" @close="showAskEmailModal = false">
      <Transition name="fade" mode="out-in">
        <div v-if="!mailSent" class="w-full h-full overflow-hidden flex flex-col justify-center items-center gap-4">
          <form class="flex w-full flex-col justify-center items-center gap-4" @submit.prevent="generateEstimate">
            <h2 class="text-darkBlue font-nunito text-2xl">Entrez vos coordonnées pour recevoir un devis</h2>
            <div class="flex flex-col gap-[.5rem] w-full">
              <label class="label font-averta text-lg font-semibold" for=""> Nom:</label>
              <input class="py-3 bg-white border-b" v-model="lastName" type="text" placeholder="Dupont" />
            </div>
            <div class="flex flex-col gap-[.5rem] w-full">
              <label class="label font-averta text-lg font-semibold" for=""> Prénom:</label>
              <input class="py-3 bg-white border-b" v-model="firstName" type="text" placeholder="Eric" />
            </div>
            <div class="flex flex-col gap-[.5rem] w-full">
              <label class="label font-averta text-lg font-semibold" for=""> Email:</label>
              <input class="py-3 bg-white border-b" v-model="email" type="email" placeholder="email@example.com" />
            </div>
            <button type="submit" class="border-2 border-darkBlue text-darkBlue p-4 rounded-xl font-bold w-full lg:w-1/2">
              Demander un devis
              <span v-if="!sendingMail"><Icon name="line-md:loading-loop h-4 w-4" /></span>
            </button>
          </form>
        </div>
        <div v-else class="w-full h-full flex justify-center items-center">
          <p class="text-darkBlue font-nunito text-2xl">Un mail vient de vous être envoyé</p>
          <p></p>
        </div>
      </Transition>
    </Modal>
  </div>
  <div v-else class="bg-darkBlue text-white w-full min-h-screen overflow-x-hidden pt-[calc(10vh+2rem)] px-[2.5vw]">Désolé, impossible de trouver le modèle de villa recherché</div>
</template>

<script setup lang="ts">
import villasList from "@/assets/villas.json";
const route = useRoute();
const villaName: string = route.params.name as string;
const villa = villasList.find((villa) => villa.name === villaName);
const material = ref<"beton" | "bois">("beton");

const showAskEmailModal = ref(false);
const email = ref("");
const firstName = ref("");
const lastName = ref("");
const mailSent = ref(false);
const sendingMail = ref(false);

watch(showAskEmailModal, () => {
  mailSent.value = false;
  sendingMail.value = false;
});

const { sendMail } = useMailer();
const generateEstimate = async () => {
  sendingMail.value = true;
  const response = await $fetch<string>("/api/generate-estimate", {
    method: "POST",
    body: { name: `${firstName.value} ${lastName.value}` },
  });

  // Télécharger ou afficher le PDF
  // const blob = new Blob([response], { type: "application/pdf" });
  // const url = URL.createObjectURL(blob);
  // window.open(url);

  const mailStatus = await sendMail({
    to: email.value,
    subject: "Votre devis",
    text: `Madame, Monsieur, \nNous vous remercions de votre intérêt pour Villa Azur. Vous trouverez ci-joint un devis pour le modèle ${villaName}.`,
    attachment: response,
  });
  console.log(mailStatus);
  mailSent.value = true;
  sendingMail.value = false;
};
</script>

<style scoped></style>
