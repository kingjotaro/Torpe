import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest'
import ButtonLogin from './ButtonLogin';


it('should render this button', async () => {
    render(<ButtonLogin />);
});
