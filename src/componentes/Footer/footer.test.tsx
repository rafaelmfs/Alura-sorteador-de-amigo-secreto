import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Footer } from '.';
import { useListOfParticipants } from 'state/hooks/useListOfParticipants';

jest.mock('state/hooks/useListOfParticipants', () => {
  return {
    useListOfParticipants: jest.fn(),
  };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('when there are not enough participants', () => {
  beforeEach(() => {
    (useListOfParticipants as jest.Mock).mockReturnValue([]);
  });

  it('should not be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

describe('when there are enough participants', () => {
  beforeEach(() => {
    (useListOfParticipants as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina']);
  });

  it('can be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
  });

  it('the joke has started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/sortition');
  });
});
