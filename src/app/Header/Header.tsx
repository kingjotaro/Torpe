import React from 'react'
import NavbarButton from '../components/MobileNavbarButton/NavbarButton'
import ButtonLogin from '../components/ButtonLogin/ButtonLogin'
import ButtonSupport from '../components/ButtonSupport/ButtonSupport'

export default function Header() {
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

