<template>
  <fieldset>
    <!-- <legend>{{ data }}</legend>
    <input type="number" name=""
    :id="`stat-${id}`"
    v-model="localValue"
     > -->

     <label :for="`stat-${id}`">{{ data }}</label>
    <b-form-input
      :id="`stat-${id}`"
      v-model="localValue"
      type="range"
      :min="min"
      :max="max"
      @change="handleSlide">
    </b-form-input>
    <div class="mt-2">Value: {{ localValue }}</div>

  </fieldset>
</template>

<script>

export default {
  name: 'BaseSlider',
  props: {
    data: String,
    id: String,
    value: Number,
    min: Number,
    max: Number,
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  methods: {
    handleSlide(e) {
      console.log(e);
    },
  },
  watch: {
    localValue() {
      this.$emit('input', Number(this.localValue, 10));
    },
  },
};
</script>
