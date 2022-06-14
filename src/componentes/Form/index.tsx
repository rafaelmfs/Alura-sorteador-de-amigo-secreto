import { useRef, useState } from 'react';
import { useAddParticipant } from 'state/hooks/useAddParticipant';

export const Form = () => {
  const [participantName, setParticipantName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const addNewParticipant = useAddParticipant();

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
    </form>
  );
};
