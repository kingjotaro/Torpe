'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Dropdown from './components/dropdown';


function NavbarButton() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleButtonClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    /* trocar isso aqui por propriedades com funções ativas */
    const dropdownItems = ['Inicio', 'Produtos', 'Contato', 'Sobre'];

    return (
        <div className="relative inline-block text-left " >
            <button
                onClick={handleButtonClick}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                aria-expanded="true"
                aria-haspopup="true"
                id= '123'
            >
                <Image src='/menu.svg' alt='menu SVG' width={30} height={30} priority={true} />
            </button>

            <Dropdown isDropdownOpen={isDropdownOpen} dropdownItems={dropdownItems} />
        </div>
    );
}

export default NavbarButton;
