import React from 'react'
import NavbarButton from '../MobileNavbarButton/NavbarButton'
import ButtonLogin from '../MobileNavbarButton/buttonLogin/buttonLogin'

export default function header() {
    return (
        <nav>

            <div className='flex justify-between '>
                <ButtonLogin></ButtonLogin>
                <NavbarButton />
            </div>

        </nav>

    )
}

