/* eslint-disable class-methods-use-this */
class AttributeService {
  // constructor() {}

  getInitialStats() {
    return {
      tank: {
        name: 'Tank',
        stats: [
          { name: 'STR', value: 3 },
          { name: 'STR', value: 3 },
        ],
      },
    };
  }
}

export default new AttributeService();
