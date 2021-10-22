<template>
  <div id="app" class="container">
    <BaseCard v-for="(fighter, index) in fighters" :key="index" :data="fighter"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseCard from './components/BaseCard.vue';

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getInitialStats');
  },
  components: {
    BaseCard,
  },
  computed: {
    ...mapGetters(['fighters']),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 32px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 0px;
  }
}
</style>
