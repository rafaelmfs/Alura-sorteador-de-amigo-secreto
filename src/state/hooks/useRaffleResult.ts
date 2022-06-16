import { useRecoilValue } from 'recoil';
import { resultSecretFriend } from 'state/atom';

export const useRaffleResult = () => {
  return useRecoilValue(resultSecretFriend);
};
