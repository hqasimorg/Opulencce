import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { SecImg } from '../img/AllImages';
import { Faqs } from '../../Components/Component';
import { useState } from 'react';

const FaqSec = ({ FaqSecHeading }) => {

    const faqItem1 = () => {

        return (
            <>
                <p>1. Spritz<br /> Spritz 3-5 sprays into the bowl to create a film on the water’s surface.</p>
                <p>2. Poo<br /> The barrier traps 99% of odor below the surface, before it ever begins.</p>
                <p>3. Sniff<br /> All you’ll smell is a refreshing bouquet of natural essential oils.</p>
            </>
        )
    }

    const faqItem2 = () => {

        return (
            <>
                <p>We care about your health, your toilet, and this precious world we poop in. That’s why we use NO synthetic fragrance, parabens, phthalates, aerosols, alcohol, or formaldehyde—ALL stink-fightin’ good stuff (oh, and a pinch of magic).</p>
                <p>Proudly made in the good ole' U. S. of A.</p>
            </>
        )
    }
    const faqItem3 = () => {

        return (
            <>
                <p>Precautions: No parabens or phthalates. Avoid eye contact. For external use only; do not ingest. Use in well ventilated area. Keep away from children. Never tested on animals (only stinky humans).</p>
            </>
        )
    }
    const faqItem4 = () => {

        return (
            <>
                <p>Top: Bergamot, Grapefruit, Lemon, Mandarin, Litsea Cubeba, Cassis</p>
                <p>Middle: White Tea, Violet, Ginger, Eucalyptus, Lemongrass, Thyme, Ylang, Rose</p>
                <p>Bottom: Vanilla, Amber, Patchouli</p>
            </>
        )
    }
    const faqItem5 = () => {

        return (
            <>
                <ul>
                    <li>10ml - Up to 20 uses</li>
                    <li>2oz - Up to 100 uses</li>
                    <li>4oz - Up to 200 uses</li>
                    <li>8oz - Up to 400 uses</li>
                </ul>
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
                {FaqSecHeading}
            <Faqs
                dropDownMain="How It Works"
                dropDownContent={faqItem1()}
                isOpen={openDropdownIndex === 0}
                onClick={() => handleDropdownClick(0)}
            />
            <Faqs
                dropDownMain="What's Inside"
                dropDownContent={faqItem2()}
                isOpen={openDropdownIndex === 1}
                onClick={() => handleDropdownClick(1)}
            />
            <Faqs
                dropDownMain="Safety + Warnings"
                dropDownContent={faqItem3()}
                isOpen={openDropdownIndex === 2}
                onClick={() => handleDropdownClick(2)}
            />
            <Faqs
                dropDownMain="Scent Notes"
                dropDownContent={faqItem4()}
                isOpen={openDropdownIndex === 3}
                onClick={() => handleDropdownClick(3)}
            />
            <Faqs
                dropDownMain="Size Guide"
                dropDownContent={faqItem5()}
                isOpen={openDropdownIndex === 4}
                onClick={() => handleDropdownClick(4)}
            />
        </div>
    )
}

export default FaqSec
