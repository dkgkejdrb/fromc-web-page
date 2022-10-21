const Features = () => {
    return (
        <div className="features">
            <div className="wrap">
                <div key="firstLine" className="firstLine leftPictureSection">
                    <div className="contents">
                        <div className="picture">
                            <div className="wrap">
                                <div className="source">
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="wrap">
                                <h2 className="customH2">
                                    <span
                                        style={{ color: '#6F3AC1'}}
                                    >01</span>씨큐브코딩에서 개발한 전문 코딩교육 커리큘럼을 제공합니다
                                </h2>
                                <p className="customP">
                                국내 SW교육을 대표하는 씨큐브코딩의 전문성과<br></br>교육 노하우를 담아 학교와 기관을 위한 다양한 창의융합<br></br>프로그램을 지원합니다
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div key="secondLine" className="secondLine rightPictureSection">
                    <div className="contents">
                    <div className="text">
                            <div className="wrap">
                                <h2 className="customH2">
                                <span
                                        style={{ color: '#6F3AC1'}}
                                    >
                                02</span>디지털 신기술을 개발 · 활용 · 운용<br></br>하는 데 필요한 지식과 역량을 기르는 훈련을 합니다
                                </h2>
                                <p className="customP">
                                인공지능, 메타버스(VR, AR), SW, 게임 개발 등의 디지털 신기술을 일상생활에 적용하여 학습함으로써, <br></br>디지털 전문성을 갖추도록 합니다
                                </p>
                            </div>
                        </div>
                        <div className="picture">
                            <div className="wrap">
                                <div className="source">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div key="thirdLine" className="thirdLine leftPictureSection">
                    <div className="contents">
                        <div className="picture">
                            <div className="wrap">
                                <div className="source">

                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="wrap">
                                <h2 className="customH2">
                                <span
                                        style={{ color: '#6F3AC1'}}
                                    >
                                03</span>학생 개개인의 산출물을 위한 실습<br></br>중심 교육을 제공합니다
                                </h2>
                                <p className="customP">
                                학습자가 주도적으로 실습하는 과정을 경험으로써,<br></br>산출물의 코딩 원리와 로직을 이해하는 방법을 익힐 수<br></br>있습니다
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