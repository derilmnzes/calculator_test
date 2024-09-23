// Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ options, label, onSelect }) => {
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className=' w-full h-full'>
            <button className=' bg-blue-500 text-white  w-full py-2 h-full rounded-md'
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected || label}

            </button>

            {isOpen && (
                <ul className=' shadow-md mb-5'>
                    {options.map((option, index) => (
                        <li className=' flex items-center justify-center py-2 hover:bg-gray-100 cursor-pointer'
                            key={index}

                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
