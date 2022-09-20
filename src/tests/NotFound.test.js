import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Link do topo da aplicação', () => {
  test(
    'É exibido na tela um h2 com o texto Page requested not found',
    () => {
      renderWithRouter(<NotFound />);
      const notFound = screen.getByRole('heading', {
        name: /page requested not found/i });
      expect(notFound).toBeInTheDocument();
    },
  );
  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<NotFound />);
    const notImage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(notImage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
