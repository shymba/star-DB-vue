<template>
    <label>{{ label }}</label>
    <input
        class="form-input"
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>
export default {
  name: "SimpleForm",

  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}

</script>

<style scoped>

.form-input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid teal;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
}

</style>