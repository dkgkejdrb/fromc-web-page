import { useEffect, useState } from 'react';

const Features = () => {
    const [imagePositionX, setImagePositionX] = useState('translateX(0px)');
    const [textPositionX, setTextPositionX] = useState('translateX(25px)');
    const [imageOpacity, setImageOpacity] = useState('0');
    const [textOpacity, setTextOpacity] = useState('0');
    const [image2PositionX, setImage2PositionX] = useState('translateX(25px)');
    const [text2PositionX, setText2PositionX] = useState('translateX(0px)');
    const [image2Opacity, setImage2Opacity] = useState('0');
    const [text2Opacity, setText2Opacity] = useState('0');
    const [image3PositionX, setImage3PositionX] = useState('translateX(0px)');
    const [text3PositionX, setText3PositionX] = useState('translateX(25px)');
    const [image3Opacity, setImage3Opacity] = useState('0');
    const [text3Opacity, setText3Opacity] = useState('0');
    const featurePositionY = () => {
        if(window.scrollY === 0) {
            setImagePositionX('translateX(0px)');
            setTextPositionX('translateX(25px)');
            setImageOpacity('0');
            setTextOpacity('0');
            setImage2PositionX('translateX(25px)');
            setText2PositionX('translateX(0px)');
            setImage2Opacity('0');
            setText2Opacity('0');
            setImage3PositionX('translateX(0px)');
            setText3PositionX('translateX(25px)');
            setImage3Opacity('0');
            setText3Opacity('0');
        }

        if(window.scrollY >= 400 && window.scrollY < 900) {
            setImagePositionX('translateX(25px)');
            setTextPositionX('translateX(0px)');
            setImageOpacity('1');
            setTextOpacity('1');
        } 
        if(window.scrollY >= 900 && window.scrollY < 1400) {
            setImage2PositionX('translateX(0px)');
            setText2PositionX('translateX(25px)');
            setImage2Opacity('1');
            setText2Opacity('1');
        }
        if(window.scrollY >= 1400) {
            setImage3PositionX('translateX(25px)');
            setText3PositionX('translateX(0px)');
            setImage3Opacity('1');
            setText3Opacity('1');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', featurePositionY, { capture: true });

    }, []);

    return (
        <div className="features">
            <div className="wrap">
                <div key="firstLine" className="firstLine leftPictureSection">
                    <div className="contents">
                        <div className="picture">
                            <div className="wrap">
                                <div className="source"
                                style={{
                                    transform : imagePositionX,
                                    opacity: imageOpacity,
                                    transition: '1s',
                                }}
                                >
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="wrap">
                                <h2 className="customH2"
                                    style={{
                                        transform: textPositionX,
                                        opacity: textOpacity,
                                        transitionDelay: '0.5s',
                                        transitionDuration: '1s'
                                    }}>
                                    <span
                                        style={{ 
                                            color: '#6F3AC1',
                                        }}
                                    >01</span>씨큐브코딩에서 개발한 전문 코딩교육 커리큘럼을 제공합니다
                                </h2>
                                <p className="customP"
                                    style={{
                                        transform: textPositionX,
                                        opacity: textOpacity,
                                        transitionDelay: '0.5s',
                                        transitionDuration: '1s'
                                    }}
                                >
                                국내 SW교육을 대표하는 씨큐브코딩의 전문성과<br></br>교육 노하우를 담아 학교와 기관을 위한 다양한 창의융합<br></br>프로그램을 지원합니다
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div key="secondLine" className="secondLine rightPictureSection">
                    <div className="contents">
                    <div className="text">
                            <div className="wrap">
                                <h2 className="customH2"
                                    style={{
                                        transform: text2PositionX,
                                        opacity: text2Opacity,
                                        transition: '1s',
                                    }}
                                >
                                <span
                                        style={{ color: '#6F3AC1'
                                    }}
                                    >
                                02</span>디지털 신기술을 개발 · 활용 · 운용<br></br>하는 데 필요한 지식과 역량을 기르는 훈련을 합니다
                                </h2>
                                <p className="customP"
                                    style={{
                                        transform: text2PositionX,
                                        opacity: text2Opacity,
                                        transition: '1s',
                                    }}>
                                인공지능, 메타버스(VR, AR), SW, 게임 개발 등의 디지털 신기술을 일상생활에 적용하여 학습함으로써, <br></br>디지털 전문성을 갖추도록 합니다
                                </p>
                            </div>
                        </div>
                        <div className="picture">
                            <div className="wrap">
                                <div className="source"
                                style={{
                                    transform : image2PositionX,
                                    opacity: image2Opacity,
                                    transitionDelay: '0.5s',
                                    transitionDuration: '1s'
                                }}
                                >

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div key="thirdLine" className="thirdLine leftPictureSection">
                    <div className="contents">
                        <div className="picture">
                            <div className="wrap">
                                <div className="source"
                                style={{
                                    transform : image3PositionX,
                                    opacity: image3Opacity,
                                    transition: '1s',
                                }}
                                >

                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="wrap">
                                <h2 className="customH2"
                                    style={{
                                        transform : text3PositionX,
                                        opacity: text3Opacity,
                                        transitionDelay: '0.5s',
                                        transitionDuration: '1s'
                                    }}
                                >
                                <span
                                        style={{ color: '#6F3AC1' }}
                                    >
                                03</span>학생 개개인의 산출물을 위한 실습<br></br>중심 교육을 제공합니다
                                </h2>
                                <p className="customP"
                                style={{
                                        transform : text3PositionX,
                                        opacity: text3Opacity,
                                        transitionDelay: '0.5s',
                                        transitionDuration: '1s'
                                    }}>
                                학습자가 주도적으로 실습하는 과정을 경험으로써,<br></br>산출물의 코딩 원리와 로직을 이해하는 방법을 익힐 수<br></br>있습니다
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Features;