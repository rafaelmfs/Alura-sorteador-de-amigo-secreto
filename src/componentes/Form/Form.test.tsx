import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Form } from '.';

//Jest

describe('testing the behavior of the Form component', () => {
  test('when input is empty, new participants cannot be added', () => {
    //
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );

    //Encontrar o input no DOM
    const input = screen.getByPlaceholderText('Enter participant names');
    //Encontrar o botão
    const button = screen.getByRole('button');
    //Espero que o input esteja no documento
    expect(input).toBeInTheDocument();
    //Espero que o botão esteja desabilitado
    expect(button).toBeDisabled();
  });

  test('add a participant if there is a name filled in', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );
    //Encontrar o input no DOM
    const input = screen.getByPlaceholderText('Enter participant names');
    //Encontrar o botão
    const button = screen.getByRole('button');

    //inseriri um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    //clicar no botão submit
    fireEvent.click(button);
    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    //garantir que o input não tenha um valor
    expect(input).toHaveValue('');
  });

  test('Duplicate names are not allowed', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );

    const input = screen.getByPlaceholderText('Enter participant names');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole('alert');

    expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos!');
  });

  test('the error message should go away after the timers', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );

    const input = screen.getByPlaceholderText('Enter participant names');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();

    //esperar N segundos;
    act(() => {
      /* fire events that update state */
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
