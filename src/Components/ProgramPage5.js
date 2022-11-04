import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage5 = () => {
    return (
        <div className="programsPage"
        id="/home">
            <Header />
            <Contact1 />
            <div className="wrap">
                <div className="left">
                    <Navigation higlightLine={5} />
                </div>
                <div className="right">
                <div className="image_program fifth">
                        <div className="Wrap">
                            <div className="firstLine">
                                <div className="Left">
                                    <div className="title">
                                    메타버스 파이썬
                                    </div>
                                    <div className="subTitle">
                                    가상세계에서 캐릭터와 사물을<br></br>동작시키며 파이썬을 배워 봅니다.
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
                                    메타버스 가상공간에서<br></br>실시간 인터랙티브 파이썬 실습
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
                                    <div className="top"
                                        style={{letterSpacing: '-1px'}}
                                    >메타버스 가상공간에서<br></br>실시간 인터랙티브 파이썬 실습</div>
                                    <div className="bottom"
                                    style={{ letterSpacing: '-1px', lineHeight: '1.5', width: '350px' }}>
                                    메타버스 코딩교육 플랫폼인 코드얼라이브를 이용하면<br></br>
실시간으로 상호 작용하는 게임을 만드는 것처럼<br></br>
재미있게 파이썬을 배울 수 있습니다.<br></br>
가상세계 속의 캐릭터와 사물이 원하는 대로 움직이도록<br></br>
파이썬 코드를 작성하는 연습을 하면서 자연스럽게<br></br>
파이썬 기초 문법을 익히게 됩니다.
                                    </div>
                                </div>
                            </div>
                            <div className="fourthLine">
                                <div className="Left">
                                    <div className="top">파이썬 기반의<br></br>3D 게임 프로그램 개발</div>
                                        <div className="bottom"
                                        style={{ letterSpacing: '-1px', lineHeight: '1.5', width: '360px' }}>
                                        유니티의 실시간 인터랙티브 3D 게임 엔진을 이용하여<br></br>
실감나게 구현한 가상세계 속에서 캐릭터와 사물을 활용하여<br></br>
파이썬 기반의 게임 프로그램을 만들어 봅니다.<br></br>
다양한 분야에서 쓰이는 프로그래밍 언어인 파이썬으로<br></br>
3D 게임을 제작해 보면서 파이썬을 응용하는 능력을 키우고<br></br>
프로젝트 완성의 성취감을 얻게 될 것입니다.<br></br>

                                        </div>
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
                                        background: '#FFB8A0',
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
                                            background: '#FFEAE3',
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
                                            >파이썬<br></br>알아보기</div>

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
1. 프로그래밍 언어와 파이썬 이해하기<br></br>
2. 객체와 명령어 알아보기
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
                                            >주사위 게임<br></br>만들기 1</div>

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
1. 모듈 불러오는 방법 알아보기<br></br>
2. 난수 명령어 알아보기<br></br>
3. 산술/관계 연산자 익히기
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
                                            >주사위 게임<br></br>만들기 2</div>

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
1. 조건문 익히기<br></br>
2. 주사위 게임 알고리즘 설계하기<br></br>
3. 주사 게임 코드 완성하기
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
                                        background: '#FFB8A0',
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
                                            background: '#FFEAE3',
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
                                            >파이썬<br></br>알아보기</div>

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
1. 프로그래밍 언어와 파이썬 이해하기<br></br>
2. 객체와 명령어 알아보기
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
                                            >주사위 게임<br></br>만들기 1</div>

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
1. 모듈 불러오는 방법 알아보기<br></br>
2. 난수 명령어 알아보기<br></br>
3. 산술/관계 연산자 익히기
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
                                            >주사위 게임<br></br>만들기 2</div>

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
1. 조건문 익히기<br></br>
2. 주사위 게임 알고리즘 설계하기<br></br>
3. 주사 게임 코드 완성하기
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
                                            >파이썬<br></br>더 알아보기</div>

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
1. 변수 알아보기<br></br>
2. 데이터 입출력 명령어 익히기
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
                                            >Up & Down<br></br>게임 만들기 1
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
1. 파이썬 데이터 타입 알아보기<br></br>
2. 데이터타입의 형태 변환 연습하기<br></br>
3. 반복문 익히기
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
                                            >Up & Down<br></br>
                                            게임 만들기 2
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
1. 반복을 멈추는 코드 알아보기<br></br>
2. Up & Down 게임 알고리즘 설계하기<br></br>
3. Up & Down 게임 코드 완성하기
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

export default ProgramPage5;