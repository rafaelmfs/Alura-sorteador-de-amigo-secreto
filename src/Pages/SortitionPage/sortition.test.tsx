import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListOfParticipants } from 'state/hooks/useListOfParticipants';
import { useRaffleResult } from 'state/hooks/useRaffleResult';
import { SortitionPage } from '.';

jest.mock('state/hooks/useListOfParticipants', () => {
  return {
    useListOfParticipants: jest.fn(),
  };
});
jest.mock('state/hooks/useRaffleResult', () => {
  return {
    useRaffleResult: jest.fn(),
  };
});

describe('The Sortition page', () => {
  const participants = ['Ana', 'Catarina', 'Jorel'];
  const result = new Map([
    ['Ana', 'Jorel'],
    ['Jorel', 'Catarina'],
    ['Catarina', 'Ana'],
  ]);

  beforeEach(() => {
    (useListOfParticipants as jest.Mock).mockReturnValue(participants);
    (useRaffleResult as jest.Mock).mockReturnValue(result);
  });

  it('All participants can show their secret friends', () => {
    render(
      <RecoilRoot>
        <SortitionPage />
      </RecoilRoot>,
    );

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length + 1);
  });

  test('the secret friend is displayed when prompted', () => {
    render(
      <RecoilRoot>
        <SortitionPage />
      </RecoilRoot>,
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');
    expect(secretFriend).toBeInTheDocument();
  });
});
