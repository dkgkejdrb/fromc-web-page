import { Link } from 'react-router-dom';
import { useState } from "react";

const Navigation = ({higlightLine}) => {
    const [fontWeight, setFontWeight] = useState(
        {
            _1: '400',
            _2: '400',
            _3: '400',
            _4: '400',
            _5: '400',
            _6: '400',
            _7: '400',
        });
    const [showDisplay, setShowDisplay] = useState(
        {
            _1: '',
            _2: '',
            _3: '',
            _4: '',
            _5: '',
            _6: '',
            _7: '',
        }); 

    const bottomLineShow = (e) => {
        if(e.target.className === 'scratchAI' || e.target.className === 'bottomLine1') {
            setFontWeight({...fontWeight, _1: 'bold' });
            setShowDisplay({...showDisplay, _1: 'rgba(202, 214, 248, 0.5)' });
        }
        if(e.target.className === 'appAI' || e.target.className === 'bottomLine2') {
            setFontWeight({...fontWeight, _2: 'bold' });
            setShowDisplay({...showDisplay, _2: 'rgba(202, 214, 248, 0.5)' });
        }
        if(e.target.className === 'kaggleAI' || e.target.className === 'bottomLine3') {
            setFontWeight({...fontWeight, _3: 'bold' });
            setShowDisplay({...showDisplay, _3: 'rgba(202, 214, 248, 0.5)' });
        }
        if(e.target.className === 'metaverseArduino' || e.target.className === 'bottomLine4') {
            setFontWeight({...fontWeight, _4: 'bold' });
            setShowDisplay({...showDisplay, _4: 'rgba(202, 214, 248, 0.5)' });
        }
        if(e.target.className === 'metaversePython' || e.target.className === 'bottomLine5') {
            setFontWeight({...fontWeight, _5: 'bold' });
            setShowDisplay({...showDisplay, _5: 'rgba(202, 214, 248, 0.5)' });
        }
        if(e.target.className === 'scratchGame' || e.target.className === 'bottomLine6') {
            setFontWeight({...fontWeight, _6: 'bold' });
            setShowDisplay({...showDisplay, _6: 'rgba(202, 214, 248, 0.5)' });
        }
        if(e.target.className === 'appGame' || e.target.className === 'bottomLine7') {
            setFontWeight({...fontWeight, _7: 'bold' });
            setShowDisplay({...showDisplay, _7: 'rgba(202, 214, 248, 0.5)' });
        }
    }
    const bottomLineHide = (e) => {
        setFontWeight({...showDisplay, _1: '400', _2: '400',  _3: '400', _4: '400',  _5: '400', _6: '400',  _7: '400' });
        setShowDisplay({...showDisplay, _1: '', _2: '',  _3: '', _4: '',  _5: '', _6: '',  _7: '' });
    }
    
    return (
                <div className="navigation left">
                    <div className="firstSection">
                        <div className="top">
                            <div className="icon">
                                <div className="source"></div>
                            </div>
                            <div className="category">AI</div>
                        </div>
                        <div className="bottom" >
                            <Link className="scratchAI" 
                            to="/scratch_ai"
                            onMouseOver={
                                (e) => bottomLineShow(e) 
                            }
                            onMouseOut={
                                (e) => bottomLineHide(e) 
                            }
                            style={
                                higlightLine === 1 ?
                                {
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(202, 214, 248, 0.5)'
                                } :
                                {
                                    fontWeight: fontWeight._1,
                                    backgroundColor: showDisplay._1
                                }
                            }
                            >???????????? AI ????????????
                                <div className="bottomLine1"
                                ></div>
                            </Link>

                            <Link className="appAI" 
                            to="/appinventor_ai"
                            onMouseOver={
                                (e) => bottomLineShow(e) 
                            }
                            onMouseOut={
                                (e) => bottomLineHide(e) 
                            }
                            style={
                                higlightLine === 2 ?
                                {
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(202, 214, 248, 0.5)'
                                } :
                                {
                                    fontWeight: fontWeight._2,
                                    backgroundColor: showDisplay._2
                                }
                            }
                            >???????????? AI ????????????
                                <div className="bottomLine2"
                                ></div>
                            </Link>

                            <Link className="kaggleAI" 
                            to="/kaggle_ai"
                            onMouseOver={
                                (e) => bottomLineShow(e) 
                            }
                            onMouseOut={
                                (e) => bottomLineHide(e) 
                            }
                            style={
                                higlightLine === 3 ?
                                {
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(202, 214, 248, 0.5)'
                                } :
                                {
                                    fontWeight: fontWeight._3,
                                    backgroundColor: showDisplay._3
                                }
                            }
                            >?????? ???????????? ????????????
                                <div className="bottomLine3"
                                ></div>
                            </Link>
                        </div>
                    </div>
                    <div className="secondSection">
                        <div className="top">
                            <div className="icon">
                                <div className="source"></div>
                            </div>
                            <div className="category">????????????</div>
                        </div>
                        <div className="bottom">
                            <Link className="metaverseArduino" 
                            to="/arduino_metaverse"
                            onMouseOver={
                                (e) => bottomLineShow(e) 
                            }
                            onMouseOut={
                                (e) => bottomLineHide(e) 
                            }
                            style={
                                higlightLine === 4 ?
                                {
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(202, 214, 248, 0.5)'
                                } :
                                {
                                    fontWeight: fontWeight._4,
                                    backgroundColor: showDisplay._4
                                }
                            }
                            >???????????? ????????????
                                <div className="bottomLine4"
                                ></div>
                            </Link>
                            <Link className="metaversePython" 
                            to="/python_metaverse"
                            onMouseOver={
                                (e) => bottomLineShow(e) 
                            }
                            onMouseOut={
                                (e) => bottomLineHide(e) 
                            }
                            style={
                                higlightLine === 5 ?
                                {
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(202, 214, 248, 0.5)'
                                } :
                                {
                                    fontWeight: fontWeight._5,
                                    backgroundColor: showDisplay._5
                                }
                            }
                            >???????????? ?????????
                                <div className="bottomLine5"
                                ></div>
                            </Link>
                        </div>
                    </div>
                    <div className="thirdSection">
                        <div className="top">
                            <div className="icon">
                                <div className="source"></div>
                            </div>
                            <div className="category">????????????</div>
                        </div>
                        <div className="bottom">
                            <Link className="scratchGame" 
                            to="/scratch_gamemaking"
                            onMouseOver={
                                (e) => bottomLineShow(e) 
                            }
                            onMouseOut={
                                (e) => bottomLineHide(e) 
                            }
                            style={
                                higlightLine === 6 ?
                                {
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(202, 214, 248, 0.5)'
                                } :
                                {
                                    fontWeight: fontWeight._6,
                                    backgroundColor: showDisplay._6
                                }
                            }
                            >???????????? ?????? ?????????
                                <div className="bottomLine6"
                                ></div>
                            </Link>
                            <Link className="appGame" 
                            to="/appinventor_gamemaking"
                            onMouseOver={
                                (e) => bottomLineShow(e) 
                            }
                            onMouseOut={
                                (e) => bottomLineHide(e) 
                            }
                            style={
                                higlightLine === 7 ?
                                {
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(202, 214, 248, 0.5)'
                                } :
                                {
                                    fontWeight: fontWeight._7,
                                    backgroundColor: showDisplay._7
                                }
                            }
                            >???????????? ?????? ?????????
                                <div className="bottomLine7"
                                ></div>
                            </Link>
                        </div>
                    </div>
                </div>
    );
}

export default Navigation;