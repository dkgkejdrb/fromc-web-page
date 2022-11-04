import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage4 = () => {    
return (
    <div className="programsPage"
    id="/home">
        <Header />
        <Contact1 />
        <div className="wrap">
            <div className="left">
            <Navigation higlightLine={4}/>
            </div>
            <div className="right">
            <div className="image_program fourth">
                        <div className="Wrap">
                            <div className="firstLine">
                                <div className="Left">
                                    <div className="title">
                                    메타버스 아두이노
                                    </div>
                                    <div className="subTitle">
                                    가상세계에서 사물을 제어하는<br></br>아두이노 프로그램을 만들어 봅니다.
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
                                    가상 아두이노를 활용해<br></br>피지컬 컴퓨팅을 경험하고 싶은 초중등 학생
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
                                    <div className="top">메타버스 가상공간에서<br></br>피지컬 컴퓨팅 원리 이해</div>
                                    <div className="bottom"
                                    style={{ letterSpacing: '-1px', lineHeight: '1.5', width: '370px' }}
                                    >
                                    피지컬 컴퓨팅은 외부에서 입력된 정보를 처리하여 물리적인<br></br>
장치가 동작하도록 하는 것으로써 처리를 담당하는 컴퓨터가<br></br>
이해할 수 있는 프로그램을 만드는 것이 핵심입니다.<br></br>
물리적인 하드웨어 없이 메타버스 공간의 사물들을 이용한<br></br>
피지컬 컴퓨팅을 경험함으로써 컴퓨터와 프로그래밍의 기초를<br></br>
쉽고 재미있게 익힐 수 있습니다.
                                    </div>
                                </div>
                            </div>
                            <div className="fourthLine">
                                <div className="Left">
                                    <div className="top"
                                        style={{
                                            letterSpacing: '.05px'
                                        }}
                                    >가상의 아두이노 프로그램<br></br>개발</div>
                                        <div className="bottom"
                                        style={{ letterSpacing: '-1px', lineHeight: '1.5', width: '360px' }}
                                        >
                                        피지컬 컴퓨팅 도구인 아두이노는 입출력 장치를 통해<br></br>
현실세계와 상호작용하는 물리적인 시스템을 만들기 위해<br></br>
사용하는 소형 컴퓨터입니다.<br></br>
아두이노 하드웨어에 익숙하지 않더라도 메타버스 공간 속<br></br>
사물을 제어하는 프로그램을 시뮬레이션하면서 아두이노를<br></br>
이용한 피지컬 컴퓨팅에 익숙해 질 수 있습니다.
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
                                        background: '#71BCF1',
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
                                            background: '#EBF7FF',
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
                                            >아두이노<br></br>시작하기</div>

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
1. LED를 키는데 필요한 명령어 알아보기<br></br>
2. LED를 활용하여 신호등 동작시키기<br></br>
3. 변수와 출력 명령어를 사용하여 화면에 메시지 출력해보기
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
                                            >아두이노<br></br>확장하기 1</div>

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
1. 버튼으로 전등 제어하기<br></br>
2. 반복 명령어 알아보기<br></br>
3. 버튼을 눌러 전등을 깜빡이게 해보기
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
                                            >아두이노<br></br>확장하기 2</div>

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
1. 거리를 측정하는데 필요한 명령어 알아보기<br></br>
2. 장애물까지의 거리를 측정해보기<br></br>
3. 사람을 감지하는 자동 조명 시스템 만들어보기
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
                                        background: '#71BCF1',
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
                                            background: '#EBF7FF',
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
                                            >아두이노<br></br>시작하기</div>

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
1. LED를 키는데 필요한 명령어 알아보기<br></br>
2. LED를 활용하여 신호등 동작시키기<br></br>
3. 변수와 출력 명령어를 사용하여 화면에 메시지 출력해보기<br></br>
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
                                            >아두이노<br></br>확장하기 1</div>

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
1. 버튼으로 전등 제어하기<br></br>
2. 필요한 반복 명령어 알아보기<br></br>
3. 버튼을 눌러 전등을 깜빡이게 해보기<br></br>
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
                                            >아두이노<br></br>확장하기 2</div>

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
1. 거리를 측정하는데 필요한 명령어 알아보기<br></br>
2. 장애물까지의 거리를 측정해보기<br></br>
3. 사람을 감지하는 자동 조명 시스템 만들어보기
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
                                            >아두이노<br></br>활용하기 1</div>

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
1. 소리를 출력하는데 필요한 명령어 알아보기<br></br>
2. 필요한 조건 명령어 알아보기<br></br>
3. 침입자를 감지하는 방범 시스템 만들어보기
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
                                            >아두이노<br></br>활용하기 2
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
1. 빛 센서를 활용하여 방 안의 밝기를 측정해보기<br></br>
2. 필요한 조건 명령어 알아보기<br></br>
3. 밝기가 자동으로 변하는 조명 시스템 만들기
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
                                            >아두이노<br></br>활용하기 3
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
1. 충돌 감지를 통해 충돌 경고 시스템 만들어보기<br></br>
2. 자동차 모터 제어 방법 알아보기<br></br>
3. 자동차 조종 시스템 만들어보기
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

export default ProgramPage4;