<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BaseCard :data="tank"/>
  </div>
</template>

<script>
import BaseCard from './components/BaseCard.vue';

export default {
  name: 'App',
  data: () => (
    {
      tank: {
        name: 'Tank',
        stats: [
          { name: 'STR', value: 3 },
          { name: 'STR', value: 3 },
        ],
      },
    }
  ),
  created() {
    this.$store.dispatch('getInitialStats');
  },
  components: {
    BaseCard,
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
</style>
