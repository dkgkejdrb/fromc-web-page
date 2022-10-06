import React, { useEffect, useState } from 'react';
import { Link as LinkToRegsiter } from 'react-scroll';
import { Link } from 'react-router-dom';

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
            <Link className='ContactBtn' to='/ContactToRegister' target='_blank'>
                <div className='customP2'>
                    도입문의
                </div>
            </Link>
            <LinkToRegsiter className="ContactSliderBtn" to='/#home' spy={true} smooth={true} style={{ cursor: 'pointer', display: displayValue }}>
                <h1>
                </h1>
            </LinkToRegsiter>
        </div>
    );
}

export default Contact;