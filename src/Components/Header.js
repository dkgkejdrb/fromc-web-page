import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


// `url("http://localhost:3000/static/media/logo_dark.33f2548f0ee97b8bae26.svg")`
// `url("http://localhost:3000/static/media/logo.d7c0e893d86a002903f5.svg`

// #6F3AC1


const Header = () => {
    const [changeLogo, setChangeLogo] = useState(`url(http://localhost:3000/static/media/logo.d7c0e893d86a002903f5.svg)`);
    const [changeColor, setChangeColor] = useState('');
    const [changeFontColor, setChangeFontColor] = useState('#FFFFFF');
    const [changeHeaderShow, setChangeHeaderShow] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', changeHeader, { capture: true });
        
    }, []);

    const changeHeader = () => {
        console.log(window.scrollY);
        if (window.scrollY <= 0) {
            setChangeLogo(`url(http://localhost:3000/static/media/logo.d7c0e893d86a002903f5.svg)`);
            setChangeColor('');
            setChangeFontColor('#FFFFFF');
        }

        else {
            setChangeLogo(`url(http://localhost:3000/static/media/logo_dark.33f2548f0ee97b8bae26.svg)`);
            setChangeColor('#FFFFFF')
            setChangeFontColor('#6F3AC1');
        }

        if (window.scrollY >= 900) {
            setChangeHeaderShow('none');
        } 

        // 다음에 구현
        else {
            setChangeHeaderShow('');
        }

    }

    return (
        <div 
            className="header" 
            id='/'
            
            style={{
                backgroundColor: changeColor,
                display: changeHeaderShow,
            }}
            >
            <div className="left">
                <Link 
                    to="/#home" 
                    className="logo"
                    style={{
                        backgroundImage: changeLogo,
                    }}
                    >                    
                </Link>
            </div>
            <div className="right">
                <Link to="/ProgramsPage" className="headerBtn1">
                    <span 
                        className='customP3'
                        style={{
                            color: changeFontColor
                        }}    
                    >프로그램</span>
                </Link>
                <Link to="/ContactToRegister" className="headerBtn2" target="_blank">
                    <span 
                        className='customP3'
                        style={{
                            color: changeFontColor
                        }}                       
                    >도입문의</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;