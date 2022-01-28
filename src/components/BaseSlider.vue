<template>
  <fieldset>
    <legend>{{ data }}</legend>
    <input type="number" name=""
    :id="`stat-${id}`"
    v-model="localValue"
     >

  </fieldset>
</template>

<script>

export default {
  name: 'BaseSlider',
  props: {
    data: String,
    id: String,
    value: Number,
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    localValue() {
      this.$emit('input', parseInt(this.localValue, 10));
    },
  },
};
</script>
