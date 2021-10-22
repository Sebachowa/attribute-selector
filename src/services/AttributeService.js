class AttributeService {
  static getInitialStats() {
    return {
      maxPoints: 30,
      minPointsByStat: 1,
      maxPointsByStat: 10,
      characters: [{
        name: 'Tank',
        stats: [
          { name: 'STR', value: 3 },
          { name: 'DEX', value: 3 },
          { name: 'CON', value: 3 },
          { name: 'LUC', value: 3 },
        ],
      }, {
        name: 'Assassin',
        stats: [
          { name: 'STR', value: 3 },
          { name: 'DEX', value: 3 },
          { name: 'CON', value: 3 },
          { name: 'LUC', value: 3 },
        ],
      }, {
        name: 'Wizard',
        stats: [
          { name: 'STR', value: 3 },
          { name: 'DEX', value: 3 },
          { name: 'CON', value: 3 },
          { name: 'LUC', value: 3 },
        ],
      }],
    };
  }
}

export default new AttributeService();
