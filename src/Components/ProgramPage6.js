import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage6 = () => {
    return (
        <div className="programsPage"
        id="/home">
            <Header />
            <Contact1 />
            <div className="wrap">
                <div className="left">
                    <Navigation higlightLine={6}/>
                </div>
                <div className="right">
            <div className="image_program sixth">
                        <div className="Wrap">
                            <div className="firstLine">
                                <div className="Left">
                                    <div className="title">
                                    스크래치 게임 메이킹
                                    </div>
                                    <div className="subTitle">
                                    스크래치를 이용하여 대전 액션과<br></br>러닝 액션 장르의 게임 프로그램을 만들어 봅니다.
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
                                    게임 개발의 원리를 배우고 게임 프로그램을<br></br>만들어보고 싶은 초중등 학생
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
                            <div className="thirdLine"
                            style={{
                                backgroundColor: 'rgba(3, 19, 165, 0.7)'
                            }}
                            
                            >
                                <div className="Left">
                                    <div className="image">
                                        <div className="source"></div>
                                    </div>
                                </div>
                                <div className="Right">
                                    <div className="top"
                                    style={{
                                        color: '#fff'
                                    }}>게임 분석표를 이용한<br></br>게임 개발 원리 이해</div>
                                    <div className="bottom"
                                    style={{
                                        color: '#fff', letterSpacing: '-1px', lineHeight: '1.5', width: '450px'
                                    }}
                                    >
                                        게임 분석표는 게임을 분해하고 마음대로 작성해 보면서 게임의<br></br>
핵심적인 구조를 스스로 이해할 수 있게 만들어주는 도구입니다.<br></br>
게임 분석표를 이용해 게임 프로젝트를 완성하고 자신이 원하는 대로<br></br>
게임의 구조를 바꿔보는 과정을 통해 게임 개발의 원리를 익힐 수 있습니다.<br></br>
복습 퀴즈와 코딩 도전 문제를 풀어보면서 프로그래밍의 기초까지<br></br>
쉽고 재미있게 익힐 수 있습니다.
                                    </div>
                                </div>
                            </div>
                            <div className="fourthLine">
                                <div className="Left">
                                    <div className="top">스크래치를 이용한<br></br>게임 프로그램 개발</div>
                                        <div className="bottom"
                                        style={{
                                            letterSpacing: '-1.5px', lineHeight: '1.5', width: '430px'
                                        }}
                                        >
                                        스크래치는 프로그래밍 경험이 없는 학생들이 쉽게 프로그래밍을<br></br>
접할 수 있도록 해 주는 교육용 프로그래밍 언어로서, 블록을 연결하듯<br></br>
명령어를 연결하면 프로그램이 완성되는 구조를 가지고 있습니다.<br></br>
다양한 분야에서 쓰이는 블록 코딩인 스크래치를 활용하여<br></br>
대전 액션 게임과 러닝 액션 게임을 제작해 보면서 블록 코딩을<br></br>
응용하는 능력을 키우고 프로젝트 완성의 성취감을 얻게 될 것입니다.

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
                                        background: '#4D58BE',
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
                                            background: '#CACFFF',
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
                                            >스크래치<br></br>알아보기</div>

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
1. 스크래치 사이트 알아보기<br></br>
2. 스크래치 코딩 알아보기<br></br>
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
                                            >공룡 배틀 게임<br></br>만들기 - 1</div>

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
1. 캐릭터의 구성과 객체 움직이기<br></br>
2. 방향과 좌표를 활용하여 게임 타겟 만들기
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
                                            >공룡 배틀 게임<br></br>만들기 - 2</div>

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
1. 변수의 개념을 이해하고 카운트 기능 만들기<br></br>
2. 복제의 개념을 이해하고 아이템 복사하기<br></br>
3. 게임의 초기화와 종료 조건 만들기
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
                                        background: '#4D58BE',
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
                                            background: '#CACFFF',
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
                                            >스크래치<br></br>알아보기</div>

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
1. 스크래치 사이트 알아보기<br></br>
2. 스크래치 코딩 알아보기<br></br>
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
                                            >공룡 배틀 게임<br></br>만들기 - 1</div>

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
1. 캐릭터의 구성과 객체 움직이기<br></br>
2. 방향과 좌표를 활용하여 게임 타겟 만들기
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
                                            >공룡 배틀 게임<br></br>만들기 - 2</div>

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
1. 변수의 개념을 이해하고 카운트 기능 만들기<br></br>
2. 복제의 개념을 이해하고 아이템 복사하기<br></br>
3. 게임의 초기화와 종료 조건 만들기
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
                                            >장애물 피하기<br></br>게임 만들기 - 1</div>

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
1. 난수를 활용한 장애물 요소 만들기<br></br>
2. 캐릭터 무빙 제어하기<br></br>
3. 논리 연산에 대해 알아보고 작동 원리에 적용하기<br></br>
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
                                            >장애물 피하기<br></br>게임 만들기 - 2
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
1. 장애물 피하기 기능 완성하기<br></br>
2. 정보의 저장과 처리를 이해하고 고급 점수 기능 완성하기
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
                                            >장애물 피하기<br></br>게임 만들기 - 3
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
1. 게임의 종료 조건과 튜토리얼 완성하기<br></br>
2. 나만의 기능을 추가하여 게임 업그레이하기
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

export default ProgramPage6;