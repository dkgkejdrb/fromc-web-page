import Footer from "./Footer";
import Header from "./Header3";
import './InfiniteSlider.css'
import LineBanner from "./lineBanner";
import { Link } from 'react-router-dom';

const ProgramPage7 = () => {

    return (
        <div className="programsPage">
            <Header />
            <div className="wrap">
                <div className="left">
                    <div className="firstSection">
                        <div className="top">
                            <div className="icon">
                                <div className="source"></div>
                            </div>
                            <div className="category">AI</div>
                        </div>
                        <div className="bottom">
                            <Link className="scratchAI" to="/ProgramPage1">스크래치 AI</Link>
                            <Link className="appAI" to="/ProgramPage2">인공지능 앱 만들기</Link>
                            <Link className="kaggleAI" to="/ProgramPage3">머신러닝 캐글 타이타닉</Link>
                        </div>
                    </div>
                    <div className="secondSection">
                    <div className="top">
                            <div className="icon">
                                <div className="source"></div>
                            </div>
                            <div className="category">메타버스</div>
                        </div>
                        <div className="bottom">
                            <Link className="metaverseArduino" to="/ProgramPage4">메타버스 아두이노 컴퓨팅</Link>
                            <Link className="metaversePython" to="/ProgramPage5">메타버스 파이썬</Link>
                        </div>
                    </div>
                    <div className="thirdSection">
                    <div className="top">
                            <div className="icon">
                                <div className="source"></div>
                            </div>
                            <div className="category">게임개발</div>
                        </div>
                        <div className="bottom">
                            <Link className="scratchGame" to="/ProgramPage6">스크래치 게임</Link>
                            <Link className="appGame" to="/ProgramPage7">앱인벤터 게임</Link>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                        <div className="source">

                        </div>
                    </div>
                </div>
            </div>
            <LineBanner />
            <Footer />
        </div>
    );
}

export default ProgramPage7;