import { useListOfParticipants } from 'state/hooks/useListOfParticipants';

export const ListOfParticipants = () => {
  const participants: string[] = useListOfParticipants();
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};
