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
                                    >01</span>????????????????????? ????????? ?????? ???????????? ??????????????? ???????????????
                                </h2>
                                <p className="customP"
                                    style={{
                                        transform: textPositionX,
                                        opacity: textOpacity,
                                        transitionDelay: '0.5s',
                                        transitionDuration: '1s'
                                    }}
                                >
                                ?????? SW????????? ???????????? ?????????????????? ????????????<br></br>?????? ???????????? ?????? ????????? ????????? ?????? ????????? ????????????<br></br>??????????????? ???????????????
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
                                02</span>????????? ???????????? ?????? ?? ?????? ?? ??????<br></br>?????? ??? ????????? ????????? ????????? ????????? ????????? ?????????
                                </h2>
                                <p className="customP"
                                    style={{
                                        transform: text2PositionX,
                                        opacity: text2Opacity,
                                        transition: '1s',
                                    }}>
                                ????????????, ????????????(VR, AR), SW, ?????? ?????? ?????? ????????? ???????????? ??????????????? ???????????? ??????????????????, <br></br>????????? ???????????? ???????????? ?????????
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
                                03</span>?????? ???????????? ???????????? ?????? ??????<br></br>?????? ????????? ???????????????
                                </h2>
                                <p className="customP"
                                style={{
                                        transform : text3PositionX,
                                        opacity: text3Opacity,
                                        transitionDelay: '0.5s',
                                        transitionDuration: '1s'
                                    }}>
                                ???????????? ??????????????? ???????????? ????????? ???????????????,<br></br>???????????? ?????? ????????? ????????? ???????????? ????????? ?????? ???<br></br>????????????
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