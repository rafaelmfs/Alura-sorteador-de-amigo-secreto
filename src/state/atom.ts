import { atom } from 'recoil';

export const listOfParticipantsState = atom<string[]>({
  key: 'ListOfParticipantsState',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
