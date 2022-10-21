import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage1 = () => {
    return (
        <div className="programsPage">
            <Header />
            <Contact1 />
            <div className="wrap">
                <Navigation higlightLine={1} />
                <div className="right">
                    <div className="image_program first">
                        <div className="Wrap">
                            <div className="firstLine">
                                <div className="Left">
                                    <div className="title">
                                        스크래치 AI 프로젝트
                                    </div>
                                    <div className="subTitle">
                                        티처블 머신과 스크래치로 재미있는<br></br>AI 프로그램을 만들어 봅니다.
                                    </div>
                                </div>
                                <div className="Right">
                                    <div className="wrap">
                                        <div className="source">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="secondLine">
                                <div className="Left">
                                    <div className="top">
                                        <div className="icon">
                                            <div className="source"></div>
                                        </div>
                                        <div className="title">추천 대상</div>
                                    </div>
                                    <div className="bottom">
                                    AI 기술을 이용해서 AI 프로그램을<br></br>만들어 보고 싶은 초·중학교 또는 기관
                                    </div>
                                </div>
                                <div className="Right">
                                    <div className="top">
                                        <div className="icon">
                                            <div className="source"></div>
                                        </div>
                                        <div className="title">제공 차시</div>
                                    </div>
                                    <div className="bottom">
                                    3교시 또는 6교시
                                    </div>
                                </div>
                            </div>
                            <div className="thirdLine">
                                <div className="Left">
                                    <div className="image">
                                        <div className="source"></div>
                                    </div>
                                </div>
                                <div className="Right">
                                    <div className="top">티처블 머신 학습을 통해 쉽고<br></br>재미있게 AI 입문하기</div>
                                    <div className="bottom">AI 모델링 학습 도구인 구글 '티처블 머신(Teachable Machine)'과 교육용 코딩 프로그램 '스크래치'를 사용하여 재미있는 AI 프로그램을 만들어 보면서, AI의 개념과 원리를 쉽게 경험해 볼 수 있습니다.</div>
                                </div>
                            </div>
                            <div className="fourthLine">
                                <div className="Left">
                                    <div className="top">AI 프로그램 제작을 위한 머신러닝 모델 학습</div>
                                        <div className="bottom">머신러닝을 쉽게 배우고 머신러닝 모델까지 만들어 보고 싶다면 이 과정에 주목하세요. 코드 작성 없이 이미지, 소리, 동작 등의 다양한 데이터로 직접 머신러닝 모델을 생성하고 활용해 보는 과정을 통해 머신러닝 모델 구성 원리를 쉽게 이해할 수 있습니다. </div>
                                    </div>
                                <div className="Right">
                                    <div className="image">
                                        <div className="source"></div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="fifthLine">
                                <div className="firstSection">
                                    <div className="title">
                                        3교시 커리큘럼
                                    </div>
                                    <div className="table">
                                        {/* 첫번째 줄 */}
                                        <div className="cell0" 
                                        style={{
                                            width: '100%',
                                            height: '70px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}>
                                            <div className="cell0_0" style={{
                                                width: '100px'
                                            }}
                                            >교시</div>
                                            <div className="cell0_1">주제</div>
                                            <div className="cell0_2">내용</div>
                                        </div>
                                        <div className="cell1"
                                        style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}
                                        >1
                                            <div className="cell1_0"></div>
                                            <div className="cell1_1"></div>
                                            <div className="cell1_2"></div>
                                        </div>
                                        <div className="cell2"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}
                                        >2
                                            <div className="cell2_0"></div>
                                            <div className="cell2_1"></div>
                                            <div className="cell2_2"></div>
                                        </div>
                                        <div className="cell3"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}
                                        >3
                                            <div className="cell3_0"></div>
                                            <div className="cell3_1"></div>
                                            <div className="cell3_2"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="secondSection"></div>
                                <div className="thirdSection"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LineBanner />
            <Footer />
        </div>
    );
}

export default ProgramPage1;