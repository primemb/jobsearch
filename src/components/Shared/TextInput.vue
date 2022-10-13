<template>
  <input
    :id="inputId"
    type="text"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    inputId: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
