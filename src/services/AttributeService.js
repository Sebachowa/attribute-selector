class AttributeService {
  // eslint-disable-next-line class-methods-use-this
  getInitialStats() {
    return {
      maxPoints: 30,
      minPointsByStat: 1,
      maxPointsByStat: 10,
      characters: [
        {
          name: 'Assassin',
          stats: [
            {
              name: 'STR',
              value: 9,
            },
            {
              name: 'VIT',
              value: 2,
            },
            {
              name: 'DEF',
              value: 1,
            },
            {
              name: 'DEX',
              value: 9,
            },
            {
              name: 'LUCK',
              value: 9,
            },
          ],
        },
        {
          name: 'Knight',
          stats: [
            {
              name: 'STR',
              value: 6,
            },
            {
              name: 'VIT',
              value: 6,
            },
            {
              name: 'DEF',
              value: 6,
            },
            {
              name: 'DEX',
              value: 6,
            },
            {
              name: 'LUCK',
              value: 6,
            },
          ],
        },
        {
          name: 'Tank',
          stats: [
            {
              name: 'STR',
              value: 5,
            },
            {
              name: 'VIT',
              value: 10,
            },
            {
              name: 'DEF',
              value: 10,
            },
            {
              name: 'DEX',
              value: 2,
            },
            {
              name: 'LUCK',
              value: 3,
            },
          ],
        },
      ],
    };
  }
}

export default new AttributeService();
