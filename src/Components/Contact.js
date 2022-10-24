import React, { useEffect, useState } from 'react';
import { Link as LinkToRegsiter } from 'react-scroll';
import { Link } from 'react-router-dom';
import contactBtn from "../Assets/contactBtn.svg"

const Contact = () => {
    const [displayValue, setDisplayValue] = useState('none');

    useEffect(() => {
        window.addEventListener('scroll', DisplayOn, { capture: true });
    }, []);

    const DisplayOn = () => {
        if (window.scrollY <= 0) {
            setDisplayValue('none');
        }
        else {
            setDisplayValue('');
        }
    }
    // LinkToRegister 도입 문의 새페이지로 이동
    return (
        <div className="ContactWrap">
            <Link
                className='ContactBtn'
                to='/contact'
                style={{
                    backgroundImage: `url(${contactBtn})`,
                    display: displayValue
                }}
            >
                <div className='customP3'>
                    도입문의
                </div>
            </Link>
            <LinkToRegsiter
                className="ContactSliderBtn"
                to='/'
                spy={true}
                smooth={true}
                style={{
                    cursor: 'pointer',
                    display: displayValue,
                }}>
                <h1>
                </h1>
            </LinkToRegsiter>
        </div>
    );
}

export default Contact;