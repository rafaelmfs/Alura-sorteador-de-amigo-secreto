import { atom } from 'recoil';

export const listOfParticipantsState = atom<string[]>({
  key: 'ListOfParticipantsState',
  default: [],
});
