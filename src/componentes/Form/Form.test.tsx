import { render, screen } from '@testing-library/react';
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
