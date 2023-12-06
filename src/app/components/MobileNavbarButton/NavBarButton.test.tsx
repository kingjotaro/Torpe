import React from 'react';
import { fireEvent, render, waitFor} from '@testing-library/react';
import NavbarButton from './NavbarButton';
import {it} from 'vitest'


  it('should open the dropdown menu with "Inicio" option after being clicked', async () => {
     const {getByText, getByAltText   } = render(<NavbarButton />);
     const svgElement = getByAltText('menu SVG');
     fireEvent.click(svgElement)
     const buttonInicio = getByText('Inicio')

    });
  


