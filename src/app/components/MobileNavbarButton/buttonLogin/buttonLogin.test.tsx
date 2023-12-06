import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest'
import ButtonLogin from './buttonLogin';


it('should render this button', async () => {
    render(<ButtonLogin />);
});
