import { useState } from 'react';
import { useListOfParticipants } from 'state/hooks/useListOfParticipants';
import { useRaffleResult } from 'state/hooks/useRaffleResult';

export const SortitionPage = () => {
  const participants = useListOfParticipants();

  const [participantSelected, setParticipantSelected] = useState('');
  const [secretFriend, setSecretFriend] = useState('');

  const result = useRaffleResult();

  const raffle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(result);
    if (result.has(participantSelected)) {
      setSecretFriend(result.get(participantSelected)!);
    }
  };

  return (
    <section>
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={raffle}>
        <select
          required
          name="participantSelect"
          id="participantSelect"
          placeholder="Selecione o seu nome"
          value={participantSelected}
          onChange={(event) => setParticipantSelected(event.target.value)}
          className="w-full rounded-[45px] h-20 box-border py-0 px-8 text-xl border-2 border-solid border-black shadow-[0px_2px_0px_1px_#000] medium:w-[70%] focus:outline-none"
        >
          <option>Selecione seu nome</option>
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
        <p className="text-xl font-bold my-8 mx-0">Clique em sortear para ver quem é seu amigo secreto!</p>
        <button className="w-56 h-20 text-xl shadow-[2px_2px_0px_1px_#000] rounded-[45px] bg-[#fe652b] text-white cursor-pointer my-8 mx-0 medium:my-4 medium:mx-0 medium:w-[350px] disabled:opacity-[0.6] disabled:cursor-not-allowed hover:bg-[#4b69fd]">
          Sortear
        </button>
      </form>
      {secretFriend && (
        <p role="alert" className="text-[#fe652bfc] text-2xl">
          {secretFriend}
        </p>
      )}
      <footer className="my-16 mx-0 flex justify-center">
        <img src="imagens/aviao.png" alt="Um desenho de um avião de papel" />
      </footer>
    </section>
  );
};
