import React, { useEffect, useState } from 'react';
import { Link as LinkToRegsiter } from 'react-scroll';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [displayValue, setDisplayValue] = useState('none');
    // const [topBtn, setTopBtn] = useState(`url("http://localhost:3000/static/media/top%20button_dark.fb1142b4fc7ab3d30bdb.svg")`)

    useEffect(() => {
        window.addEventListener('scroll', DisplayOn, { capture: true });
        console.log(window.scrollY);
    }, []);

    const DisplayOn = () => {
        if (window.scrollY <= 0) {
            setDisplayValue('none');
            // setTopBtn(`url("http://localhost:3000/static/media/top%20button.300e7294f784336ebe74.svg")`)
        }
        else {
            setDisplayValue('');
            // setTopBtn(`url("http://localhost:3000/static/media/top%20button_dark.fb1142b4fc7ab3d30bdb.svg")`)
        }
    }
    // LinkToRegister 도입 문의 새페이지로 이동
    return (
        <div className="ContactWrap">
            <Link className='ContactBtn' to='/ContactToRegister' target='_blank'>
                <div className='customP3'>
                    도입문의
                </div>
            </Link>
            <LinkToRegsiter 
            className="ContactSliderBtn" 
            to='/#home' 
            spy={true} 
            smooth={true} 
            style={{ cursor: 'pointer', 
                     display: displayValue,
                    //  backgroundImage: topBtn,
                     }}>
                <h1>
                </h1>
            </LinkToRegsiter>
        </div>
    );
}

export default Contact;