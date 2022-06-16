import { raffleSecretFriend } from './raffleSecretFriend';

describe('secret friend giveaway', () => {
  it('the participant cannot sortition his own name', () => {
    const participants = ['Ana', 'Catarina', 'Juliana', 'João', 'Vinícius', 'Nathália'];
    const sortition = raffleSecretFriend(participants);

    participants.forEach((participant) => {
      const secretFriend = sortition.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
