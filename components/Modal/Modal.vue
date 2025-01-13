<template>
  <ClientOnly>
    <Transition name="fade">
      <div v-if="isOpen" class="fixed top-0 left-0 w-screen h-screen bg-black/50 z-999" @click="$emit('close')"></div>
    </Transition>
    <Transition name="modal-bottom">
      <div
        v-if="isOpen"
        class="w-full h-full lg:w-[80vw] xl:w-[40vw] lg:min-h-[20vh] lg:h-[unset] lg:max-h-[calc(90svh-5rem)] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#EDEDED] lg:rounded-xl flex flex-col justify-center items-center gap-4 shadow-xl z-[1000] overflow-hidden bg-white"
      >
        <div class="h-full w-full overflow-auto p-4">
          <button class="absolute top-4 right-4 z-1000">
            <Icon name="material-symbols:close" class="w-8 h-8 text-darkBlue cursor-pointer" :class="crossClass" @click="$emit('close')" />
          </button>
          <slot @close="closeModal"></slot>
        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
type Props = {
  isOpen: Boolean | undefined;
  crossClass?: string;
};
const props = defineProps<Props>();
const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
