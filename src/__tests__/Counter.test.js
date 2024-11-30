import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';

// Teste para o componente Counter
describe('Componente Counter', () => {
  // Testa se o componente é renderizado corretamente com o valor inicial
  it('renderiza corretamente com o valor inicial', () => {
    render(<Counter />);
    const valorDoContador = screen.getByTestId('counter-value');
    expect(valorDoContador).toHaveTextContent('Contador: 0');
  });

  // Testa se o contador é incrementado ao clicar no botão de incremento
  it('incrementa o contador ao clicar no botão de incremento', () => {
    render(<Counter />);
    const botaoIncremento = screen.getByTestId('increment-button');
    fireEvent.click(botaoIncremento);
    const valorDoContador = screen.getByTestId('counter-value');
    expect(valorDoContador).toHaveTextContent('Contador: 1');
  });

  // Testa se o contador é decrementado ao clicar no botão de decremento
  it('decrementa o contador ao clicar no botão de decremento', () => {
    render(<Counter />);
    const botaoDecremento = screen.getByTestId('decrement-button');
    fireEvent.click(botaoDecremento);
    const valorDoContador = screen.getByTestId('counter-value');
    expect(valorDoContador).toHaveTextContent('Contador: -1');
  });
});
