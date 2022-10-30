<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <transition mode="in-out">
      <div v-if="isOpen" class="w-full mt-5">
        <slot>
          <p>Whoops, somebody forgot to populate me!</p>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AccordionComp",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
