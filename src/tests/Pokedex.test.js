import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const eletric = screen.getByRole('button', {
      name: /electric/i,
    });
    expect(eletric).toBeInTheDocument();

    const fire = screen.getByRole('button', {
      name: /fire/i,
    });

    expect(fire).toBeInTheDocument();

    const dragon = screen.getByRole('button', {
      name: /dragon/i,
    });
    expect(dragon).toBeInTheDocument();

    const bug = screen.getByRole('button', {
      name: /bug/i,
    });
    expect(bug).toBeInTheDocument();

    const poison = screen.getByRole('button', {
      name: /poison/i,
    });
    expect(poison).toBeInTheDocument();

    const psychic = screen.getByRole('button', {
      name: /psychic/i,
    });
    expect(psychic).toBeInTheDocument();

    const normal = screen.getByRole('button', {
      name: /normal/i,
    });
    expect(normal).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o data-testid exceto o botão All', () => {
    renderWithRouter(<App />);
    const id = screen.getAllByTestId('pokemon-type-button');
    const lengthId = 7;
    expect(id.length).toBe(lengthId);
  });

  test(
    'É possível clicar no botão de filtragem All',
    () => {
      renderWithRouter(<App />);

      const buttonAll = screen.getByRole('button', {
        name: /all/i });

      expect(buttonAll).toBeInTheDocument();
      userEvent.click(buttonAll);
    },
  );
});
