import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  test('A imagem do pokemon possui o src e alt correto', () => {
    renderWithRouter(<App />);
    const imgPokemon = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
    expect(imgPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imgPokemon).toHaveAttribute('alt', 'Pikachu sprite');
  });
  test('A imagem de favorito star possui o src /star-icon.svg', () => {
    const { history } = renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(linkMoreDetails);
    act(() => {
      history.push('/pokemons/25');
    });
    const checkBox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(checkBox);
    const favoritoStarSrc = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(favoritoStarSrc).toHaveAttribute('src', '/star-icon.svg');
    expect(favoritoStarSrc).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });

  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type');

    expect(type.innerHTML).toBe('Electric');
  });
  test('É exibido na tela um link com o href /pokemons/<id>', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(linkDetails).toHaveAttribute('href', '/pokemons/25');
  });
});
