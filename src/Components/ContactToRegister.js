import { useEffect, useState } from "react";
import Header2 from "./Header2";
import MapKaKao from "./MapKakao";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { useDaumPostcodePopup } from 'react-daum-postcode';
import AgreeDescription from "./AgreeDescription";

import mapDefault from "../Assets/default_map.svg"
import mapBoondang from "../Assets/boondang.svg"
import mapPyeongchon from "../Assets/pyeongchon.svg"
import mapJamsil from "../Assets/jamsil.svg"
import mapDaechi from "../Assets/daechi.svg"
import mapSeocho from "../Assets/seocho.svg"
import mapMokdong from "../Assets/mokdong.svg"
import mapJoonggae from "../Assets/joonggae.svg"

// react-calendar API 모음:
// https://github.com/wojtekmaj/react-calendar


// 센터 정보
const centerInfo = {
    seocho: {
        name: '씨큐브코딩 서초코어센터',
        address: '서울시 서초구 고무래로 26 쌍동빌딩 동관 3층',
        contactNumber: '02-537-2900'
    },

    daechi: {
        name: '씨큐브코딩 대치센터',
        address: '서울시 강남구 삼성로71길 18 대치스터디타워 3,4층',
        contactNumber: '02-537-3800'
    },

    mokdong: {
        name: '씨큐브코딩 목동센터',
        address: '서울시 양천구 목동서로 133 CMS W빌딩 1층',
        contactNumber: '02-2645-2600'
    },

    jamsil: {
        name: '씨큐브코딩 잠실센터',
        address: '서울시 송파구 석촌호수로 88 대원빌딩 6층',
        contactNumber: '02-3431-2100'
    },

    joonggae: {
        name: '씨큐브코딩 중계센터',
        address: '서울시 노원구 중계로 225 청구상가 4층',
        contactNumber: '02-930-4200'
    },

    boondang: {
        name: '씨큐브코딩 분당센터',
        address: '경기도 성남시 분당구 느티로27 하나프라자 4층',
        contactNumber: '031-726-4300'
    },

    pyeongchon: {
        name: '씨큐브코딩 평촌센터',
        address: '경기도 안양시 동안구 평촌대로 136 신세기타운 6층 601~3호',
        contactNumber: '031-387-2600'
    },

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
                    <div
                        className="circleNum"
                        style={{
                            display: bar1DisplayValue
                        }}>
                        1
                    </div>
                    <div id={barInfo[0].id} style={{ display: bar1DisplayValue }}>
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
                    <div id={barInfo[1].id} style={{ display: bar2DisplayValue }}>
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
                    <div id={barInfo[2].id} style={{ display: bar3DisplayValue }}>
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
    const [showCenterMap, setShowCenterMap] = useState(`url(${mapDefault})`);
    const [scaleUpSeocho, setScaleUpSeocho] = useState('20px');
    const [scaleUpDaechi, setScaleUpDaechi] = useState('20px');
    const [scaleUpMokdong, setScaleUpMokdong] = useState('20px');
    const [scaleUpJamsil, setScaleUpJamsil] = useState('20px');
    const [scaleUpJoonggae, setScaleUpJoonggae] = useState('20px');
    const [scaleUpBoondang, setScaleUpBoondang] = useState('20px');
    const [scaleUpPyeongchon, setScaleUpPyeongchon] = useState('20px');
    useState();
    // 지도 마커버튼핸들러
    const onMarkerHandler = (e) => {
        if (e.target.className == "_seocho marker") {
            console.log(`${centerInfo.seocho.name} / ${centerInfo.seocho.address} / ${centerInfo.seocho.contactNumber}`);
            setShowCenterName(centerInfo.seocho.name);
            setShowCenterAddress(centerInfo.seocho.address);
            setShowCenterPhoneNumber(centerInfo.seocho.contactNumber);
            setShowCenterMap(`url(${mapSeocho})`);
            setScaleUpSeocho('26px');
            setScaleUpDaechi('20px');
            setScaleUpMokdong('20px');
            setScaleUpJamsil('20px');
            setScaleUpJoonggae('20px');
            setScaleUpBoondang('20px');
            setScaleUpPyeongchon('20px');
        }

        if (e.target.className == "_daechi marker") {
            console.log(`${centerInfo.daechi.name} / ${centerInfo.daechi.address} / ${centerInfo.daechi.contactNumber}`);
            setShowCenterName(centerInfo.daechi.name);
            setShowCenterAddress(centerInfo.daechi.address);
            setShowCenterPhoneNumber(centerInfo.daechi.contactNumber);
            setShowCenterMap(`url(${mapDaechi})`);
            setScaleUpSeocho('20px');
            setScaleUpDaechi('26px');
            setScaleUpMokdong('20px');
            setScaleUpJamsil('20px');
            setScaleUpJoonggae('20px');
            setScaleUpBoondang('20px');
            setScaleUpPyeongchon('20px');
        }

        if (e.target.className == "_mokdong marker") {
            console.log(`${centerInfo.mokdong.name} / ${centerInfo.mokdong.address} / ${centerInfo.mokdong.contactNumber}`);
            setShowCenterName(centerInfo.mokdong.name);
            setShowCenterAddress(centerInfo.mokdong.address);
            setShowCenterPhoneNumber(centerInfo.mokdong.contactNumber);
            setShowCenterMap(`url(${mapMokdong})`);
            setScaleUpSeocho('20px');
            setScaleUpDaechi('20px');
            setScaleUpMokdong('26px');
            setScaleUpJamsil('20px');
            setScaleUpJoonggae('20px');
            setScaleUpBoondang('20px');
            setScaleUpPyeongchon('20px');
        }

        if (e.target.className == "_jamsil marker") {
            console.log(`${centerInfo.jamsil.name} / ${centerInfo.jamsil.address} / ${centerInfo.jamsil.contactNumber}`);
            setShowCenterName(centerInfo.jamsil.name);
            setShowCenterAddress(centerInfo.jamsil.address);
            setShowCenterPhoneNumber(centerInfo.jamsil.contactNumber);
            setShowCenterMap(`url(${mapJamsil})`);
            setScaleUpSeocho('20px');
            setScaleUpDaechi('20px');
            setScaleUpMokdong('20px');
            setScaleUpJamsil('26px');
            setScaleUpJoonggae('20px');
            setScaleUpBoondang('20px');
            setScaleUpPyeongchon('20px');
        }

        if (e.target.className == "_joonggae marker") {
            console.log(`${centerInfo.joonggae.name} / ${centerInfo.joonggae.address} / ${centerInfo.joonggae.contactNumber}`);
            setShowCenterName(centerInfo.joonggae.name);
            setShowCenterAddress(centerInfo.joonggae.address);
            setShowCenterPhoneNumber(centerInfo.joonggae.contactNumber);
            setShowCenterMap(`url(${mapJoonggae})`);
            setScaleUpSeocho('20px');
            setScaleUpDaechi('20px');
            setScaleUpMokdong('20px');
            setScaleUpJamsil('20px');
            setScaleUpJoonggae('26px');
            setScaleUpBoondang('20px');
            setScaleUpPyeongchon('20px');
        }

        if (e.target.className == "_boondang marker") {
            console.log(`${centerInfo.boondang.name} / ${centerInfo.boondang.address} / ${centerInfo.boondang.contactNumber}`);
            setShowCenterName(centerInfo.boondang.name);
            setShowCenterAddress(centerInfo.boondang.address);
            setShowCenterPhoneNumber(centerInfo.boondang.contactNumber);
            setShowCenterMap(`url(${mapBoondang})`);
            setScaleUpSeocho('20px');
            setScaleUpDaechi('20px');
            setScaleUpMokdong('20px');
            setScaleUpJamsil('20px');
            setScaleUpJoonggae('20px');
            setScaleUpBoondang('26px');
            setScaleUpPyeongchon('20px');
        }

        if (e.target.className == "_pyeongchon marker") {
            console.log(`${centerInfo.pyeongchon.name} / ${centerInfo.pyeongchon.address} / ${centerInfo.pyeongchon.contactNumber}`);
            setShowCenterName(centerInfo.pyeongchon.name);
            setShowCenterAddress(centerInfo.pyeongchon.address);
            setShowCenterPhoneNumber(centerInfo.pyeongchon.contactNumber);
            setShowCenterMap(`url(${mapPyeongchon})`);
            setScaleUpSeocho('20px');
            setScaleUpDaechi('20px');
            setScaleUpMokdong('20px');
            setScaleUpJamsil('20px');
            setScaleUpJoonggae('20px');
            setScaleUpBoondang('20px');
            setScaleUpPyeongchon('26px');
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
                                className="seocho"
                                name="seocho"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_seocho marker">

                                </div>
                                <div className="_seochoCenterInfo">
                                    <div className="_seochoCenterName"
                                        style={{
                                            fontSize: scaleUpSeocho
                                        }}>
                                        서초코어센터
                                    </div>
                                    <div className="_seochoCenterPhoneNumber"
                                        style={{
                                            fontSize: scaleUpSeocho
                                        }}>
                                        02-537-2900
                                    </div>
                                </div>
                            </div>
                            <div
                                className="daechi"
                                name="daechi"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_daechi marker">

                                </div>
                                <div className="_daechiCenterInfo">
                                    <div className="_daechiCenterName"
                                        style={{
                                            fontSize: scaleUpDaechi
                                        }}>
                                        대치센터
                                    </div>
                                    <div className="_daechiCenterPhoneNumber"
                                        style={{
                                            fontSize: scaleUpDaechi
                                        }}>
                                        02-537-2900
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mokdong"
                                name="mokdong"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_mokdong marker">

                                </div>
                                <div className="_mokdongCenterInfo">
                                    <div className="_mokdongCenterName"
                                        style={{
                                            fontSize: scaleUpMokdong
                                        }}>
                                        목동센터
                                    </div>
                                    <div className="_mokdongCenterPhoneNumber"
                                        style={{
                                            fontSize: scaleUpMokdong
                                        }}>
                                        02-2645-2600
                                    </div>
                                </div>
                            </div>
                            <div
                                className="jamsil"
                                name="jamsil"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_jamsil marker">

                                </div>
                                <div className="_jamsilCenterInfo">
                                    <div className="_jamsilCenterName"
                                        style={{
                                            fontSize: scaleUpJamsil
                                        }}>
                                        잠실센터
                                    </div>
                                    <div className="_jamsilCenterPhoneNumber"
                                        style={{
                                            fontSize: scaleUpJamsil
                                        }}>
                                        02-3431-2100
                                    </div>
                                </div>
                            </div>
                            <div
                                className="joonggae"
                                name="joonggae"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_joonggae marker">

                                </div>
                                <div className="_joonggaeCenterInfo">
                                    <div className="_joonggaeCenterName"
                                        style={{
                                            fontSize: scaleUpJoonggae
                                        }}>
                                        중계센터
                                    </div>
                                    <div className="_joonggaeCenterPhoneNumber"
                                        style={{
                                            fontSize: scaleUpJoonggae
                                        }}>
                                        02-930-4200
                                    </div>
                                </div>
                            </div>
                            <div
                                className="boondang"
                                name="boondang"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_boondang marker">

                                </div>
                                <div className="_boondangCenterInfo">
                                    <div className="_boondangCenterName"
                                        style={{
                                            fontSize: scaleUpBoondang
                                        }}>
                                        분당센터
                                    </div>
                                    <div className="_boondangCenterPhoneNumber"
                                        style={{
                                            fontSize: scaleUpBoondang
                                        }}>
                                        031-726-4300
                                    </div>
                                </div>
                            </div>
                            <div
                                className="pyeongchon"
                                name="pyeongchon"
                                onMouseOver={(e) => onMarkerHandler(e)}
                            >
                                <div className="_pyeongchon marker">

                                </div>
                                <div className="_pyeongchonCenterInfo">
                                    <div className="_pyeongchonCenterName"
                                        style={{
                                            fontSize: scaleUpPyeongchon
                                        }}>
                                        평촌센터
                                    </div>
                                    <div className="_pyeongchonCenterPhoneNumber"
                                        style={{
                                            fontSize: scaleUpPyeongchon
                                        }}>
                                        031-387-2600
                                    </div>
                                </div>
                            </div>



                            {/* 직영선택 지도  */}
                            <div
                                className="source"
                                style={{
                                    backgroundImage: showCenterMap
                                }}

                            >
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
                                                <div className="customH9">
                                                    주소
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="wrap">
                                                    <div className="customP7">
                                                        {showCenterName}
                                                    </div>
                                                    <div className="customP7">
                                                        {showCenterAddress}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="centerPhoneNumber">
                                        <div className="wrap">
                                            <div className="left">
                                                <div className="customH9">
                                                    전화번호
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="customP8">
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

                <div className="Wrap">
                    <div className="hopeRegion">
                        <div className="wrap">
                            <div className="title">
                                <div className="customH10">
                                    도입희망지역
                                </div>
                            </div>
                            <div className="listWrap">
                                <div id='list'>
                                    <select
                                        onChange={onChangeCityInfo}
                                    >

                                        <option value=''>시/도 선택</option>
                                        <option value='서울'>서울</option>
                                        <option value='경기'>경기</option>
                                    </select>
                                </div>

                                <div id='list'>
                                    <select
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
                                <div className="customH10">
                                    학급 수
                                </div>
                            </div>
                            <div className="listWrap">
                                <div id='list'>
                                    <select
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
                                <div className="customH10">
                                    교육인원
                                </div>
                            </div>
                            <div className="input">
                                <input
                                    id="input"
                                    type="text"
                                    placeholder="총 도입 예상 인원"
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
                                <div className="customH10">
                                    프로그램 선택
                                </div>
                            </div>
                            <div className="listWrap">
                                <div id='list'>
                                    <select
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
                                    <div className="customH10">
                                        수업 형태
                                    </div>
                                    <div className="customP">
                                        수업 형태는 원데이 클래스 입니다.
                                    </div>
                                </div>
                            </div>
                            <div className="listWrap">
                                <div className="customP">
                                    원데이 클래스
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="numbersOfLessons">
                        <div className="wrap">
                            <div className="title">
                                <div className="wrap">
                                    <div className="customH10">
                                        수업 횟수
                                    </div>
                                    <div className="customP">
                                        각 수업은 3~6시간 동안 진행<br></br>됩니다.
                                    </div>
                                </div>
                            </div>
                            <div className="listWrap">
                                <div id='list'>
                                    <select
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
                </div>


                <div className="selectLessonDays">
                    <div className="wrap">
                        <div className="title">
                            <div className="top">
                                <div className="icon">
                                    <div className="source">

                                    </div>
                                </div>
                                <div className="customH11">
                                    수업 일정
                                </div>
                            </div>
                            <div className="customP9">
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
                            </div>
                            <div className="right">
                                <div className="controlWrap">
                                    <button className="addBtn" onClick={AddBar} >+</button>
                                    <button className="discardBtn" onClick={DeleteBar}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomWrap">
                    <div className="applicant">
                        <div className="wrap">
                            <div className="title">
                                <div className="customH12">
                                    신청자
                                </div>
                            </div>
                            <div className="input">
                                <input
                                    id="input"
                                    type="text"
                                    placeholder="신청자 이름"
                                    value={userInfo.name}
                                    onChange={onChangeName}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="email">
                        <div className="wrap">
                            <div className="title">
                                <div className="customH12">
                                    이메일
                                </div>
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="작성자 이메일"
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
        </div>
    );
}

export default ContactToRegister;