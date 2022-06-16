import { useRecoilValue } from 'recoil';
import { errorState } from 'state/atom';

export const useErrorMessage = () => {
  const errorMessage = useRecoilValue(errorState);
  return errorMessage;
};
