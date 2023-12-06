import React from 'react'
import NavbarButton from '../MobileNavbarButton/NavbarButton'
import ButtonLogin from '../ButtonLogin/ButtonLogin'
import ButtonSupport from '../ButtonSupport/ButtonSupport'

export default function header() {
    return (
        <nav>

            <div className='flex justify-between bg-purple-100 '>
                <ButtonLogin/>
                <ButtonSupport/>

                <NavbarButton />
            </div>

        </nav>

    )
}

