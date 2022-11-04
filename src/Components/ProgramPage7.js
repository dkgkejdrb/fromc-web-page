import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage7 = () => {
    return (
        <div className="programsPage"
        id="/home">
            <Header />
            <Contact1 />
            <div className="wrap">
                <div className="left">
                    <Navigation higlightLine={7} />
                </div>
                <div className="right">
                    <div className="image_program seventh">
                        <div className="Wrap">
                            <div className="firstLine">
                                <div className="Left">
                                    <div className="title">
                                    앱인벤터 게임 메이킹
                                    </div>
                                    <div className="subTitle">
                                    앱인벤터를 이용하여 스마트폰에서 동작하는<br></br>캐주얼 장르의 게임 모바일 앱을 만들어 봅니다.
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
                                    게임 개발의 원리를 배우고 게임 모바일 앱을<br></br> 만들어보고 싶은 초중등 학생
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
                                    <div className="top">게임 분석표를 이용한<br></br>모바일 앱 게임 개발 원리 이해</div>
                                    <div className="bottom"
                                        style={{
                                            letterSpacing: '-1.5px', lineHeight: '1.5', width: '390px'
                                        }}
                                    >
                                    게임 분석표는 게임을 분해하고 마음대로 작성해보면서 게임의<br></br>
핵심적인 구조를 스스로 이해할 수 있게 만들어주는 도구입니다.<br></br>
게임 분석표를 이용해 모바일 앱 게임 프로젝트를 완성하고 자신이<br></br>
원하는 게임 기능과 모바일 센서를 확장해보는 것이 핵심입니다.<br></br>
자신만의 기능을 확장하는 과정을 통해 모바일 게임 개발의 원리부터<br></br>
모바일 앱 프로그래밍까지 쉽고 재미있게 익힐 수 있습니다.

                                    </div>
                                </div>
                            </div>
                            <div className="fourthLine"
                            style={{
                                backgroundColor: '#183C51',
                            }}>
                                <div className="Left">
                                    <div className="top"
                                style={{
                                    color: '#FFFFFF'
                                }}
                                    >앱인벤터를 이용한<br></br>게임 모바일 앱 개발</div>
                                        <div className="bottom"
                                style={{
                                    color: '#FFFFFF', letterSpacing: '-1.5px', lineHeight: '1.5', width: '380px'
                                }}
                                        >
                                            앱인벤터는 블록으로 된 명령어만으로 모바일 앱을<br></br>
만들 수 있어서 초보자도 어려움 없이 앱 개발의<br></br>
기본 원리를 익힐 수 있는 최적의 도구입니다.<br></br>
스마트폰의 핵심 기능인 가속도 센서와 터치 센서 등<br></br>
다양한 센서를 활용하여 캐주얼 게임을 제작해 보면서<br></br>
앱인벤터 블록 코딩을 응용하는 능력을 키우고<br></br>
프로젝트 완성의 성취감을 얻게 될 것입니다.
                                        </div>
                                    </div>
                                <div className="Right">
                                    <div className="image">
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
                                        background: '#50A5A0',
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
                                            background: '#EEF6F6',
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
                                            >앱인벤터<br></br>알아보기</div>

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
1. 앱인벤터 사이트 알아보기<br></br>
2. 앱인벤터 디자인과 블록 알아보기<br></br>
3. 템플릿을 활용하여 게임 분석해 보기
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
                                            >골프공 게임<br></br>만들기 - 1</div>

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
1. 모바일 센서 알아보기<br></br>
2. 캔버스와 공을 이해하고 게임 화면 구성하기<br></br>
3. 방향 센서를 이용해 공 움직이기
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
                                            >골프공 게임<br></br>만들기 - 2</div>

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
1. 좌표를 이해하고 컴포넌트를 움직이기<br></br>
2. 시계를 이해하고 게임의 시작과 종료를 표현하기<br></br>
3. 변수를 이해하고 점수 만들기
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
                                        background: '#50A5A0',
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
                                            background: '#EEF6F6',
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
                                            >앱인벤터<br></br>알아보기</div>

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
1. 앱인벤터 사이트 알아보기<br></br>
2. 앱인벤터 디자인과 블록 알아보기<br></br>
3. 템플릿을 활용하여 게임 분석해 보기
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
                                            >골프공 게임<br></br>만들기 - 1</div>

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
1. 모바일 센서 알아보기<br></br>
2. 캔버스와 공을 이해하고 게임 화면 구성하기<br></br>
3. 방향 센서를 이용해 공 움직이기
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
                                            >골프공 게임<br></br>만들기 - 2</div>

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
1. 좌표를 이해하고 컴포넌트를 움직이기<br></br>
2. 시계를 이해하고 게임의 시작과 종료를 표현하기<br></br>
3. 변수를 이해하고 점수 만들기
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
                                            >플래피 프로그<br></br>게임 만들기 - 1</div>

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
1. 게임을 설계하고 화면 디자인 구상하기<br></br>
2. 플라잉 게임에 필요한 모바일 센서 알아보기<br></br>
3. 장애물 움직임과 게임 맵 구성하기
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
                                            >플래피 프로그<br></br>게임 만들기 - 2
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
1. 장애물 코딩 완성하기<br></br>
2. 장애물 피하기와 카운트 기능 만들기
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
                                            >플래피 프로그<br></br>게임 만들기 - 3
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
1. 나만의 게임 종료 조건을 설정하여 게임 완성하기<br></br>
2. 점수 공유하기<br></br>
3. 나만의 아이디어로 게임 확장해보기
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

export default ProgramPage7;