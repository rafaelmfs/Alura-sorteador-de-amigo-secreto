import { atom } from 'recoil';

export const listOfParticipantsState = atom<string[]>({
  key: 'ListOfParticipantsState',
  default: [],
});

export const resultSecretFriend = atom<Map<string, string>>({
  key: 'ResultSecretFriend',
  default: new Map(),
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
