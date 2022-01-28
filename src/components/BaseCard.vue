<template>
  <article class="character">
    <h2>{{ data.name }}</h2>
    <article v-for="(stat, index) in data.stats" :key="index" class="stat">
      <h2>{{ stat.name }}</h2>
      <p>{{ stat.value }}</p>
    </article>
    <button v-on:click="selectCharacter">Select me!</button>
  </article>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    data: Object,
  },
  methods: {
    selectCharacter() {
      this.$store.dispatch('selectCharacter', this.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.character {
  border: 5px solid green;
}
.stat {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 0px;
}
</style>
