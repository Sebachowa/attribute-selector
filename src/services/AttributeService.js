import Character from '@/domain/Character';

class AttributeService {
  // eslint-disable-next-line class-methods-use-this
  async getInitialStats() {
    const response = await fetch('https://fighters-api.herokuapp.com/fighters');
    const parsedResponse = await response.json();

    const characters = parsedResponse.characters.map((c) => new Character(c.name, c.stats));

    return {
      ...parsedResponse,
      characters,
    };
  }
}

export default new AttributeService();
