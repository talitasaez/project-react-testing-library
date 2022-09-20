import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <About.js />', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const about = screen.getByRole('heading', {
      name: /about pokédex/i,
    });
    expect(about).toBeInTheDocument();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
