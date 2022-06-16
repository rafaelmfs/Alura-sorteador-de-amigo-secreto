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
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter participant names"
        value={participantName}
        onChange={(event) => setParticipantName(event.target.value)}
      />
      <button disabled={!participantName}>Adicionar</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};
