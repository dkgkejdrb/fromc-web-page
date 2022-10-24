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
                                    누구나 쉽게 앱을 개발할 수 있는<br></br>앱인벤터를 활용해 간단한 모바일<br></br>게임을 만들어 봅니다.
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
                                    앱인벤터를 이용해서 모바일 게임을<br></br>만들어 보고 싶은 초중학교 또는 기관
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
                                    <div className="top">앱인벤터로 손쉽게<br></br>나만의 앱 만들기</div>
                                    <div className="bottom">앱인벤터 사용법을 익히고 골프공을 움직이는<br></br>게임을 만들어보며 앱인벤터와 친숙해질 수<br></br>있어요. 앱인벤터의 핵심 구성요소인 디자인과<br></br>블록을 이해하고 나만의 앱을 꾸미고 코딩할 수<br></br>있어요. 초보자도 쉽게 따라 할 수 있는 게임 개발을 통해 게임 구조를 이해하고 프로그래밍 학습에 흥미와 재미를 줄 수 있어요. 또한, 조건문,<br></br>이벤트, 스마트폰 센서 등 컴퓨터 알고리즘과<br></br>앱 메이킹의 핵심 개념을 학습할 수 있어요.</div>
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
                                    >앱인벤터로 게임 만들기</div>
                                        <div className="bottom"
                                style={{
                                    color: '#FFFFFF'
                                }}
                                        >골프공 골인 게임과 플래피 버드 게임을 만들어 볼 수 있어요. 게임의 핵심 기능을 직접 만들어보며 게임의 개발 과정과 제작 원리를 체험해볼 수 있어요. 스크린의 개수가 늘어나고 중력, 충돌 감지 등 게임에 필요한 다양한 기능을 직접 만들어보면서 개발자로서 코딩 역량을 확장할 수 있어요. 게임을 재밌게 만들기 위해 하이 스코어 시스템, 공유하기 시스템도 만들어보면서 다른 사람과 함께 게임을 플레이할 수 있어요. 또한, 게임 캐릭터를 바꿔보며 본인이 원하는 대로 게임 디자인을 할 수 있는 방법도 배워봅시다.</div>
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
                                                width: '100px'
                                            }}
                                            >교시</div>

                                            {/* 테이블 헤더-주제 */}
                                            <div className="cell0_1 cellStyle1"
                                            style={{
                                                width: '121px'
                                            }}
                                            >주제</div>

                                            {/* 테이블 헤더-내용 */}
                                            <div className="cell0_2 cellStyle1"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >1</div>

                                            {/* 주제 */}
                                            <div className="cell1_1 cellStyle3"
                                            style={{
                                                width: '121px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >앱인벤터<br></br>알아보기</div>

                                            {/* 내용 */}
                                            <div className="cell1_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >2</div>

                                            {/* 주제 */}
                                            <div className="cell2_1 cellStyle3"
                                            style={{
                                                width: '121px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >골프공<br></br>게임 만들기 - 1</div>

                                            {/* 내용*/}
                                            <div className="cell2_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >3</div>

                                            {/* 주제 */}
                                            <div className="cell3_1 cellStyle3"
                                            style={{
                                                width: '121px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >골프공<br></br>게임 만들기 - 2</div>

                                            {/* 내용*/}
                                            <div className="cell3_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >교시</div>

                                            {/* 테이블 헤더-주제 */}
                                            <div className="cell0_1 cellStyle1"
                                            style={{
                                                width: '121px'
                                            }}
                                            >주제</div>

                                            {/* 테이블 헤더-내용 */}
                                            <div className="cell0_2 cellStyle1"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >1</div>

                                            {/* 주제 */}
                                            <div className="cell1_1 cellStyle3"
                                            style={{
                                                width: '121px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >앱인벤터<br></br>알아보기</div>

                                            {/* 내용 */}
                                            <div className="cell1_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >2</div>

                                            {/* 주제 */}
                                            <div className="cell2_1 cellStyle3"
                                            style={{
                                                width: '121px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >골프공<br></br>게임 만들기 - 1</div>

                                            {/* 내용*/}
                                            <div className="cell2_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >3</div>

                                            {/* 주제 */}
                                            <div className="cell3_1 cellStyle3"
                                            style={{
                                                width: '121px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >골프공<br></br>게임 만들기 - 2</div>

                                            {/* 내용*/}
                                            <div className="cell3_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >4</div>

                                            {/* 주제 */}
                                            <div className="cell4_1 cellStyle3"
                                            style={{
                                                width: '121px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                            >플래피 프로그<br></br>게임 만들기 - 1</div>

                                            {/* 내용*/}
                                            <div className="cell4_2 cellStyle3"
                                            style={{
                                                width: '561px',
                                                textAlign: 'start',
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >5</div>

                                            {/* 주제 */}
                                            <div className="cell5_1 cellStyle3"
                                            style={{
                                                width: '121px',
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
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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
                                                width: '100px'
                                            }}
                                            >6</div>

                                            {/* 주제 */}
                                            <div className="cell6_1 cellStyle3"
                                            style={{
                                                width: '121px',
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
                                                paddingLeft: '48px',
                                                marginLeft: '7px',
                                                marginRight: '88px'
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