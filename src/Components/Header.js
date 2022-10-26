import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// 리액트에 background-image > url() 참고
import logo_dark from "../Assets/logo_dark.svg"
import logo_light from "../Assets/logo.svg"

const Header = () => {
    const [changeLogo, setChangeLogo] = useState(`url(${logo_light})`);
    const [changeColor, setChangeColor] = useState('');
    const [changeFontColor, setChangeFontColor] = useState('#FFFFFF');
    const [changeHeaderTransfrom, setChangeHeaderTransfrom] = useState('translateY(0px)');
    const [changeHeaderBtn1Weight, setChangeHeaderBtn1Weight] = useState('500');
    const [changeHeaderBtn1Highlight, setChangeHeaderBtn1Highlight] = useState('0');
    const [changeHeaderBtn2Weight, setChangeHeaderBtn2Weight] = useState('500');
    const [changeHeaderBtn2Highlight, setChangeHeaderBtn2Highlight] = useState('0');


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
        if (wheelDelta() === 'down') {
            if (window.scrollY >= 1000) {
                setChangeHeaderTransfrom('translateY(-100px)');
            }
        }
        if (wheelDelta() === 'up') {
            setChangeHeaderTransfrom('translateY(0px)');
        }
        prevScrollTop = nowScrollTop;


        if (window.scrollY <= 0) {
            setChangeLogo(`url(${logo_light})`);
            setChangeColor('');
            setChangeFontColor('#FFFFFF');
        }

        else {
            setChangeLogo(`url(${logo_dark})`);
            setChangeColor('#FFFFFF')
            setChangeFontColor('#6F3AC1');
        }
    }

    const headerBtnOverHandler = (e) => {
        if (e.target.className === 'customP3 btn1') {
            setChangeHeaderBtn1Highlight('2.5px solid #6F3AC1');
            setChangeHeaderBtn1Weight('700');
        } else if (e.target.className === 'customP3 btn2') {
            setChangeHeaderBtn2Highlight('2.5px solid #6F3AC1');
            setChangeHeaderBtn2Weight('700');
        }
    }

    const headerBtnOutHandler = (e) => {
        setChangeHeaderBtn1Highlight('0');
        setChangeHeaderBtn1Weight('500');
        setChangeHeaderBtn2Highlight('0');
        setChangeHeaderBtn2Weight('500');
    }

    return (
        <div
            className="header"
            id='header'

            style={{
                backgroundColor: changeColor,
                transform: changeHeaderTransfrom,
            }}
        >
            <div className="left">
                <Link
                    to="/"
                    className="logo"
                    style={{
                        backgroundImage: changeLogo 
                    }}
                >
                </Link>
            </div>
            <div className="right">
                <Link to="/scratch_ai" className="headerBtn1">
                    <span
                        className='customP3 btn1'
                        onMouseOver={
                            (e) => headerBtnOverHandler(e)
                        }
                        onMouseOut={
                            (e) => headerBtnOutHandler(e)
                        }

                        style={{
                            color: changeFontColor,
                            fontWeight: changeHeaderBtn1Weight,
                        }}
                    >프로그램</span>
                    <hr className='bottomHighlight'
                        style={{
                            border: changeHeaderBtn1Highlight
                        }}
                    />
                </Link>
                <Link to="/contact" className="headerBtn2">
                    <span
                        className='customP3 btn2'
                        onMouseOver={
                            (e) => headerBtnOverHandler(e)
                        }
                        onMouseOut={
                            (e) => headerBtnOutHandler(e)
                        }
                        style={{
                            color: changeFontColor,
                            fontWeight: changeHeaderBtn2Weight,
                        }}
                    >도입문의</span>
                    <hr className='bottomHighlight'
                        style={{
                            border: changeHeaderBtn2Highlight,
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}

export default Header;