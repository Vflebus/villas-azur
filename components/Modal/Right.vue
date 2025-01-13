<template>
  <ClientOnly>
    <Transition name="fade">
      <div v-if="isOpen" class="fixed top-0 right-0 w-screen h-screen bg-black/50 z-[998]" @click="$emit('close')"></div>
    </Transition>
    <Transition name="modal-right">
      <div v-if="isOpen" class="w-full h-screen lg:h-[unset] lg:w-[20vw] fixed top-0 right-0 z-[1000]">
        <div class="relative w-full h-full border border-[#EDEDED] bg-white flex flex-col gap-4 justify-center items-center shadow-xl z-[1000] modalContent overflow-hidden">
          <button class="absolute top-4 right-4 z-[1000]" @click="$emit('close')">
            <Icon name="material-symbols:close" class="w-11 h-11 text-primary cursor-pointer" />
          </button>
          <div class="h-full w-full overflow-auto py-16 px-4">
            <slot @close="closeModal"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
type Props = {
  isOpen: Boolean | undefined;
};
defineProps<Props>();
const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
