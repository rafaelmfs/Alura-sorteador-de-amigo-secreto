import { useRecoilValue } from 'recoil';
import { listOfParticipantsState } from 'state/atom';

export const Header = () => {
  const list = useRecoilValue(listOfParticipantsState);
  console.log(list);

  return (
    <header className="flex flex-col pt-16 items-center justify-between medium:pt-[104px] medium:justify-around medium:flex-row mx-auto">
      <div
        className="bg-small-logo w-[235px] h-[199px] medium:bg-logo medium:w-[351px] medium:h-[117px] medium:-mt-48 z-20"
        role="img"
        aria-label="logo do Sorteador"
      ></div>
      <img className="z-10 w-auto" src="imagens/participante.png" alt="Participante com um presente na mão" />
    </header>
  );
};
