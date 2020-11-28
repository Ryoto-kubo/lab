<template>
  <input type="text" :name="name" :value="value" @input="input($event)" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      default: 0
    }
  },

  methods: {
    input(event) {
      if (event.target.value) {
        return this.$emit('emit-input', parseInt(event.target.value));
      } else {
        event.target.value = null;
        return this.$emit('emit-input', null);
      }
    }
  }
};
</script>
