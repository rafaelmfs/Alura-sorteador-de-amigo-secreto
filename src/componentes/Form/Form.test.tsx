import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Form } from '.';

//Jest

test('when input is empty, new participants cannot be added', () => {
  //
  render(<Form />);

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
