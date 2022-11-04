import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ScratchAI = () => {
    return (
        <div className="programsPage"
        id="/home">
            <Header />
            <Contact1 />
            <div className="wrap">
                <div className="left">
                <Navigation higlightLine={1} />
                </div>
                <div className="right">
                    <div className="image_program first">
                        <div className="Wrap">
                            <div className="firstLine">
                                <div className="Left">
                                    <div className="title">
                                        스크래치 AI 프로젝트
                                    </div>
                                    <div className="subTitle">
                                    스크래치를 이용하여 인간처럼 반응하는<br></br>AI 프로그램을 만들어 봅니다.
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
                                    이미지와 음성을 인식하여 동작하는<br></br>AI 프로그램을 만들어보고 싶은 초중등 학생
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
                                    <div className="top">구글의 티처블 머신을 이용한 머신러닝 개념 이해</div>
                                    <div className="bottom"
                                        style={{ letterSpacing: '-1px', lineHeight: '1.5' }}
                                    >구글에서 만든 티처블 머신은 샘플 데이터를 학습하고<br></br>새로운 데이터를 분류해주는 머신러닝 모델을<br></br>간편하게 만들 수 있는 도구입니다.<br></br>코드 작성 없이 이미지와 음성 데이터로 직접<br></br>머신러닝 모델을 생성하고 활용해 보는 과정을 통해<br></br>머신러닝의 개념을 쉽게 이해할 수 있습니다.</div>
                                </div>
                            </div>
                            <div className="fourthLine">
                                <div className="Left">
                                    <div className="top">스크래치를 이용한<br></br>AI 프로그램 개발</div>
                                        <div className="bottom"
                                        style={{ letterSpacing: '-1px', lineHeight: '1.5', width: '335px' }}
                                        >스크래치는 프로그래밍 경험이 없는 학생들이 쉽게<br></br>
프로그래밍을 접할 수 있도록 해 주는 교육용<br></br>
프로그래밍 언어로서, 블록을 연결하듯 명령어를<br></br>
연결하면 프로그램이 완성되는 구조를 가지고 있습니다.<br></br>
블록으로 된 명령어로 머신러닝 모델도 다룰 수 있어<br></br>
사람처럼 이미지와 음성을 인식하고 반응하는<br></br>
AI 프로그램도 쉽게 만들 수 있습니다.</div>
                                    </div>
                                <div className="Right">
                                    <div className="image">
                                        <div className="source"></div>
                                    </div>
                                </div>
                            </div>

                            {/* 3교시 커리큘럼 */}
                            <div className="fifthLine"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}
                            >
                                <div className="firstSection">
                                    <div className="title"
                                    style={{
                                        height: '47.44px',
                                        background: '#98AEEC',
                                        borderRadius: '24px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                        fontWeight: '600',
                                        fontSize: '22px',
                                        lineHeight: '140.02%',
                                        color: "#FFF",

                                        marginTop: '105px'
                                    }}>
                                        3교시 커리큘럼
                                    </div>
                                    <div className="table"
                                        style={{
                                            width: '782px',
                                            height: '447px',
                                            background: '#F4F5FF',
                                            borderRadius: '13px'
                                        }}
                                    >
                                        {/* 첫번째 줄 */}
                                        <div className="cell0 cellStyle1" 
                                        style={{
                                            width: '100%',
                                            height: '70px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',

                                            marginTop: '20.02px'
                                        }}>
                                            {/* 테이블 헤더-교시 */}
                                            <div className="cell0_0 cellStyle1" 
                                            style={{
                                                width: '80px'
                                            }}
                                            >교시</div>

                                            {/* 테이블 헤더-주제 */}
                                            <div className="cell0_1 cellStyle1"
                                            style={{
                                                width: '147px'
                                            }}
                                            >주제</div>

                                            {/* 테이블 헤더-내용 */}
                                            <div className="cell0_2 cellStyle1"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >내용</div>
                                        </div>

                                        {/* 두번째 줄 */}
                                        <div className="cell1"
                                        style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}
                                        >
                                            {/* 교시 1 */}
                                            <div className="cell1_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >1</div>

                                            {/* 주제 */}
                                            <div className="cell1_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >AI 알아보기</div>

                                            {/* 내용 */}
                                            <div className="cell1_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. AI에서 사용하는 용어들의 의미 알아보기<br></br>
2. 주변에서 활용되는 다양한 AI 예시 찾아보기<br></br>
3. AI 스피커의 원리 알아보기
                                            </div>
                                        </div>

                                        {/* 세번째 줄 */}
                                        <div className="cell2"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '5.95px'
                                        }}
                                        >
                                            {/* 교시 2 */}
                                            <div className="cell2_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >2</div>

                                            {/* 주제 */}
                                            <div className="cell2_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >내 표정을 따라하는<br></br>
                                            AI 로봇 만들기</div>

                                            {/* 내용*/}
                                            <div className="cell2_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. 표정을 인식하는 머신러닝 모델 만들기<br></br>
2. 이미지 인식 명령 블록 알아보기<br></br>
3. 내 표정을 따라하는 AI 로봇 프로그램 만들기
                                            </div>
                                        </div>

                                        {/* 네번째 줄 */}
                                        <div className="cell3"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '5.95px'
                                        }}
                                        >
                                            {/* 교시 2 */}
                                            <div className="cell3_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >3</div>

                                            {/* 주제 */}
                                            <div className="cell3_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >내 말을 알아듣는<br></br>AI 강아지 만들기</div>

                                            {/* 내용*/}
                                            <div className="cell3_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. 소리를 인식하는 머신러닝 모델 만들기<br></br>
2. 소리 인식에 사용하는 명령 블록 알아보기<br></br>
3. 내 말대로 행동하는 AI 강아지 프로그램 만들기
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* 중간줄 */}
                                <div className="secondSection"
                                style={{
                                    width: '782px',
                                    height: '130px'
                                }}
                                >
                                    <div className="top"
                                        style={{
                                            width: '100%',
                                            height: '50%',
                                            borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
                                        }}
                                    ></div>
                                    <div className="bottom"
                                        style={{
                                            width: '100%',
                                            height: '50%'
                                        }}
                                    ></div>
                                </div>


                                {/* 6교시 커리큘럼 */}
                                <div className="thirdSection">
                                <div className="title"
                                    style={{
                                        height: '47.44px',
                                        background: '#98AEEC',
                                        borderRadius: '24px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                        fontWeight: '600',
                                        fontSize: '22px',
                                        lineHeight: '140.02%',
                                        color: "#FFF"
                                    }}>
                                        6교시 커리큘럼
                                    </div>
                                    <div className="table"
                                        style={{
                                            width: '782px',
                                            height: '790.45px',
                                            background: '#F4F5FF',
                                            borderRadius: '13px'
                                        }}>
                                        {/* 첫번째 줄 */}
                                        <div className="cell0 cellStyle1" 
                                        style={{
                                            width: '100%',
                                            height: '70px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',

                                            marginTop: '20.02px'
                                        }}>
                                            {/* 테이블 헤더-교시 */}
                                            <div className="cell0_0 cellStyle1" 
                                            style={{
                                                width: '80px'
                                            }}
                                            >교시</div>

                                            {/* 테이블 헤더-주제 */}
                                            <div className="cell0_1 cellStyle1"
                                            style={{
                                                width: '147px'
                                            }}
                                            >주제</div>

                                            {/* 테이블 헤더-내용 */}
                                            <div className="cell0_2 cellStyle1"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >내용</div>
                                        </div>

                                        {/* 두번째 줄 */}
                                        <div className="cell1"
                                        style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}
                                        >
                                            {/* 교시 1 */}
                                            <div className="cell1_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >1</div>

                                            {/* 주제 */}
                                            <div className="cell1_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >AI 알아보기</div>

                                            {/* 내용 */}
                                            <div className="cell1_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. AI에서 사용하는 용어들의 의미 알아보기<br></br>
2. 주변에서 활용되는 다양한 AI 예시 찾아보기<br></br>
3. AI 스피커의 원리 알아보기
                                            </div>
                                        </div>

                                        {/* 세번째 줄 */}
                                        <div className="cell2"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '5.95px'
                                        }}
                                        >
                                            {/* 교시 2 */}
                                            <div className="cell2_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >2</div>

                                            {/* 주제 */}
                                            <div className="cell2_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >내 표정을 따라하는<br></br>
                                            AI 로봇 만들기</div>

                                            {/* 내용*/}
                                            <div className="cell2_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. 표정을 인식하는 머신러닝 모델 만들기<br></br>
2. 이미지 인식에 사용하는 명령 블록 알아보기<br></br>
3. 내 표정을 따라하는 AI 로봇 프로그램 만들기
                                            </div>
                                        </div>

                                        {/* 네번째 줄 */}
                                        <div className="cell3"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '5.95px'
                                        }}
                                        >
                                            {/* 교시 2 */}
                                            <div className="cell3_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >3</div>

                                            {/* 주제 */}
                                            <div className="cell3_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >내 말을 알아듣는<br></br>
                                            AI 강아지 만들기</div>

                                            {/* 내용*/}
                                            <div className="cell3_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. 소리를 인식하는 머신러닝 모델 만들기<br></br>
2. 소리 인식에 사용하는 명령 블록 알아보기<br></br>
3. 내 말대로 행동하는 AI 강아지 프로그램 만들기
                                            </div>
                                        </div>

                                        {/* 다섯번째 줄 */}
                                        <div className="cell4"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '5.95px'
                                        }}
                                        >
                                            {/* 교시 2 */}
                                            <div className="cell4_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >4</div>

                                            {/* 주제 */}
                                            <div className="cell4_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >AI<br></br>더 알아보기</div>

                                            {/* 내용*/}
                                            <div className="cell4_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. 머신러닝 모델 개발 과정 알아보기<br></br>
2. AI가 인식하는 데이터 종류 알아보기<br></br>
3. 동작을 인식하는 머신러닝 모델 만들기
                                            </div>
                                        </div>

                                        {/* 여섯번째 줄 */}
                                        <div className="cell5"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '5.95px'
                                        }}
                                        >
                                            {/* 교시 2 */}
                                            <div className="cell5_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >5</div>

                                            {/* 주제 */}
                                            <div className="cell5_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >사람을 인식하는<br></br>AI 냉장고 만들기
                                            </div>

                                            {/* 내용*/}
                                            <div className="cell5_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. 이미지를 인식하는 머신러닝 모델 만들기<br></br>
2. 이미지 인식에 사용하는 명령 블록 활용하기<br></br>
3. 사람의 시선을 인식하는 AI 냉장고 프로그램 만들기<br></br>
                                            </div>
                                        </div>

                                        {/* 일곱번째 줄 */}
                                        <div className="cell6"
                                            style={{
                                            width: '100%',
                                            height: '108px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '5.95px'
                                        }}
                                        >
                                            {/* 교시 2 */}
                                            <div className="cell6_0 cellStyle2"
                                            style={{
                                                width: '80px'
                                            }}
                                            >6</div>

                                            {/* 주제 */}
                                            <div className="cell6_1 cellStyle3"
                                            style={{
                                                width: '147px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >강아지를 구조하는<br></br>AI 게임 만들기
                                            </div>

                                            {/* 내용*/}
                                            <div className="cell6_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '38px',
                                                marginLeft: '7px',
                                                marginRight: '28px'
                                            }}
                                            >
1. 방향을 인식하는 머신러닝 모델 만들기<br></br>
2. 방향 인식에 사용하는 명령 블록 활용하기<br></br>
3. 강아지를 구조하는 AI 게임 프로그램 만들기
                                            </div>
                                        </div>

                                    </div>
                                </div>
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

export default ScratchAI;