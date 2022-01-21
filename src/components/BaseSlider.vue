<template>
  <fieldset>
    <legend>{{ data }}</legend>
    <input type="number" name=""
    :id="`stat-${id}`"
    :value="value"
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
};
</script>
