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
                                    >01</span>씨큐브코딩의 우수한 연구진들이 자체적으로 콘텐츠를 개발하였습니다.
                                </h2>
                                <p className="customP">
                                    다년간 코딩 콘텐츠 제작 및 강의 경험과 코딩 지식을 바탕으로 개발된 콘텐츠를 제공합니다.
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
                                02</span>디지털 신기술을 개발 · 활용 · 운용하는 데 필요한 지식과 역량을 기르는 훈련을 합니다.
                                </h2>
                                <p className="customP">
                                인공지능, 메타버스(VR, AR), SW, 게임 개발등의 디지털 신기술을 일상생활에 적용하여 학습함으로써, 디지털 전문성을 갖추도록 합니다.
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
                                03</span>학생 개개인의 산출물을 위한 실습중심 교육을 제공합니다.
                                </h2>
                                <p className="customP">
                                학습자가 주도적으로 실습하는 과정을 경험으로써, 산출물의 코딩원리와 로직을 이해하는 방법을 익힐 수 있습니다.
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