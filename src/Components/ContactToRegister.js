import { useEffect, useState } from "react";
import Header2 from "./Header2";
import MapKaKao from "./MapKakao";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { useDaumPostcodePopup } from 'react-daum-postcode';
import AgreeDescription from "./AgreeDescription";


// react-calendar API 모음:
// https://github.com/wojtekmaj/react-calendar


// 센터 정보
const centerInfo = {
    mokdong: {
        name: '씨큐브코딩 서초코어센터',
        address: '서울시 서초구 고무래로 26 쌍동빌딩 동관 3층',
        contactNumber: '02-537-2900'
    }
}


// 수업 일정 - 사용자가 선택한 날짜 데이터
const barInfo = [
    {
        id: 'bar0',
        date: 'xxxx.xx.xx'
    },
    {
        id: 'bar1',
        date: 'xxxx.xx.xx'
    },
    {
        id: 'bar2',
        date: 'xxxx.xx.xx'
    },
];

// 도입 문의 페이지
const ContactToRegister = () => {
    // 제출할 유저 정보
    const [userInfo, setUserInfo] = useState({
        city: '',
        town: '',
        classesCount: '',
        studentsCount: '',
        program: '',
        lessonsCount: '',
        lessonDays: ['', '', ''],
        name: '',
        email: '',
        orgType: '',
        orgName: '',
        orgAddress: '',
        knowByrecommendation: false,
        knowByproposal: false,
        knowBywebSearch: false,
        knowByEtc: false,
        agree: false
    }
    );

    // 유저 정보 변경
    // 시/도 선택
    const onChangeCityInfo = (e) => {
        setUserInfo({
            ...userInfo,
            city: e.target.value
        });
    };

    // 구/군 선택
    const onChangeTownInfo = (e) => {
        setUserInfo({
            ...userInfo,
            town: e.target.value
        });
    };

    // 학급 수 선택
    const onChangeClassesCount = (e) => {
        setUserInfo({
            ...userInfo,
            classesCount: e.target.value
        });
    };

    // 교육인원 입력
    const onChangeStudentsCount = (e) => {
        setUserInfo({
            ...userInfo,
            studentsCount: e.target.value
        });
    }

    // 프로그램 선택
    const onChangeProgram = (e) => {
        setUserInfo({
            ...userInfo,
            program: e.target.value
        });
    }

    // 수업 횟수 선택
    const onChangeLessonsCount = (e) => {
        setUserInfo({
            ...userInfo,
            lessonsCount: e.target.value
        });
    }

    // 수업 일정 선택
    const onChangeLessonDays = () => {
        setUserInfo({
            ...userInfo,
            lessonDays: [barInfo[0], barInfo[1], barInfo[2]],
        });
    }

    // 신청자
    const onChangeName = (e) => {
        setUserInfo({
            ...userInfo,
            name: e.target.value
        });
    }

    // 이메일
    const onChangeEmail = (e) => {
        setUserInfo({
            ...userInfo,
            email: e.target.value
        });
    }

    // 휴대번호
    const onChangePhonNumber = (e) => {
        setUserInfo({
            ...userInfo,
            phoneNumber: e.target.value
        });
    }

    // 학교 명 / 기관 명
    const onChangeOrgName = (e) => {
        setUserInfo({
            ...userInfo,
            orgName: e.target.value
        });
    }

    // 수업 문의 경로
    // 지인추천
    const onChangeRecommendation = (e) => {
        setUserInfo({
            ...userInfo,
            knowByrecommendation: e.target.checked
        });
    }

    // 제안서
    const onChangeProposal = (e) => {
        setUserInfo({
            ...userInfo,
            knowByproposal: e.target.checked
        });
    }

    // 검색
    const onChangeWebSearch = (e) => {
        setUserInfo({
            ...userInfo,
            knowBywebSearch: e.target.checked
        });
    }

    // 기타
    const onChangeEtc = (e) => {
        setUserInfo({
            ...userInfo,
            knowByEtc: e.target.checked
        });
    }

    // 개인정보 수집 동의
    const onChangeAgree = (e) => {
        setUserInfo({
            ...userInfo,
            agree: e.target.checked
        });
    }


    // ☆☆☆☆☆☆☆☆ 수업 일정 ☆☆☆☆☆☆☆☆
    // 달력 날짜 스테이트 관리
    // value <- 날짜 저장
    const [value, onChange] = useState(new Date());

    // 달력 날짜 클릭할 때마다, 날짜 저장
    const SaveDate = (value) => {
        if (pointer === 0) {
            barInfo[0].date = value.toLocaleDateString();
        }
        if (pointer === 1) {
            barInfo[1].date = value.toLocaleDateString();
        }
        if (pointer === 2) {
            barInfo[2].date = value.toLocaleDateString();
        }

        onChangeLessonDays();
    }


    // 날짜 표시바의 위치 지정
    const [pointer, setPointer] = useState(0);

    // 더하기 버튼 클릭 시, 바 보이기
    const AddBar = () => {
        // 중복 등록 막기
        if ((barInfo[0].date != 'xxxx.xx.xx') && (barInfo[1].date != 'xxxx.xx.xx')) {
            if ((barInfo[0].date === barInfo[1].date)) {
                alert('동일한 날짜를 여러번 등록할 수 없습니다.');
                return;
            }
        }
        if ((barInfo[0].date != 'xxxx.xx.xx') && (barInfo[1].date != 'xxxx.xx.xx') && (barInfo[2].date != 'xxxx.xx.xx')) {
            if ((barInfo[0].date === barInfo[2].date)) {
                alert('동일한 날짜를 여러번 등록할 수 없습니다.');
                return;
            }
            if ((barInfo[1].date === barInfo[2].date)) {
                alert('동일한 날짜를 여러번 등록할 수 없습니다.');
                return;
            }
        }

        // 날짜 미입력 또는 3개 이상 바 추가시 에러창 표시
        if ((pointer === 0 && barInfo[0].date === 'xxxx.xx.xx')) {
            alert('날짜를 선택해주세요.');
            return;
        }
        if ((pointer === 1 && barInfo[1].date === 'xxxx.xx.xx')) {
            alert('날짜를 선택해주세요.');
            return;
        }
        if ((pointer === 2 && barInfo[2].date === 'xxxx.xx.xx')) {
            alert('날짜를 선택해주세요.');
            return;
        }
        if (pointer >= 2) {
            setPointer(2);
            alert('수업 일정은 최대 3개까지만 등록가능합니다.');
        } else {
            setPointer(pointer + 1);
        }
    }

    // 빼기 버튼 클릭 시, 바가 사라지고 데이터 초기화
    const DeleteBar = () => {
        if (pointer <= 0) {
            setPointer(0);
        } else {
            setPointer(pointer - 1);
            barInfo[pointer].date = 'xxxx.xx.xx'
        }
    }

    // '' 화면 표시, 'none' 화면 미표시
    const [bar1DisplayValue, bar1ShowDisplayValue] = useState('none');
    const [bar2DisplayValue, bar2ShowDisplayValue] = useState('none');
    const [bar3DisplayValue, bar3ShowDisplayValue] = useState('none');
    // pointer 값에 따라 날짜 표시바를 보여줌
    const ShowBar = () => {
        const Bar0 = () => {
            return (
                <div className="barWrap">
                    <div className="circleNum" style={{ display: bar1DisplayValue }}>
                        1
                    </div>
                    <div id={barInfo[0].id} style={{ width: '200px', height: '30px', backgroundColor: "white", border: "solid", display: bar1DisplayValue }}>
                        {barInfo[0].date}
                    </div>
                </div>
            );
        }

        const Bar1 = () => {
            return (
                <div className="barWrap">
                    <div className="circleNum" style={{ display: bar2DisplayValue }}>
                        2
                    </div>
                    <div id={barInfo[1].id} style={{ width: '200px', height: '30px', backgroundColor: "white", border: "solid", display: bar2DisplayValue }}>
                        {barInfo[1].date}
                    </div>
                </div>
            );
        }

        const Bar2 = () => {
            return (
                <div className="barWrap">
                    <div className="circleNum" style={{ display: bar3DisplayValue }}>
                        3
                    </div>
                    <div id={barInfo[2].id} style={{ width: '200px', height: '30px', backgroundColor: "white", border: "solid", display: bar3DisplayValue }}>
                        {barInfo[2].date}
                    </div>
                </div>
            );
        }

        if (pointer === 0) {
            bar1ShowDisplayValue('');
            bar2ShowDisplayValue('none');
            bar3ShowDisplayValue('none');

        }
        if (pointer === 1) {
            bar1ShowDisplayValue('');
            bar2ShowDisplayValue('');
            bar3ShowDisplayValue('none');
        }
        if (pointer === 2) {
            bar1ShowDisplayValue('');
            bar2ShowDisplayValue('');
            bar3ShowDisplayValue('');
        }


        return (
            <div className="left">
                <Bar0 />
                <Bar1 />
                <Bar2 />
            </div>
        );
    };



    // 라디오버튼 클릭값(학교, 학교 외 기관)
    const [orgType, selectOrgType] = useState("");
    // 주소 입력창 표시 상태값
    const [showInputAddress, setShowInputAddress] = useState("none");
    // 주소창에서 선택한 주소 상태값
    const [address, setAddress] = useState("");

    // 라디오버튼 이벤트핸들러
    const RadioHandler = (e) => {
        let tmp = e.target.value;
        selectOrgType(tmp);

        // User Info에 학교 명/기관 명 전달
        setUserInfo({
            ...userInfo,
            orgType: tmp
        });
    }

    // useEffect로 라디오값 동기처리
    useEffect(() => {
        if (orgType === "학교" || orgType === "학교외기관") {
            setShowInputAddress(""); // 여기서 학교 기관 정보 넘겨야 함
        }

        if (address != "") {
            console.log(address); // 여기서 학교 기관 주소 정보 넘겨야 함
        }

    }, [orgType, address]);

    const Postcode = () => {
        const open = useDaumPostcodePopup();

        const handleComplete = (data) => {
            let fullAddress = data.address;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }

            setAddress(fullAddress);

            // UserInfo에 주소 정보 전달
            setUserInfo({
                ...userInfo,
                orgAddress: fullAddress,
            });
        };

        const handleClick = () => {
            open({ onComplete: handleComplete });
        };

        return (
            <input
                type="text"
                placeholder="학교/기관 주소"
                style={{ width: '400px', height: '24px', textAlign: 'center' }}
                onClick={handleClick}
                value={address}
            >
            </input>
        );
    };

    // 개인동의 설명 규칙 보이기 상태값
    const [showAgreeDescription, setShowAgreeDescription] = useState('none');

    // 개인동의 설명 규칙 버튼 핸들러
    const AgreeDescriptionBtnHandler = () => {

        if (showAgreeDescription == 'none') {
            setShowAgreeDescription('');
        }
        else {
            setShowAgreeDescription('none');
        }
    }


    // 제출버튼 핸들러
    const submitHandler = () => {
        let values = Object.values(userInfo);
        if (values.includes('')) {
            alert('빈칸을 꼭 채워주세요.')
        } else if (userInfo.agree == false) {
            alert('개인정보 수집 이용에 동의하지 않으시면, 신청하실 수 없습니다.')
        }
    }

    const [showCenterName, setShowCenterName] = useState('');
    const [showCenterAddress, setShowCenterAddress] = useState('');
    const [showCenterPhoneNumber, setShowCenterPhoneNumber] = useState('');
    // 지도 마커버튼핸들러
    const onMarkerHandler = (e) => {
        if (e.target.className == "_mokdong marker") {
            console.log(`${centerInfo.mokdong.name} / ${centerInfo.mokdong.address} / ${centerInfo.mokdong.contactNumber}`);
            setShowCenterName(centerInfo.mokdong.name);
            setShowCenterAddress(centerInfo.mokdong.address);
            setShowCenterPhoneNumber(centerInfo.mokdong.contactNumber);
        }
    }


    return (
        <div className="contactToRegister">
            <Header2 />
            <div className="wrap">
                <div className="introduction" >
                    <div className="title">
                        <div className="customH7">
                            FROMC 프로그램 도입 문의
                        </div>
                        <div className="customP6">
                            관심있는 교육 프로그램 도입 문의를 주시면<br></br>담당자가 24시간 내에 연락드립니다.
                        </div>
                    </div>
                </div>
                <div className="selectRegion">
                    <div className="wrap">
                        <div className="title">
                            <div className="top">
                                <div className="icon">
                                    <div className="src"></div>
                                </div>
                                <div className="contents">
                                    <div className="customH2">
                                        서비스 가능지역
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="customH3">
                                    서비스 가능 지역 확인 후 도입 신청을 이용해 주세요.
                                </div>
                            </div>
                        </div>
                        <div className="mapWrap">
                            <div
                                className="mokdong"
                                name="mokdong"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_mokdong marker">

                                </div>
                            </div>
                            <div className="source">
                                {/* <MapKaKao /> */}
                            </div>
                        </div>
                        <div className="information">
                            <div className="wrap">
                                <div className="left">
                                    <div className="src"></div>
                                </div>
                                <div className="right">
                                    <div className="centerName">
                                        <div className="customH8">
                                            문의처
                                        </div>
                                    </div>
                                    <div className="centerAddress">
                                        <div className="wrap">
                                            <div className="left">
                                                <div className="customH3">
                                                    센터 주소
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="wrap">
                                                    <div className="customP">
                                                        {showCenterName}
                                                    </div>
                                                    <div className="customP">
                                                        {showCenterAddress}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="centerPhoneNumber">
                                        <div className="wrap">
                                            <div className="left">
                                                <div className="customH3">
                                                    전화번호
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="customP">
                                                    {showCenterPhoneNumber}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hopeRegion">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                도입희망지역
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className='list' style={{ width: '40%', height: '70%' }}>
                                <select
                                    style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}
                                    onChange={onChangeCityInfo}
                                >

                                    <option value=''>시/도 선택</option>
                                    <option value='서울'>서울</option>
                                    <option value='경기'>경기</option>
                                </select>
                            </div>

                            <div className='list' style={{ width: '40%', height: '70%' }}>
                                <select
                                    style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}
                                    onChange={onChangeTownInfo}
                                >
                                    <option value=''>구/군 선택</option>
                                    <option value='강남구'>강남구</option>
                                    <option value='노원구'>노원구</option>
                                    <option value='서초구'>서초구</option>
                                    <option value='송파구'>송파구</option>
                                    <option value='양천구'>양천구</option>
                                    <option value=''>--------------</option>
                                    <option value='성남시'>성남시</option>
                                    <option value='안양시'>안양시</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="howManyClasses">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                학급 수
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className='list' style={{ width: '40%', height: '70%' }}>
                                <select
                                    style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}
                                    onChange={onChangeClassesCount}
                                >
                                    <option value=''>선택해주세요.</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                    <option value='11'>11</option>
                                    <option value='12'>12</option>
                                    <option value='13'>13</option>
                                    <option value='14'>14</option>
                                    <option value='15'>15</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="numberOfStudents">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                교육인원
                            </div>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="총 도입 예상 인원"
                                style={{ width: '200px', height: '24px', textAlign: 'center' }}
                                value={userInfo.studentsCount}
                                onChange={onChangeStudentsCount}
                            ></input>
                        </div>
                    </div>
                </div>

                {/* ☆☆☆☆☆☆☆☆ 실제 상품이 나오면, value 값 변경 */}
                <div className="selectProgram">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                프로그램 선택
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className='list' style={{ width: '40%', height: '70%' }}>
                                <select
                                    style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}
                                    onChange={onChangeProgram}
                                >
                                    <option value=''>선택해주세요.</option>
                                    <option value='항목1'>항목1</option>
                                    <option value='항목2'>항목2</option>
                                    <option value='항목3'>항목3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="typeOfLesson">
                    <div className="wrap">
                        <div className="title">
                            <div className="wrap">
                                <div className="customH2">
                                    수업 형태
                                </div>
                                <div className="customP">
                                    수업 형태는 원데이 클래스 입니다.
                                </div>
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className="customH4">
                                원데이 클래스
                            </div>
                        </div>
                    </div>
                </div>

                <div className="numbersOfLessons">
                    <div className="wrap">
                        <div className="title">
                            <div className="wrap">
                                <div className="customH2">
                                    수업 횟수
                                </div>
                                <div className="customP">
                                    각 수업은 3~6시간 동안 진행됩니다
                                </div>
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className='list' style={{ width: '40%', height: '70%' }}>
                                <select
                                    style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}
                                    onChange={onChangeLessonsCount}
                                >
                                    <option value=''>선택해주세요.</option>
                                    <option value='3교시'>3교시</option>
                                    <option value='6교시'>6교시</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="selectLessonDays">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                수업 일정
                            </div>
                            <div className="customP">
                                해당 캘린더는 일정 확인용으로, 가일정 선택 단계입니다. <br></br>최종 수업 일정은 도입 신청이 완료된 후 상담을 통해 가능합니다.
                            </div>
                        </div>

                        {/* 달력 */}
                        <div className="calendarWrap">
                            <div className="calendar">
                                <Calendar
                                    onChange={onChange}
                                    onClickDay={(value, event) => {
                                        SaveDate(value);
                                    }}
                                    calendarType="US"
                                    value={value}
                                    minDate={new Date()}
                                    // maxDate={new Date("12-31-2022")}

                                    // 하이라이트 처리
                                    tileClassName={({ date, view }) => {
                                        if ((date.toLocaleDateString() === barInfo[0].date) || (date.toLocaleDateString() === barInfo[1].date) || (date.toLocaleDateString() === barInfo[2].date)) {
                                            return 'highlight'
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="bars">
                            <div className="wrap">
                                <ShowBar />
                                <div className="right">
                                    <div className="controlWrap">
                                        <button className="addBtn" onClick={AddBar} >+</button>
                                        <button className="discardBtn" onClick={DeleteBar}>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="applicant">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                신청자
                            </div>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="신청자 이름"
                                style={{ width: '200px', height: '24px', textAlign: 'center' }}
                                value={userInfo.name}
                                onChange={onChangeName}
                            ></input>
                        </div>
                    </div>
                </div>

                <div className="email">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                이메일
                            </div>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="작성자 이메일"
                                style={{ width: '200px', height: '24px', textAlign: 'center' }}
                                value={userInfo.email}
                                onChange={onChangeEmail}
                            ></input>
                        </div>
                    </div>
                </div>

                <div className="phoneNumber">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                휴대번호
                            </div>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="휴대폰 번호"
                                style={{ width: '200px', height: '24px', textAlign: 'center' }}
                                value={userInfo.phoneNumber}
                                onChange={onChangePhonNumber}
                            ></input>
                        </div>
                    </div>
                </div>

                <div className="selectOrg">
                    <div className="wrap">
                        <div className="title">
                            <div className="wrap">
                                <div className="customH2">
                                    기관 선택
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="wrap">
                                <div className="selectOrgType">
                                    <div className="left" style={{ width: '200px' }}>
                                        <input
                                            type="radio"
                                            className="school"
                                            value="학교"
                                            checked={orgType === "학교"}
                                            // target 전달방식 참고
                                            onChange={(e) => RadioHandler(e)}
                                        ></input>
                                        학교
                                    </div>
                                    <div className="right" style={{ width: '200px' }}>
                                        <input
                                            type="radio"
                                            className="public"
                                            value="학교외기관"
                                            checked={orgType === "학교외기관"}
                                            onChange={(e) => RadioHandler(e)}
                                        ></input>
                                        학교 외 기관
                                    </div>
                                </div>
                                <div className="findOrgAddress" style={{ display: showInputAddress }}>
                                    <div className="top">
                                        <div className="title">
                                            <div className="customP2">
                                                학교 명/기관 명
                                            </div>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="학교 명/기관 명"
                                                style={{ width: '400px', height: '24px', textAlign: 'center' }}
                                                // value={userInfo.orgName}
                                                value={userInfo.orgName}
                                                onChange={onChangeOrgName}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title">
                                            <div className="customP2">
                                                학교명/기관 주소
                                            </div>
                                        </div>

                                        <Postcode />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="howToKnowUs">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                수업 문의 경로
                            </div>
                        </div>
                        <div className="boxesWrap">
                            <div className="box1" style={{ width: '100px', height: '24px' }}>
                                <input
                                    type="checkbox"
                                    onChange={onChangeRecommendation}
                                ></input>
                                <div className="customP">지인 추천</div>
                            </div>
                            <div className="box1" style={{ width: '100px', height: '24px' }}>
                                <input
                                    type="checkbox"
                                    onChange={onChangeProposal}
                                ></input>
                                <div className="customP">제안서</div>
                            </div>
                            <div className="box1" style={{ width: '100px', height: '24px' }}>
                                <input
                                    type="checkbox"
                                    onChange={onChangeWebSearch}
                                ></input>
                                <div className="customP">검색</div>
                            </div>
                            <div className="box1" style={{ width: '100px', height: '24px' }}>
                                <input
                                    type="checkbox"
                                    onChange={onChangeEtc}
                                ></input>
                                <div className="customP">기타</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Agree">
                    <div className="wrap">
                        <div className="top">
                            <div className="customH2">
                                *개인정보 수집, 이용에 대한 동의
                            </div>
                            <div className="boxesWrap">
                                <div className="agreeBox" style={{ width: '100px', height: '24px' }}>
                                    <input
                                        type="checkbox"
                                        onChange={onChangeAgree}
                                    ></input>
                                    <div className="customP">동의 함</div>
                                </div>
                                <a
                                    className="agreeDescriptionBtn"
                                    onClick={AgreeDescriptionBtnHandler}
                                    style={{ width: '24px', height: '24px' }}></a>
                            </div>
                        </div>
                        <div className="bottom">
                            <AgreeDescription display={showAgreeDescription} />
                        </div>
                    </div>
                </div>

                <div className="Submit">
                    <button
                        onClick={submitHandler}
                    >제출하기</button>
                </div>
            </div>
        </div>
    );
}

export default ContactToRegister;