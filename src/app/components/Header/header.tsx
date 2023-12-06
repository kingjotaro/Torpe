import React from 'react'
import NavbarButton from '../MobileNavbarButton/NavbarButton'

const header = () => {
    return (
        <nav>

            <div className='flex justify-between '>
                <h1>login and support</h1>
                <NavbarButton />
            </div>

        </nav>

    )
}

export default header