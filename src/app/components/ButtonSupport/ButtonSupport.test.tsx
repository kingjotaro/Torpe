import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest'
import ButtonSupport from './ButtonSupport';


it('should render this button', async () => {
    render(<ButtonSupport />);
});
