import { useRef, useState } from 'react';
import { useAddNewParticipant } from 'state/hooks/useAddNewParticipant';
import { useErrorMessage } from 'state/hooks/useErrorMessage';

export const Form = () => {
  const [participantName, setParticipantName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const addNewParticipant = useAddNewParticipant();

  const errorMessage = useErrorMessage();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewParticipant(participantName);
    setParticipantName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={(event) => addParticipant(event)}>
      <div className="mb-8">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter participant names"
          value={participantName}
          onChange={(event) => setParticipantName(event.target.value)}
          className="block rounded-[45px] h-20 w-full box-border pl-8 text-xl border-2 border-solid border-black shadow-[0px_2px_0px_1px_#000] mb-5 focus:outline-none medium:inline medium:rounded-r-[0] medium:rounded-l-[45px] medium:w-[70%] medium:shadow-[0px_2px_0px_1px_#000] medium:m-0"
        />
        <button
          disabled={!participantName}
          className="block mt-4 mx-auto w-56 rounded-[45px] h-20 box-border border-2 border-solid border-black text-xl text-black shadow-[2px_2px_0px_1px_#000] cursor-pointer bg-[#c4c4c4] hover:opacity-[0.8] disabled:opacity-[0.6] disabled:cursor-not-allowed medium:inline medium:m-0 medium:w-[30%] medium:rounded-l-[0] medium:rounded-r-[45px]"
        >
          Adicionar
        </button>
      </div>
      {errorMessage && (
        <p
          role="alert"
          className="text-[#842029] bg-[#f8d7da] p-4 border-[1px] border-solid border-[#f5c2c7] rounded-lg my-12 mx-0 medium:m-0"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
};
