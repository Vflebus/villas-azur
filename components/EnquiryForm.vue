!
<template>
  <form class="flex w-full flex-col justify-center items-center gap-4" @submit.prevent="sendEnquiry">
    <div class="flex flex-col lg:flex-row w-full gap-4 lg:gap-16">
      <div class="flex flex-col gap-[.5rem] w-full">
        <label class="label font-averta text-lg font-semibold" for="firstName">Prénom:</label>
        <input class="py-3 bg-white border-b focus:outline-0 text-lg" v-model="firstName" type="text" placeholder="Votre prénom" id="firstName" />
      </div>
      <div class="flex flex-col gap-[.5rem] w-full">
        <label class="label font-averta text-lg font-semibold" for="lastName">Nom:</label>
        <input class="py-3 bg-white border-b focus:outline-0 text-lg" v-model="lastName" type="text" placeholder="Votre nom" id="lastName" />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full gap-4 lg:gap-16">
      <div class="flex flex-col gap-[.5rem] w-full">
        <label class="label font-averta text-lg font-semibold" for="email">Email:</label>
        <input class="py-3 bg-white border-b focus:outline-0 text-lg" v-model="email" type="email" placeholder="Votre adresse mail" id="email" />
      </div>
      <div class="flex flex-col gap-[.5rem] w-full">
        <label class="label font-averta text-lg font-semibold" for="phone">Téléphone:</label>
        <input class="py-3 bg-white border-b focus:outline-0 text-lg" v-model="phone" type="tel" placeholder="Votre numéro de téléphone" id="phone" />
      </div>
    </div>
    <div class="flex flex-col gap-[.5rem] w-full">
      <label class="label font-averta text-lg font-semibold" for="message">Message:</label>
      <textarea class="py-3 bg-white border-b focus:outline-0 text-lg" v-model="enquiry" cols="40" rows="5" placeholder="Votre message" id="message"></textarea>
    </div>
    <p v-if="mailSent" class="italic self-start">Votre demande a bien été envoyée, nous vous recontacterons dans les meilleurs délais.</p>
    <button v-else type="submit" class="border-2 border-darkBlue text-darkBlue p-4 rounded-xl font-bold self-start">Envoyer</button>
  </form>
</template>

<script setup lang="ts">
interface Props {
  subject: string;
}
const props = defineProps<Props>();
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const enquiry = ref("");
const mailSent = ref(false);

const { sendMail } = useMailer();
const sendEnquiry = async () => {
  console.log("sending enquiry");
  const mailStatus = await sendMail({
    to: "vflebus@gmail.com",
    subject: `Nouvelle demande: ${props.subject}, ${firstName.value} ${lastName.value}`,
    text: `Vous avez reçu une nouvelle demande de ${props.subject}: \nClient: ${firstName.value} ${lastName.value} \nEmail: ${email.value} \nTéléphone: ${phone.value} \n\nDemande:\n${enquiry.value}`,
    html: `<h1>Vous avez reçu une nouvelle demande de plan:</h1><p><b>Client: </b>${firstName.value} ${lastName.value}</p><p><b>Email: </b>${email.value}</p><p style="white-space: pre-line;"><b>Demande: <br/></b>${enquiry.value}</p>`,
  });
  console.log(mailStatus);
  mailSent.value = true;
};
</script>

<style scoped></style>
