import React, {useEffect, useState} from 'react';
import { Link } from 'react-scroll';

const Contact = () => {
    const [displayValue, setDisplayValue] = useState('none');

    useEffect(() => { 
        window.addEventListener('scroll', DisplayOn, { capture : true });
}, []);

    const DisplayOn = () => {
        if(window.scrollY <=0 ) {
            setDisplayValue('none');
        }
        else {
            setDisplayValue('');
        }
    }

    return (
        <div className="ContactWrap">
            <a className="ContactBtn" href ='' target='_blank'>
                <span>
                    도입 문의
                </span>
            </a>
            <Link className="ContactSliderBtn" to='/#home' spy={true} smooth={true} style={{cursor:'pointer', display : displayValue}}>
                <h1>
                    ^
                </h1>
            </Link>
        </div>
    );
}

export default Contact;