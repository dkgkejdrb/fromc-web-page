import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// 리액트에 background-image > url() 참고
import logo_dark from "../Assets/logo_dark.svg"

const Header3 = () => {
    const [changeHeaderTransfrom, setChangeHeaderTransfrom] = useState('translateY(0px)');
    const [changeHeaderBtn2Weight, setChangeHeaderBtn2Weight] = useState('500');
    const [changeHeaderBtn2Highlight, setChangeHeaderBtn2Highlight] = useState('0');

    useEffect(() => {
        window.addEventListener('scroll', changeHeader, { capture: true });
    }, []);

    // 스크롤 작동 중 내리거나 올리는 중인지 체크
    let prevScrollTop = 0;
    let nowScrollTop = 0;

    let wheelDelta = () => {
        return prevScrollTop - nowScrollTop >= 0 ? 'up' : 'down';
    }

    const changeHeader = () => {
        nowScrollTop = window.scrollY;
        if (wheelDelta() === 'down') {
            setChangeHeaderTransfrom('translateY(-100px)');
        }
        if (wheelDelta() === 'up') {
            setChangeHeaderTransfrom('translateY(0px)');
        }
        prevScrollTop = nowScrollTop;
    }

    const headerBtnOverHandler = (e) => {
        if(e.target.className === 'customP3 btn2') { 
            setChangeHeaderBtn2Highlight('2.5px solid #6F3AC1');
            setChangeHeaderBtn2Weight('700');
        }
    }

    const headerBtnOutHandler = (e) => {
        setChangeHeaderBtn2Highlight('0');
        setChangeHeaderBtn2Weight('500');
    }

    return (
        <div
            className="header"
            id='/'

            style={{
                backgroundColor: '#FFFFFF',
                transform: changeHeaderTransfrom,
                borderColor: '#cccc',
                borderBottom: '0.5px solid #cccc'
            }}
        >
            <div className="left">
                <Link
                    to="/"
                    className="logo"
                    style={{
                        backgroundImage: `url(${logo_dark})`,
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
                            color: '#6F3AC1',
                            fontWeight: '700'
                        }}
                    >프로그램</span>
                    <hr className='bottomHighlight'
                        style={{
                            border: '2.5px solid #6F3AC1'
                        }}
                    />
                </Link>
                {/* 새창에서 열리고 싶다면, target="_blank"
                <Link to="/ContactToRegister" className="headerBtn2" target="_blank"></Link>  */}
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
                            color: '#6F3AC1',
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
        </div >
    );
}

export default Header3;