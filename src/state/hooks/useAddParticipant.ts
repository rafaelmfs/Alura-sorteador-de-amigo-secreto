import { useSetRecoilState } from 'recoil';
import { listOfParticipantsState } from 'state/atom';

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listOfParticipantsState);
  return (participantName: string) => {
    return setList((prevList) => [...prevList, participantName]);
  };
};
