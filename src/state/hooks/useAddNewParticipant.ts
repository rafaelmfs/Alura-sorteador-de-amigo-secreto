import { useRecoilState, useSetRecoilState } from 'recoil';
import { errorState, listOfParticipantsState } from 'state/atom';

export const useAddNewParticipant = () => {
  const [listOfParticipants, setListOfParticipants] = useRecoilState(listOfParticipantsState);
  const setErrorMessage = useSetRecoilState(errorState);

  return (participantName: string) => {
    if (listOfParticipants.includes(participantName)) {
      setErrorMessage('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }
    return setListOfParticipants((prevList) => [...prevList, participantName]);
  };
};
