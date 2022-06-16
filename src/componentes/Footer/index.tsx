import { useNavigate } from 'react-router-dom';
import { useListOfParticipants } from 'state/hooks/useListOfParticipants';

export const Footer = () => {
  const participants = useListOfParticipants();
  const navigateTo = useNavigate();

  return (
    <footer className=" w-full flex flex-col items-center justify-between medium:flex-row">
      <button
        disabled={participants.length < 3}
        onClick={() => navigateTo('/sortition')}
        className="w-56 h-20 text-xl shadow-[2px_2px_0px_1px_#000] rounded-[45px] bg-[#fe652b] text-white cursor-pointer my-8 mx-0 disabled:opacity-[0.6] disabled:cursor-not-allowed hover:bg-[#4b69fd] medium:m-0 medium:w-[350px]"
      >
        <span>Iniciar brincadeira</span>
      </button>
      <img src="imagens/sacolas.png" alt="sacolas de compras" />
    </footer>
  );
};
