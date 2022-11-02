import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link as LinkToRegsiter } from 'react-scroll';

import Header2 from "./Header2";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { useDaumPostcodePopup } from 'react-daum-postcode';

import AgreeDescription from "./AgreeDescription";
import Footer from './Footer';



import mapDefault from "../Assets/default_map.png"
import mapBoondang from "../Assets/boondang.png"
import mapPyeongchon from "../Assets/pyeongchon.png"
import mapJamsil from "../Assets/jamsil.png"
import mapDaechi from "../Assets/daechi.png"
import mapSeocho from "../Assets/seocho.png"
import mapMokdong from "../Assets/mokdong.png"
import mapJoonggae from "../Assets/joonggae.png"
import arrowUp from "../Assets/arrowUp.svg"
import arrowDown from "../Assets/arrowDown.svg"


// API 연동
import axios from 'axios';
let hostUrl = "http://49.247.24.46:1620/api/inquiry"; // 나중에 서버 구성되면 넣기(url, port 포함)


//email 정규식
const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;


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
        q: 0,
        id: 'bar0',
        date: '2022-OO-OO'
    },
    {
        q: 1,
        id: 'bar1',
        date: '2022-OO-OO'
    },
    {
        q: 2,
        id: 'bar2',
        date: '2022-OO-OO'
    },
];

// 수업 일정 > 내일 날짜
const date = new Date();
const tomorrow = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1));


// 도입 문의 페이지
const ContactToRegister = () => {
    // 제출할 유저 정보
    const [userInfo, setUserInfo] = useState({
        classCount: 0,
        studentCount: "",
        program: '',
        classType : '원데이 클래스',
        willIntroductionSido: '',
        willIntroductionGugun: '',
        obtainRoutes: [],

        agreePersonalInfo: false,
        operationOffice : {
            name : "서초 코어 센터",
            phoneNumber : "02-537-2900",
            address : "서울시 서초구 고무래로 26 쌍동빌딩 동관 3층"
        },
        inquirer : {
            name : "",
            email : "",
            cellPhone : "",
            organizationType : "",
            organizationName : "",
            organizationAddress : ""
          },

        lectureCount: '',
        classSchedules: ['', '', ''],
    }
    );

        // 서비스 가능지역 > 센터 영역이미지, 확대/축소 폰트상태값, 센터명과 센터번호 자간값
        const [showCenterMap, setShowCenterMap] = useState(`url(${mapDefault})`); 
        const [scaleUp, setScaleUp] = useState(
            {
                Seocho: '20px', Daechi: '20px', Mokdong: '20px', Jamsil: '20px',
                Joonggae: '20px', Boondang: '20px', Pyeongchon: '20px',
            }
        )
        const [paddingUp, setPaddingUp] = useState(
            {
                Seocho: '0px', Daechi: '0px', Mokdong: '0px', Jamsil: '0px',
                Joonggae: '0px', Boondang: '0px', Pyeongchon: '0px',
            }
        )
    
        // 서비스 가능지역 > 지도 마커 호버 핸들러
        let markerClassName = '';
        const onMarkerHandler = (e) => {
            markerClassName = e.target.className;
            switch (markerClassName){
                case "_seocho marker":
                    setShowCenterMap(`url(${mapSeocho})`);
                    setScaleUp(
                        {
                            Seocho: '26px', Daechi: '20px', Mokdong: '20px', Jamsil: '20px', 
                            Joonggae: '20px', Boondang: '20px', Pyeongchon: '20px',
                        }
                    )
                    setPaddingUp(
                        {
                            Seocho: '5px', Daechi: '0px', Mokdong: '0px', Jamsil: '0px',
                            Joonggae: '0px', Boondang: '0px', Pyeongchon: '0px',
                        }
                    )
                    break;            
                case "_daechi marker":
                    setShowCenterMap(`url(${mapDaechi})`);
                    setScaleUp(
                        {
                            Seocho: '20px', Daechi: '26px', Mokdong: '20px', Jamsil: '20px', 
                            Joonggae: '20px', Boondang: '20px', Pyeongchon: '20px',
                        }
                    )
                    setPaddingUp(
                        {
                            Seocho: '0px', Daechi: '5px', Mokdong: '0px', Jamsil: '0px',
                            Joonggae: '0px', Boondang: '0px', Pyeongchon: '0px',
                        }
                    )
                    break;
                case "_mokdong marker":
                    setShowCenterMap(`url(${mapMokdong})`);
                    setScaleUp(
                        {
                            Seocho: '20px', Daechi: '20px', Mokdong: '26px', Jamsil: '20px', 
                            Joonggae: '20px', Boondang: '20px', Pyeongchon: '20px',
                        }
                    )
                    setPaddingUp(
                        {
                            Seocho: '0px', Daechi: '0px', Mokdong: '5px', Jamsil: '0px',
                            Joonggae: '0px', Boondang: '0px', Pyeongchon: '0px',
                        }
                    )
                    break;
                case "_jamsil marker":
                    setShowCenterMap(`url(${mapJamsil})`);
                    setScaleUp(
                        {
                            Seocho: '20px', Daechi: '20px', Mokdong: '20px', Jamsil: '26px', 
                            Joonggae: '20px', Boondang: '20px', Pyeongchon: '20px',
                        }
                    )
                    setPaddingUp(
                        {
                            Seocho: '0px', Daechi: '0px', Mokdong: '0px', Jamsil: '5px',
                            Joonggae: '0px', Boondang: '0px', Pyeongchon: '0px',
                        }
                    )
                    break;
                case "_joonggae marker":
                    setShowCenterMap(`url(${mapJoonggae})`);
                    setScaleUp(
                        {
                            Seocho: '20px', Daechi: '20px', Mokdong: '20px', Jamsil: '20px', 
                            Joonggae: '26px', Boondang: '20px', Pyeongchon: '20px',
                        }
                    )
                    setPaddingUp(
                        {
                            Seocho: '0px', Daechi: '0px', Mokdong: '0px', Jamsil: '0px',
                            Joonggae: '5px', Boondang: '0px', Pyeongchon: '0px',
                        }
                    )
                    break;
                case "_boondang marker":
                    setShowCenterMap(`url(${mapBoondang})`);
                    setScaleUp(
                        {
                            Seocho: '20px', Daechi: '20px', Mokdong: '20px', Jamsil: '20px', 
                            Joonggae: '20px', Boondang: '26px', Pyeongchon: '20px',
                        }
                    )
                    setPaddingUp(
                        {
                            Seocho: '0px', Daechi: '0px', Mokdong: '0px', Jamsil: '0px',
                            Joonggae: '0px', Boondang: '5px', Pyeongchon: '0px',
                        }
                    )
                    break;
                case "_pyeongchon marker":
                    setShowCenterMap(`url(${mapPyeongchon})`);
                    setScaleUp(
                        {
                            Seocho: '20px', Daechi: '20px', Mokdong: '20px', Jamsil: '20px', 
                            Joonggae: '20px', Boondang: '20px', Pyeongchon: '26px',
                        }
                    )
                    setPaddingUp(
                        {
                            Seocho: '0px', Daechi: '0px', Mokdong: '0px', Jamsil: '0px',
                            Joonggae: '0px', Boondang: '0px', Pyeongchon: '5px',
                        }
                    )
                    break;
                default:
                    break;
            }
        }
    
        // 문의처 > 센터명, 센터주소, 센터번호 상태값
        const [showCenterName, setShowCenterName] = useState('');
        const [showCenterAddress, setShowCenterAddress] = useState('');
        const [showCenterPhoneNumber, setShowCenterPhoneNumber] = useState('');
        // 문의처 > 마커 클릭 상태값
        const [isMarkerClicked, setIsMarkerClicked] = useState(false);
        const [informationHeight, setInformationHeight] = useState('0px');
        
        // 서비스 가능지역 > 지도 마커 클릭 핸들러
        let _markerClassName ='';
        const onMarkerClickHandler = (e) => {
            _markerClassName = e.target.className;
            switch(_markerClassName) {
                case "_seocho marker":
                    setShowCenterName(centerInfo.seocho.name);
                    setShowCenterAddress(centerInfo.seocho.address);
                    setShowCenterPhoneNumber(centerInfo.seocho.contactNumber);
                    break;
                case "_daechi marker":
                    setShowCenterName(centerInfo.daechi.name);
                    setShowCenterAddress(centerInfo.daechi.address);
                    setShowCenterPhoneNumber(centerInfo.daechi.contactNumber);
                    break;
                case "_mokdong marker":
                    setShowCenterName(centerInfo.mokdong.name);
                    setShowCenterAddress(centerInfo.mokdong.address);
                    setShowCenterPhoneNumber(centerInfo.mokdong.contactNumber);
                    break;
                case "_jamsil marker": 
                    setShowCenterName(centerInfo.jamsil.name);
                    setShowCenterAddress(centerInfo.jamsil.address);
                    setShowCenterPhoneNumber(centerInfo.jamsil.contactNumber);
                    break;
                case "_joonggae marker":
                    setShowCenterName(centerInfo.joonggae.name);
                    setShowCenterAddress(centerInfo.joonggae.address);
                    setShowCenterPhoneNumber(centerInfo.joonggae.contactNumber);
                    break;
                case "_boondang marker": 
                    setShowCenterName(centerInfo.boondang.name);
                    setShowCenterAddress(centerInfo.boondang.address);
                    setShowCenterPhoneNumber(centerInfo.boondang.contactNumber);
                    break;
                case "_pyeongchon marker": 
                    setShowCenterName(centerInfo.pyeongchon.name);
                    setShowCenterAddress(centerInfo.pyeongchon.address);
                    setShowCenterPhoneNumber(centerInfo.pyeongchon.contactNumber);
                    break;
                default:
                    break;
            }

            // 지도 마커 클릭 상태값 변경
            setIsMarkerClicked(true);
            isMarkerClicked ? setInformationHeight('354px') : setInformationHeight('0px')
        }

    // axios 제출 시, 데이터 송신
    const postData = () => {
        // 수업일정을 한개만 선택한 경우
        if(barInfo[0].date !== '2022-OO-OO' && barInfo[1].date === '2022-OO-OO' && barInfo[2].date === '2022-OO-OO') {
            axios.post(hostUrl, {
                classCount: userInfo.classCount,
                studentCount: userInfo.studentCount,
                program: userInfo.program,
                classType: userInfo.classType,
                lectureCount: userInfo.lectureCount,
                willIntroductionSido: userInfo.willIntroductionSido,
                willIntroductionGugun: userInfo.willIntroductionGugun,
                obtainRoutes: userInfo.obtainRoutes,
                agreePersonalInfo: userInfo.agreePersonalInfo,
                operationOffice : {
                    name : "서초 코어 센터",
                    phoneNumber : "02-537-2900",
                    address : "서울시 서초구 고무래로 26 쌍동빌딩 동관 3층"
                  },
                inquirer : {
                    name : userInfo.inquirer.name,
                    email : userInfo.inquirer.email,
                    cellPhone : userInfo.inquirer.cellPhone,
                    organizationType : userInfo.inquirer.organizationType,
                    organizationName : userInfo.inquirer.organizationName,
                    organizationAddress : userInfo.inquirer.organizationAddress,
                },
                classSchedules : [{
                    seq : userInfo.classSchedules[0].q,
                    date : userInfo.classSchedules[0].date
                }, 
                ]
                }
            )
            .then((response) => {
                // console.log(response);
            })
            .catch((error) => {
                // console.log(error);
                alert(error);
            });
        }

        // 수업일정을 두개만 선택한 경우
        if(barInfo[0].date !== '2022-OO-OO' && barInfo[1].date !== '2022-OO-OO' && barInfo[2].date === '2022-OO-OO') {
            axios.post(hostUrl, {
                classCount: userInfo.classCount,
                studentCount: userInfo.studentCount,
                program: userInfo.program,
                classType: userInfo.classType,
                lectureCount: userInfo.lectureCount,
                willIntroductionSido: userInfo.willIntroductionSido,
                willIntroductionGugun: userInfo.willIntroductionGugun,
                obtainRoutes: userInfo.obtainRoutes,
                agreePersonalInfo: userInfo.agreePersonalInfo,
                operationOffice : {
                    name : "서초 코어 센터",
                    phoneNumber : "02-537-2900",
                    address : "서울시 서초구 고무래로 26 쌍동빌딩 동관 3층"
                  },
                inquirer : {
                    name : userInfo.inquirer.name,
                    email : userInfo.inquirer.email,
                    cellPhone : userInfo.inquirer.cellPhone,
                    organizationType : userInfo.inquirer.organizationType,
                    organizationName : userInfo.inquirer.organizationName,
                    organizationAddress : userInfo.inquirer.organizationAddress,
                },
                classSchedules : [{
                    seq : userInfo.classSchedules[0].q,
                    date : userInfo.classSchedules[0].date
                }, {
                    seq : userInfo.classSchedules[1].q,
                    date : userInfo.classSchedules[1].date
                },
                ]
                }
            )
            .then((response) => {
                // console.log(response);
            })
            .catch((error) => {
                // console.log(error);
                alert(error);
            });
        }

        // 수업일정을 세개 선택한 경우
        if(barInfo[0].date !== '2022-OO-OO' && barInfo[1].date !== '2022-OO-OO' && barInfo[2].date !== '2022-OO-OO') {
            axios.post(hostUrl, {
                classCount: userInfo.classCount,
                studentCount: userInfo.studentCount,
                program: userInfo.program,
                classType: userInfo.classType,
                lectureCount: userInfo.lectureCount,
                willIntroductionSido: userInfo.willIntroductionSido,
                willIntroductionGugun: userInfo.willIntroductionGugun,
                obtainRoutes: userInfo.obtainRoutes,
                agreePersonalInfo: userInfo.agreePersonalInfo,
                operationOffice : {
                    name : "서초 코어 센터",
                    phoneNumber : "02-537-2900",
                    address : "서울시 서초구 고무래로 26 쌍동빌딩 동관 3층"
                  },
                inquirer : {
                    name : userInfo.inquirer.name,
                    email : userInfo.inquirer.email,
                    cellPhone : userInfo.inquirer.cellPhone,
                    organizationType : userInfo.inquirer.organizationType,
                    organizationName : userInfo.inquirer.organizationName,
                    organizationAddress : userInfo.inquirer.organizationAddress,
                },
                classSchedules : [{
                    seq : userInfo.classSchedules[0].q,
                    date : userInfo.classSchedules[0].date
                }, {
                    seq : userInfo.classSchedules[1].q,
                    date : userInfo.classSchedules[1].date
                }, {
                    seq : userInfo.classSchedules[2].q,
                    date : userInfo.classSchedules[2].date
                }, 
                ]
                }
            )
            .then((response) => {
                // console.log(response);
            })
            .catch((error) => {
                // console.log(error);
                alert(error);
            });
        }
    }


    // 유저 정보 변경
    // 도입희망지역 > 시/도 선택
    const onChangeCityInfo = (e) => {
        setUserInfo({
            ...userInfo,
            willIntroductionSido: e.target.value
        });
    };

    // 도입희망지역 > 구/군 선택
    const onChangeTownInfo = (e) => { 
        setUserInfo({
            ...userInfo,
            willIntroductionGugun: e.target.value
        });
    };
        
    const [guGunScaleUp, setguGunScaleUp] = useState('40px');
    const SelectGugun = () => {
        if(userInfo.willIntroductionSido === '서울') {
            return (
                <select
                onChange={onChangeTownInfo}
                value={userInfo.willIntroductionGugun}
                style={{
                    backgroundColor: 'white'
                }}
                >
                <option key='' value=''>구/군 선택</option>
                <option key='2' value='강남구' >강남구</option>
                <option key='3'value='노원구' >노원구</option>
                <option key='4'value='서초구' >서초구</option>
                <option key='5'value='송파구' >송파구</option>
                <option key='6'value='양천구' >양천구</option>
            </select>
            );
        }
        if(userInfo.willIntroductionSido === '경기') {
            return (
                <select
                onChange={onChangeTownInfo}
                value={userInfo.willIntroductionGugun}
                style={{
                    backgroundColor: 'white'
                }}
                >
                <option key='' value='' >구/군 선택</option>
                <option key='1' value='성남시'>성남시</option>
                <option key='2' value='안양시'>안양시</option>
            </select>
            );
        }

    }


    // 학급 수 선택
    const onChangeClassesCount = (e) => {
        let tmp = parseInt(e.target.value);

        setUserInfo({
            ...userInfo,
            classCount: tmp
        });
    };

    // 교육인원 입력
    const onChangeStudentsCount = (e) => {
        // 4자리 이상 입력 불가
        if(e.target.value.length >= 4) {
            return;
        }

        let tmp = e.target.value;

        setUserInfo({
            ...userInfo,
            studentCount: tmp
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
            lectureCount: e.target.value
        });
    }

    // 수업 일정 선택
    const onChangeLessonDays = () => {
        setUserInfo({
            ...userInfo,
            classSchedules: [barInfo[0], barInfo[1], barInfo[2]],
        });
    }

    // 신청자 (변경 후)
    const onChangeName = (e) => {
        if(e.target.value.length > 10) {
            return;
        }

        setUserInfo((prevState) => ({
            ...prevState,
            inquirer: {
                ...prevState.inquirer,
                name: e.target.value,
            }
        }));
    }

    // 이메일
    const onChangeEmail = (e) => {
        if(e.target.value.length > 30) {
            return;
        }

        setUserInfo((prevState) => ({
            ...prevState,
            inquirer: {
                ...prevState.inquirer,
                email: e.target.value,
            }
        }));
    }

    // 휴대번호
    const onChangePhonNumber = (e) => {
        // 13자리 이상 입력 불가
        if(e.target.value.length > 13) {
            return;
        }
        
        // 휴대번호 정규식
        e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(-{1,2})$/g, "");
        

        setUserInfo((prevState) =>({
            ...prevState,
            inquirer: {
                ...prevState.inquirer,
                cellPhone: e.target.value,
            }
        }));
    }

    // 학교 명 / 기관 명
    const onChangeOrgName = (e) => {
        setUserInfo((prevState) =>({
            ...prevState,
            inquirer: {
                ...prevState.inquirer,
                organizationName: e.target.value,
            }
        }));
    }

    // 수업 문의 경로
    // 지인추천
    const onChangeRecommendation = (e) => {
        if(e.target.checked) {
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: [...prevState.obtainRoutes, e.target.value]
            }));
        } else {
            let filterArr = userInfo.obtainRoutes.filter((data) => {return data !== 'R'});
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: filterArr
            }));
        }
    }

    // 제안서
    const onChangeProposal = (e) => {
        if(e.target.checked) {
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: [...prevState.obtainRoutes, e.target.value]
            }));
        } else {
            let filterArr = userInfo.obtainRoutes.filter((data) => {return data !== 'F'});
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: filterArr
            }));
        }
    }


    // 검색
    const onChangeWebSearch = (e) => {
        if(e.target.checked) {
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: [...prevState.obtainRoutes, e.target.value]
            }));
        } else {
            let filterArr = userInfo.obtainRoutes.filter((data) => {return data !== 'S'});
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: filterArr
            }));
        }
    }

    // 기타
    const onChangeEtc = (e) => {
        if(e.target.checked) {
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: [...prevState.obtainRoutes, e.target.value]
            }));
        } else {
            let filterArr = userInfo.obtainRoutes.filter((data) => {return data !== 'O'});
            setUserInfo((prevState) => ({
                ...prevState,
                obtainRoutes: filterArr
            }));
        }
    }

    // 개인정보 수집 동의
    const onChangeAgree = (e) => {
        setUserInfo({
            ...userInfo,
            agreePersonalInfo: e.target.checked
        });
    }


    // ☆☆☆☆☆☆☆☆ 수업 일정 ☆☆☆☆☆☆☆☆
    // 달력 날짜 스테이트 관리
    // value <- 날짜 저장
    const [date, setDate] = useState(new Date());

    // 달력 날짜 클릭할 때마다, 날짜 저장
    const SaveDate = (date) => {
        let _date = date.toLocaleDateString().replace('. ', '-');
        let __date = _date.replace('. ', '-');
        let ___date = __date.replace('.', '');
        if(___date[6] === '-') {
            ___date = ___date.slice(0, 5) + '0' + ___date.slice(5);
        }
        if(___date.length !== 10) {
            ___date = ___date.slice(0, 8) + '0' + ___date.slice(8);
        }

        if (pointer === 0) {
            barInfo[0].date = ___date;
        }
        if (pointer === 1) {
            barInfo[1].date = ___date;
        }
        if (pointer === 2) {
            barInfo[2].date = ___date;
        }

        onChangeLessonDays();
    }


    // 날짜 표시바의 위치 지정
    const [pointer, setPointer] = useState(0);
    const [bar1DisplayValue, bar1ShowDisplayValue] = useState('');
    const [bar2DisplayValue, bar2ShowDisplayValue] = useState('none');
    const [bar3DisplayValue, bar3ShowDisplayValue] = useState('none');
    
    // 더하기 버튼 클릭 시, 바 보이기
    const AddBar = () => {
        // 중복 등록 막기
        if ((barInfo[0].date !== '2022-OO-OO') && (barInfo[1].date !== '2022-OO-OO')) {
            if ((barInfo[0].date === barInfo[1].date)) {
                alert('동일한 날짜를 여러번 등록할 수 없습니다.');
                return;
            }
        }
        if ((barInfo[0].date !== '2022-OO-OO') && (barInfo[1].date !== '2022-OO-OO') && (barInfo[2].date !== '2022-OO-OO')) {
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
        if ((pointer === 0 && barInfo[0].date === '2022-OO-OO')) {
            alert('날짜를 선택해주세요.');
            return;
        }
        if ((pointer === 1 && barInfo[1].date === '2022-OO-OO')) {
            alert('날짜를 선택해주세요.');
            return;
        }
        if ((pointer === 2 && barInfo[2].date === '2022-OO-OO')) {
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
            barInfo[pointer].date = '2022-OO-OO'
        }
    }

    // 달력 높이
    const [calendarHeight, setCalendarHeight] = useState('750px');
    // pointer 값에 따라 날짜 표시바를 보여줌
    const ShowBar = () => {
        // '' 화면 표시, 'none' 화면 미표시
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
    const [scaleOrgAddressHeight, setScaleOrgAddressHeight] = useState("364px");
    // 주소창에서 선택한 주소 상태값
    const [address, setAddress] = useState("");

    const [ref, setRef] = useState('cityTown');

    // 라디오버튼 이벤트핸들러
    const RadioHandler = (e) => {
        let tmp = e.target.value;
        selectOrgType(tmp);

        // User Info에 학교 명/기관 명 전달
        setUserInfo((prevState) =>({
            ...prevState,
            inquirer: {
                ...prevState.inquirer,
                organizationType: e.target.value,
            }
        }));
    }
    
    // useEffect로 라디오값 동기처리
    useEffect(() => {
        // 마커 클릭 상태 변경 동기처리
        isMarkerClicked ? setInformationHeight('354px') : setInformationHeight('0px')


        // 기관 선택 시, 주소창 표시
        if (orgType === "S" || orgType === "O") {
            setScaleOrgAddressHeight("650px"); // 여기서 학교 기관 정보 넘겨야 함
        }

        // 바 위치 체크
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
        
        // 제출 시, 입력 오류로 이동하는 Ref 설정
        if (userInfo.inquirer.name === '') {
            setRef('applicant');
        } if (userInfo.inquirer.email === '' || (emailRegEx.test(userInfo.inquirer.email) === false) ) {
            setRef('applicant');
        } if (userInfo.inquirer.cellPhone === '' || userInfo.inquirer.cellPhone.length !== 13 || userInfo.inquirer.cellPhone[0] !== '0') {
            setRef('applicant');
        } if (userInfo.inquirer.organizationType === '') {
            setRef('applicant');
        } if (userInfo.inquirer.organizationName === '') {
            setRef('applicant');
        } if (userInfo.inquirer.organizationAddress === '') {
            setRef('applicant');
        } if (userInfo.obtainRoutes.indexOf('R') === -1 &&
            userInfo.obtainRoutes.indexOf('F') === -1 &&
            userInfo.obtainRoutes.indexOf('S') === -1 &&
            userInfo.obtainRoutes.indexOf('O') === -1
        ) {
            setRef('applicant');
        } if (userInfo.classSchedules[0] === '') {
            setRef('calendar');
        } if (userInfo.agreePersonalInfo === false) {
        } if (userInfo.willIntroductionSido === '') {
            setRef('cityTown');
        } if (userInfo.willIntroductionGugun === '') {
            setRef('cityTown');
        } if (userInfo.classCount === '' || userInfo.classCount === 0 || isNaN(userInfo.classCount)) {
            setRef('cityTown');
        } if (userInfo.studentCount === 0) {
            setRef('cityTown');
        } if (userInfo.program === '') {
            setRef('cityTown');
        } if (userInfo.lectureCount === '') {
            setRef('cityTown');
        }  if (userInfo.inquirer.name !== '' && userInfo.inquirer.email !== '' && userInfo.inquirer.cellPhone !== ''
        && userInfo.inquirer.organizationType !== '' && userInfo.inquirer.organizationName !== '' && userInfo.inquirer.organizationAddress !== '' && (
        userInfo.obtainRoutes.indexOf('R') === -1 || userInfo.obtainRoutes.indexOf('F') === -1 ||
        userInfo.obtainRoutes.indexOf('S') === -1 || userInfo.obtainRoutes.indexOf('O') === -1 ) && userInfo.classSchedules[0] !== '' &&
        userInfo.agreePersonalInfo !== false && userInfo.willIntroductionSido !== '' && userInfo.willIntroductionGugun !== '' && userInfo.classCount !== '' &&
        userInfo.classCount !== 0 && isNaN(userInfo.classCount) &&
        userInfo.studentCount !== '' && userInfo.program !== '' && userInfo.lectureCount !== '' ) {
            setRef('');
        }

        // 달력 날짜 선택에 따라 펼쳤다 접기 값
        // if(pointer === 0) {
        //     setCalendarHeight('800px');
        // } else if(pointer === 1) {
        //     setCalendarHeight('882px');
        // } else {
        //     setCalendarHeight('970px');
        // }

        if(pointer === 0) {
            setCalendarHeight('750px');
        } else if(pointer === 1) {
            setCalendarHeight('822px');
        } else {
            setCalendarHeight('890px');
        }

    }, [isMarkerClicked, orgType, pointer, userInfo.agreePersonalInfo, userInfo.classCount, userInfo.classSchedules, userInfo.inquirer.cellPhone, userInfo.inquirer.email, userInfo.inquirer.name, userInfo.inquirer.organizationAddress, userInfo.inquirer.organizationName, userInfo.inquirer.organizationType, userInfo.obtainRoutes, userInfo.lectureCount, userInfo.program, userInfo.studentCount, userInfo.willIntroductionGugun, userInfo.willIntroductionSido]);

    // 카카오 주소 팝업창 
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
            setUserInfo((prevState) => ({
                ...prevState,
                inquirer: {
                    ...prevState.inquirer,
                    organizationAddress: fullAddress,
                }
            }));
        };

        const handleClick = () => {
            open({ onComplete: handleComplete });
        };

        return (
            <div className="wrap">
                <input
                    className="orgInfoInput"
                    type="text"
                    placeholder="학교/기관 주소"
                    onClick={handleClick}
                    defaultValue={address}
                    onFocus={e => (e.target.placeholder = "")}
                >
                </input>
            </div>
        );
    };

    // 개인동의 설명 규칙 보이기 상태값
    const [showAgreeDescription, setShowAgreeDescription] = useState('155px');
    // 개인동의 버튼 이미지(화살표 위아래) 교체
    const [agreeBtnImage, setAgreeBtnImage] = useState(`url(${arrowDown})`);

    // 개인동의 설명 규칙 버튼 핸들러
    const AgreeDescriptionBtnHandler = () => {
        if (showAgreeDescription === '155px') {
            setShowAgreeDescription('380px');
            setAgreeBtnImage(`url(${arrowUp})`);
        }
        else {
            setShowAgreeDescription('155px');
            setAgreeBtnImage(`url(${arrowDown})`);
        }
    }
    // 메인페이지 이동 네비게이트
    let navigate = useNavigate();
    // 제출버튼 핸들러
    const submitHandler = () => {
        if (userInfo.willIntroductionSido === '') {
            alert("'도입희망지역(시/도)'을 선택해주세요.")
        } else if (userInfo.willIntroductionGugun === '') {
            alert("'도입희망지역(구/군)'을 선택해주세요.")
        } else if (userInfo.classCount === 0 || isNaN(userInfo.classCount) ) {
            alert("'학급 수'를 작성해주세요.")
        } else if (userInfo.studentCount === '') {
            alert("'교육인원'을 작성해주세요.")
        } else if (userInfo.program === '') {
            alert("'프로그램'을 선택해주세요.")
        } else if (userInfo.lectureCount === '') {
            alert("'수업 횟수'를 선택해주세요.")
        } else if (userInfo.classSchedules[0] === '') {
            alert("'수업 일자'를 1개 이상 선택해주세요.")
        } else if (userInfo.inquirer.name === '') {
            alert("'신청자의 성함'을 작성해주세요.")
        } else if (userInfo.inquirer.email === '' || (emailRegEx.test(userInfo.inquirer.email) === false) ) {
            alert("'이메일 주소'를 작성해주세요.")
        } else if (userInfo.inquirer.cellPhone === '' || userInfo.inquirer.cellPhone.length !== 13  || userInfo.inquirer.cellPhone[0] !== '0') {
            alert("'휴대번호(010-XXXX-XXXX)'를 작성해주세요.")
        } else if (userInfo.inquirer.organizationType === '') {
            alert("'기관 선택(학교/학교외기관)'을 선택해주세요.")
        } else if (userInfo.inquirer.organizationName === '') {
            alert("'학교 명/ 기관 명'을 작성해주세요.")
        } else if (userInfo.inquirer.organizationAddress === '') {
            alert("'학교 명/ 기관 주소'를 작성해주세요.")
        } else if (userInfo.obtainRoutes.indexOf('R') === -1 &&
            userInfo.obtainRoutes.indexOf('F') === -1 &&
            userInfo.obtainRoutes.indexOf('S') === -1 &&
            userInfo.obtainRoutes.indexOf('O') === -1
        ) {
            alert("'수업 문의 경로'를 1개 이상 선택해주세요.")
        } else if (userInfo.agreePersonalInfo === false) {
            alert('개인정보 수집 미동의 시 신청 불가능합니다.')
        } 
        // 필수값 전부 입력된 것이 확인되어 서버로 전송
        else {
            setRef('cityTown');
            alert('도입 문의 신청 완료 되었습니다.')
            navigate("/");

            postData();
        }
    }

    return (
        <div className="contactToRegister">
            <Header2 />
            <div className="wrap">
                <div className="firstLine">
                    <div className="introduction" >
                        <div className="title">
                            <div className="customH7">
                                From.C 프로그램 도입 문의
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
                            {/* 센터지도 */}
                            <div className="mapWrap">
                                <div
                                    className="seocho"
                                    name="seocho"
                                    onMouseOver={(e) => onMarkerHandler(e)}
                                    onClick={(e) => onMarkerClickHandler(e)}
                                >
                                    <div className="_seocho marker">

                                    </div>
                                    <div className="_seochoCenterInfo">
                                        <div className="_seochoCenterName"
                                            style={{
                                                fontSize: scaleUp.Seocho
                                            }}>
                                            서초코어센터
                                        </div>
                                        <div className="_seochoCenterPhoneNumber"
                                            style={{
                                                fontSize: scaleUp.Seocho,
                                                paddingTop: paddingUp.Seocho
                                            }}>
                                            02-537-2900
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="daechi"
                                    name="daechi"
                                    onMouseOver={(e) => onMarkerHandler(e)}
                                    onClick={(e) => onMarkerClickHandler(e)}
                                >
                                    <div className="_daechi marker">

                                    </div>
                                    <div className="_daechiCenterInfo">
                                        <div className="_daechiCenterName"
                                            style={{
                                                fontSize: scaleUp.Daechi
                                            }}>
                                            대치센터
                                        </div>
                                        <div className="_daechiCenterPhoneNumber"
                                            style={{
                                                fontSize: scaleUp.Daechi,
                                                paddingTop: paddingUp.Daechi
                                            }}>
                                            02-537-2900
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="mokdong"
                                    name="mokdong"
                                    onMouseOver={(e) => onMarkerHandler(e)}
                                    onClick={(e) => onMarkerClickHandler(e)}
                                >
                                    <div className="_mokdong marker">

                                    </div>
                                    <div className="_mokdongCenterInfo">
                                        <div className="_mokdongCenterName"
                                            style={{
                                                fontSize: scaleUp.Mokdong
                                            }}>
                                            목동센터
                                        </div>
                                        <div className="_mokdongCenterPhoneNumber"
                                            style={{
                                                fontSize: scaleUp.Mokdong,
                                                paddingTop: paddingUp.Mokdong
                                            }}>
                                            02-2645-2600
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="jamsil"
                                    name="jamsil"
                                    onMouseOver={(e) => onMarkerHandler(e)}
                                    onClick={(e) => onMarkerClickHandler(e)}
                                >
                                    <div className="_jamsil marker">

                                    </div>
                                    <div className="_jamsilCenterInfo">
                                        <div className="_jamsilCenterName"
                                            style={{
                                                fontSize: scaleUp.Jamsil
                                            }}>
                                            잠실센터
                                        </div>
                                        <div className="_jamsilCenterPhoneNumber"
                                            style={{
                                                fontSize: scaleUp.Jamsil,
                                                paddingTop: paddingUp.Jamsil
                                            }}>
                                            02-3431-2100
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="joonggae"
                                    name="joonggae"
                                    onMouseOver={(e) => onMarkerHandler(e)}
                                    onClick={(e) => {onMarkerClickHandler(e)
                                    }}
                                >
                                    <div className="_joonggae marker">

                                    </div>
                                    <div className="_joonggaeCenterInfo">
                                        <div className="_joonggaeCenterName"
                                            style={{
                                                fontSize: scaleUp.Joonggae
                                            }}>
                                            중계센터
                                        </div>
                                        <div className="_joonggaeCenterPhoneNumber"
                                            style={{
                                                fontSize: scaleUp.Joonggae,
                                                paddingTop: paddingUp.Joonggae
                                            }}>
                                            02-930-4200
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="boondang"
                                    name="boondang"
                                    onMouseOver={(e) => onMarkerHandler(e)}
                                    onClick={(e) => onMarkerClickHandler(e)}
                                >
                                    <div className="_boondang marker">

                                    </div>
                                    <div className="_boondangCenterInfo">
                                        <div className="_boondangCenterName"
                                            style={{
                                                fontSize: scaleUp.Boondang
                                            }}>
                                            분당센터
                                        </div>
                                        <div className="_boondangCenterPhoneNumber"
                                            style={{
                                                fontSize: scaleUp.Boondang,
                                                paddingTop: paddingUp.Boondang
                                            }}>
                                            031-726-4300
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="pyeongchon"
                                    name="pyeongchon"
                                    onMouseOver={(e) => onMarkerHandler(e)}
                                    onClick={(e) => onMarkerClickHandler(e)}
                                >
                                    <div className="_pyeongchon marker">

                                    </div>
                                    <div className="_pyeongchonCenterInfo">
                                        <div className="_pyeongchonCenterName"
                                            style={{
                                                fontSize: scaleUp.Pyeongchon
                                            }}>
                                            평촌센터
                                        </div>
                                        <div className="_pyeongchonCenterPhoneNumber"
                                            style={{
                                                fontSize: scaleUp.Pyeongchon,
                                                paddingTop: paddingUp.Pyeongchon
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information"
                style={{
                    height: informationHeight 
                }}
                >
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
                                    <hr style={{
                                        height: '70px',
                                        border: '1px solid rgba(255, 255, 255, 0.7)'
                                    }} />
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
                                    <hr style={{
                                        height: '70px',
                                        border: '1px solid rgba(255, 255, 255, 0.7)'
                                    }} />
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
                {/* 문의처 포함한 wrap */}
                {/* </div> */}

                <div className="thirdLine"
                id="cityTown">
                    <div className="Wrap"
                    >
                        <div className="hopeRegion"
                            style={
                            {
                                height: guGunScaleUp
                            }
                        }>
                            <div className="wrap">
                                <div className="title">
                                    <div
                                        className="customH10"
                                        
                                    >
                                        도입희망지역
                                    </div>
                                </div>
                                <div className="listWrap">
                                    <div id='list'>
                                        <select
                                            style={{
                                                backgroundColor: 'white'
                                            }}
                                            onChange={onChangeCityInfo
                                            }
                                            onClick={()=> {
                                                if(userInfo.willIntroductionSido === '서울' || userInfo.willIntroductionSido === '경기') {
                                                    setguGunScaleUp('100px');
                                                }
                                            }}
                                        >

                                            <option value=''>시/도 선택</option>
                                            <option value='서울'>서울</option>
                                            <option value='경기'>경기</option>
                                        </select>
                                    </div>

                                    <div id='list'>
                                        <SelectGugun />
                                    </div>
                                </div>
                                
                            </div>
                            {/* <div id='list'>
                                <SelectGugun />
                            </div>  */}
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
                                            style={{
                                                backgroundColor: 'white'
                                            }}
                                            onChange={onChangeClassesCount}
                                        >
                                            <option value='0'>선택해주세요.</option>
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
                                        onFocus={e => (e.target.placeholder = "")}
                                        onBlur={e => (e.target.placeholder = "총 도입 예상 인원")}
                                        style = {{
                                            border: '0.5px solid rgb(118, 118, 118)'
                                        }}
                                        
                                        value={userInfo.studentCount}
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
                                            style={{
                                                backgroundColor: 'white'
                                            }}
                                            onChange={onChangeProgram}
                                        >
                                            <option value=''>선택해주세요.</option>
                                            <option value='스크래치 AI 프로젝트'>스크래치 AI 프로젝트</option>
                                            <option value='앱인벤터 AI 프로젝트'>앱인벤터 AI 프로젝트</option>
                                            <option value='캐글 머신러닝 프로젝트'>캐글 머신러닝 프로젝트</option>
                                            <option value='메타버스 아두이노'>메타버스 아두이노</option>
                                            <option value='메타버스 파이썬'>메타버스 파이썬</option>
                                            <option value='스크래치 게임 메이킹'>스크래치 게임 메이킹</option>
                                            <option value='앱인벤터 게임 메이킹'>앱인벤터 게임 메이킹</option>
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
                                        <div className="logoWrap">
                                            <div className="source"></div>
                                        </div>
                                        <span>
                                        원데이 클래스
                                        </span>
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
                                            각 수업은 3~6시간 동안 진행됩니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="listWrap">
                                    <div id='list'>
                                        <select
                                            style={{
                                                backgroundColor: 'white'
                                            }}
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

                    <div id="calendar"></div>
                    <div className="selectLessonDays"
                        style={
                            { height: calendarHeight}}
                    >
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
                                        onChange={
                                            setDate
                                        }
                                        onClickDay={(date, event) => {
                                            SaveDate(date);
                                        }}
                                        calendarType="US"
                                        value={date}
                                        minDate={tomorrow}
                                        // 해가 바뀌면 변경해야 함
                                        maxDate={new Date(2023, 11, 31)}

                                        // 하이라이트 처리
                                        tileClassName={({ date, view }) => {
                                            let _date = date.toLocaleDateString().replace('. ', '-');
                                            let __date = _date.replace('. ', '-');
                                            let ___date = __date.replace('.', '');
                                            if ((___date === barInfo[0].date) || (___date === barInfo[1].date) || (___date === barInfo[2].date)) {
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
                        <div id="applicant"></div>
                    </div>
                    
                    {/* 신청자 ~ 제출하기까지 Wrap */}
                    
                    <div className="bottomWrap" 
                        style={{
                            height: scaleOrgAddressHeight
                        }}
                        >
                        <div className="applicant"
                        >
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
                                        value={userInfo.inquirer.name}
                                        onFocus={e => (e.target.placeholder = "")}
                                        onBlur={e => (e.target.placeholder = "신청자 이름")}
                                        onChange={onChangeName}
                                        style = {{
                                            border: '0.5px solid rgb(118, 118, 118)'
                                        }}
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
                                        id="input"
                                        type="email"
                                        placeholder="작성자 이메일"
                                        value={userInfo.inquirer.email}
                                        onFocus={e => (e.target.placeholder = "")}
                                        onBlur={e => (e.target.placeholder = "작성자 이메일")}
                                        onChange={onChangeEmail}
                                        style = {{
                                            border: '0.5px solid rgb(118, 118, 118)'
                                        }}
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className="phoneNumber">
                            <div className="wrap">
                                <div className="title">
                                    <div className="customH12">
                                        휴대폰 번호
                                    </div>
                                </div>
                                <div className="input">
                                    <input
                                        id="input"
                                        type="text"
                                        placeholder="휴대폰 번호"
                                        value={userInfo.inquirer.cellPhone}
                                        onFocus={e => (e.target.placeholder = "")}
                                        onBlur={e => (e.target.placeholder = "휴대폰 번호")}
                                        onChange={onChangePhonNumber}
                                        style = {{
                                            border: '0.5px solid rgb(118, 118, 118)'
                                        }}
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className="selectOrg">
                            <div className="wrap">
                                <div className="title">
                                    <div className="wrap">
                                        <div className="customH12">
                                            기관 선택
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="wrap">
                                        <div className="selectOrgType">
                                            <div className="left" style={{ width: '200px' }}>
                                                <input
                                                    id="checkBox"
                                                    type="checkBox"
                                                    className="school"
                                                    value="S"
                                                    checked={orgType === "S"}
                                                    // target 전달방식 참고
                                                    onChange={(e) => RadioHandler(e)}
                                                ></input>
                                                <span>
                                                학교
                                                </span>
                                            </div>
                                            <div className="right" style={{ width: '200px' }}>
                                                <input
                                                    id="checkBox"
                                                    type="checkBox"
                                                    className="public"
                                                    value="O"
                                                    checked={orgType === "O"}
                                                    onChange={(e) => RadioHandler(e)}
                                                ></input>
                                                <span>
                                                학교 외 기관
                                                </span>
                                            </div>
                                        </div>

                                                            
                                        <div className="findOrgAddress">
                                            <div className="top">
                                                <div className="title">
                                                    <div className="customP10">
                                                        학교 명/기관 명
                                                    </div>
                                                </div>
                                                <div className="wrap">
                                                    <input
                                                        type="text"
                                                        className="orgInfoInput"
                                                        placeholder="학교 명/기관 명"
                                                        value={userInfo.inquirer.orgName}
                                                        onFocus={e => (e.target.placeholder = "")}
                                                        onBlur={e => (e.target.placeholder = "학교 명/기관 명")}
                                                        onChange={onChangeOrgName}
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <div className="title">
                                                    <div className="customP10">
                                                        학교 명/기관 주소
                                                    </div>
                                                </div>

                                                <Postcode />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                                                            
                    </div> 
                    { /* 바뀐 bottomWrap */ }
                    <div className="bottomWrap1"
                        style={{
                            height: showAgreeDescription
                        }}
                    >
                        <div className="howToKnowUs">
                            <div className="wrap">
                                <div className="title">
                                    <div className="customH12">
                                        수업 문의 경로
                                    </div>
                                </div>
                                <div className="boxesWrap">
                                    <div className="box1" style={{ width: '115px', height: '24px' }}>
                                        <input
                                            id="checkBox"
                                            type="checkbox"
                                            value="R"
                                            onChange={onChangeRecommendation}
                                        ></input>
                                        <div className="customP11" style={{ marginLeft: '3px' }}>지인 추천</div>
                                    </div>
                                    <div className="box1" style={{ width: '94px', height: '24px' }}>
                                        <input
                                            id="checkBox"
                                            type="checkbox"
                                            value="F"
                                            onChange={onChangeProposal}
                                        ></input>
                                        <div className="customP11" style={{ marginLeft: '3px' }}>제안서</div>
                                    </div>
                                    <div className="box1" style={{ width: '75px', height: '24px' }}>
                                        <input
                                            id="checkBox"
                                            type="checkbox"
                                            value="S"
                                            onChange={onChangeWebSearch}
                                        ></input>
                                        <div className="customP11" style={{ marginLeft: '3px' }}>검색</div>
                                    </div>
                                    <div className="box1" style={{ width: '75px', height: '24px' }}>
                                        <input
                                            id="checkBox"
                                            type="checkbox"
                                            value="O"
                                            onChange={onChangeEtc}
                                        ></input>
                                        <div className="customP11" style={{ marginLeft: '3px' }}>기타</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottomLine">
                                
                            </div>
                        </div>

                        <div className="Agree"
                            id="agree"
                        >
                            <div className="wrap">
                                <div className="top">
                                    <div className="customP11">
                                        *개인정보 수집, 이용에 대한 동의
                                    </div>
                                    <div className="boxesWrap">
                                        <div className="agreeBox">
                                            <input
                                                id="checkBox"
                                                type="checkbox"
                                                onChange={onChangeAgree}
                                            ></input>
                                            <div className="customP11">동의함</div>
                                        </div>
                                        <div
                                            className="agreeDescriptionBtn"
                                            onClick={AgreeDescriptionBtnHandler}
                                            style={{
                                                backgroundImage: agreeBtnImage
                                            }}></div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <AgreeDescription />
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="Submit">
                            <LinkToRegsiter
                                className="submitBtn"
                                onClick={submitHandler}
                                to={ref}
                                smooth={true}

                            >
                                <span>도입 문의 하기</span>
                                </LinkToRegsiter>
                        </div>
                    { /* </div> */ }  
                    {/* 이전 bottomWrap */}


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactToRegister;