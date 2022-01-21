<template>
  <div id="app" class="container">
    <BaseCard v-for="(fighter, index) in fighters" :key="`fighter-${index}`" :data="fighter"/>

    <BaseSlider v-for="(stat, index) in attributeList"
    :key="`stat-${index}`"
    :data="stat"
    :id="stat"
    :value="characterStats ? characterStats.stats[index].value : 0"
    />

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BaseCard from '@/components/BaseCard.vue';
import BaseSlider from '@/components/BaseSlider.vue';

export default {
  name: 'App',
  data() {
    return {
      characterStats: [],
    };
  },
  created() {
    this.$root.$on('selectStats', () => this.updateStats());
    this.$store.dispatch('getInitialStats');
  },
  methods: {
    updateStats() {
      this.characterStats = this.selectedCharacter;
    },
  },
  components: {
    BaseCard,
    BaseSlider,
  },
  computed: {
    ...mapState(['selectedCharacter']),
    ...mapGetters(['fighters', 'attributeList']),
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
