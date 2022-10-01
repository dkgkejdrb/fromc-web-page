import Header from "./Header";

const ContactToRegister = () => {

    const handleChange = (event) => {
        window.open(event.target.value);
    }

    return (
        <div className="contactToRegister">
            <Header />
            <div className="wrap">
                <div className="introduction" >
                    <div className="customH1">
                        FROMC 프로그램<br></br>도입 문의
                        <div className="customP">
                            관심있는 교육 프로그램 도입 문의를 주시면<br></br>메일or구두 상담을 통해 답변해 드립니다.
                        </div>
                    </div>
                </div>
                <div className="programsChoice">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                프로그램 선택
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className='list' onChange={handleChange} style={{ width: '40%', height: '70%' }}>
                                <select style={{ width: '400px', height: '40px', border: 'solid 0.1px white' }}>
                                    <option>선택해주세요.</option>
                                    <option value='https://creverse.com/'>크레버스</option>
                                    <option value='https://www.c3coding.com/'>씨큐브코딩</option>
                                    <option value='https://www.chungdahm.com/'>LC</option>
                                    <option value='https://vlc.chungdahm.com/'>VLC</option>
                                    <option value='https://www.cmsedu.co.kr/html/#cms_k_p31.php'>CMS영재교육센터</option>
                                    <option value='https://www.cmsedu.co.kr/html/index.php?mb=1#cms_k_p32.php'>영재관</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="numbersOfLesson">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                수업 횟수
                            </div>
                            <div className="customP">
                                각 수업은 3~6시간 동안 진행됩니다
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className='list' onChange={handleChange} style={{ width: '40%', height: '70%' }}>
                                <select style={{ width: '400px', height: '40px', border: 'solid 0.1px white' }}>
                                    <option>선택해주세요.</option>
                                    <option value='https://creverse.com/'>크레버스</option>
                                    <option value='https://www.c3coding.com/'>씨큐브코딩</option>
                                    <option value='https://www.chungdahm.com/'>LC</option>
                                    <option value='https://vlc.chungdahm.com/'>VLC</option>
                                    <option value='https://www.cmsedu.co.kr/html/#cms_k_p31.php'>CMS영재교육센터</option>
                                    <option value='https://www.cmsedu.co.kr/html/index.php?mb=1#cms_k_p32.php'>영재관</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selectRegion">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                프로그램 운영지역
                            </div>
                        </div>
                        <div className="mapWrap">
                            <div className="source">

                            </div>
                        </div>
                        <div className="instruction"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactToRegister;