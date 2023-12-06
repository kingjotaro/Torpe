import React from 'react';
import { fireEvent, render, waitFor} from '@testing-library/react';
import NavbarButton from './NavbarButton';
import {it} from 'vitest'


  it('deve renderizar o componente', async () => {
     const {getByText, getByAltText   } = render(<NavbarButton />);
     const svgElement = getByAltText('menu SVG');
     fireEvent.click(svgElement)
     const buttonInicio = getByText('Inicio')

    });
  


