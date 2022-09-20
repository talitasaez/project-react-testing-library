import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Link do topo da aplicação', () => {
  test(
    'Teste se a aplicação é redirecionada para a página inicial ao clicar no link Home',
    () => {
      const { history } = renderWithRouter(<App />);

      const homeLink = screen.getByRole('link', { name: /Home/i });

      expect(homeLink).toBeInTheDocument();
      userEvent.click(homeLink);
      expect(history.location.pathname).toBe('/');
    },
  );

  test(
    'Teste se a aplicação é redirecionada para a página About  ao clicar no About',
    () => {
      const { history } = renderWithRouter(<App />);

      const aboutLink = screen.getByRole('link', { name: /About/i });

      expect(aboutLink).toBeInTheDocument();
      userEvent.click(aboutLink);
      expect(history.location.pathname).toBe('/about');
    },
  );

  test(
    'Teste se a aplicação é redirecionada Pokémons Favoritados ao clicar no Favorite',
    () => {
      const { history } = renderWithRouter(<App />);

      const favoritePokemonLink = screen.getByRole(
        'link',
        { name: /Favorite Pokémons/i },
      );

      expect(favoritePokemonLink).toBeInTheDocument();
      userEvent.click(favoritePokemonLink);
      expect(history.location.pathname).toBe('/favorites');
    },
  );
  // eslint-disable-next-line max-len
  test('Teste se a aplicação é redirecionada para a página Not Found  ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/rotanaoexiste');
    });
    expect(history.location.pathname).toBe('/rotanaoexiste');
  });
});
