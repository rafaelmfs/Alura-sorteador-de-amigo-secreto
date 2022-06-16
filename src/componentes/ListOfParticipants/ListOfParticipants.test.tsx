import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListOfParticipants } from 'state/hooks/useListOfParticipants';
import { ListOfParticipants } from '.';

jest.mock('state/hooks/useListOfParticipants', () => {
  return {
    useListOfParticipants: jest.fn(),
  };
});

describe('An empty list of participants', () => {
  beforeEach(() => {
    (useListOfParticipants as jest.Mock).mockReturnValue([]);
  });
  test('', () => {
    render(
      <RecoilRoot>
        <ListOfParticipants />
      </RecoilRoot>,
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('A filled list of participants', () => {
  const participants = ['Ana', 'Catarina'];

  beforeEach(() => {
    (useListOfParticipants as jest.Mock).mockReturnValue(participants);
  });

  it('should the list be filled', () => {
    render(
      <RecoilRoot>
        <ListOfParticipants />
      </RecoilRoot>,
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participants.length);
  });
});
