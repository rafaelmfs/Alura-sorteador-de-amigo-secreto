import { useRecoilValue } from 'recoil';
import { listOfParticipantsState } from 'state/atom';

export const useListOfParticipants = () => {
  return useRecoilValue(listOfParticipantsState);
};
