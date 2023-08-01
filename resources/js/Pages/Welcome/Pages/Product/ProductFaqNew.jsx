import React from 'react'
import { useState } from 'react'
import { FaqsNew } from '../../Components/Component'

const FaqSecNew = () => {

    const faqItem1 = () => {

        return (
            <>
                <p>The Battery life is so good, it cleaned the whole house. Would definitely recommend this robot it does exactly what it says it will do.</p>
            </>
        )
    }

    const faqItem2 = () => {

        return (
            <>
                <p>The Battery life is so good, it cleaned the whole house. Would definitely recommend this robot it does exactly what it says it will do.</p>
            </>
        )
    }

    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const handleDropdownClick = (index) => {
        setOpenDropdownIndex((prevIndex) => {
            if (prevIndex === index) {
                // Clicked on the same dropdown, close it
                return null;
            } else {
                // Clicked on a different dropdown, open it
                return index;
            }
        });
    };

    return (
        <div className="faqSec">
            <div className="faqSecHeading">
                <h2>The Smart Way To Clean Your Home</h2>
            </div>
            <FaqsNew
                dropDownMain="Amazing Battery"
                dropDownMainSmall="aLEX on Mar 12, 2020"
                dropDownContent={faqItem1()}
                isOpen={openDropdownIndex === 0}
                onClick={() => handleDropdownClick(0)}
            />
            <FaqsNew
                dropDownMain="Worth the price"
                dropDownMainSmall="John on APRIL 25, 2022"
                dropDownContent={faqItem2()}
                isOpen={openDropdownIndex === 1}
                onClick={() => handleDropdownClick(1)}
            />
            <FaqsNew
                dropDownMain="Amazing Battery"
                dropDownMainSmall="aLEX on Mar 12, 2020"
                dropDownContent={faqItem1()}
                isOpen={openDropdownIndex === 2}
                onClick={() => handleDropdownClick(2)}
            />
            <FaqsNew
                dropDownMain="Worth the price"
                dropDownMainSmall="John on APRIL 25, 2022"
                dropDownContent={faqItem2()}
                isOpen={openDropdownIndex === 3}
                onClick={() => handleDropdownClick(3)}
            />
        </div>
    )
}

export default FaqSecNew