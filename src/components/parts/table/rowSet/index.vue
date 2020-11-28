<template>
  <tr>
    <td>{{ title }}</td>
    <td>
      <!-- v-modelは「:value="text" @input="text = $event.target.value" -->
      <input
        type="text"
        :placeholder="placeholder"
        :value="propValue"
        @input="$emit('update:propValue', $event.target.value)"
      />
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
  }
  // computed: {
  //   inputValue: {
  //     get() {
  //       return this.$props.propValue;
  //     },
  //     set(value) {
  //       this.$emit('input', value);
  //     }
  //   }
  // }
};
</script>

<style></style>
