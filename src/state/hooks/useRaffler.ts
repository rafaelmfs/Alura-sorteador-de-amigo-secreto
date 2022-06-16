import { useSetRecoilState } from 'recoil';
import { resultSecretFriend } from 'state/atom';
import { raffleSecretFriend } from 'state/helpers/raffleSecretFriend';
import { useListOfParticipants } from './useListOfParticipants';

export const useRaffler = () => {
  const participants = useListOfParticipants();
  const setResult = useSetRecoilState(resultSecretFriend);

  return () => {
    const result = raffleSecretFriend(participants);
    setResult(result);
  };
};
