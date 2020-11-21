<template>
  <tr>
    <td>{{ title }}</td>
    <td>
      <input type="text" :placeholder="placeholder" v-model="inputValue" />
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    propValue: {
      type: String,
      required: true
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.$props.propValue;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>

<style></style>
