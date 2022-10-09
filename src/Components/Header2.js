import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// 리액트에 background-image > url() 참고
import logo_dark from "../Assets/logo_dark.svg"
import logo_light from "../Assets/logo.svg"

const Header2 = () => {
    const [changeLogo, setChangeLogo] = useState(`url(${logo_dark})`);
    const [changeColor, setChangeColor] = useState('#FFFFFF');
    const [changeFontColor, setChangeFontColor] = useState('#6F3AC1');
    const [changeHeaderShow, setChangeHeaderShow] = useState('');
    const [changeHeaderTransfrom, setChangeHeaderTransfrom] = useState('translateY(0px)');

    useEffect(() => {
        window.addEventListener('scroll', changeHeader, { capture: true });

    }, []);

    // 스크롤 작동 중 내리거나 올리는 중인지 체크
    let prevScrollTop = 0;
    let nowScrollTop = 0;

    let wheelDelta = () => {
        return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
    }

    const changeHeader = () => {
        nowScrollTop = window.scrollY;
        if (wheelDelta() == 'down') {
            if (window.scrollY >= 1000) {
                setChangeHeaderTransfrom('translateY(-100px)');
            }
        }
        if (wheelDelta() == 'up') {
            setChangeHeaderTransfrom('translateY(0px)');
        }
        prevScrollTop = nowScrollTop;


        if (window.scrollY <= 0) {
        }

        else {
            setChangeFontColor('#6F3AC1');
        }
    }

    return (
        <div
            className="header"
            id='/'

            style={{
                backgroundColor: changeColor,
                display: changeHeaderShow,
                transform: changeHeaderTransfrom,
                borderColor: '#232323',
                borderBottom: '1px solid'
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

export default Header2;