import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import MapKaKao from "./MapKakao";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


// react-calendar API 모음:
// https://github.com/wojtekmaj/react-calendar





// 사용자가 선택한 날짜 데이터
const barInfo = [
    {
        id : 'bar0',
        date : 'xxxx.xx.xx'
    },
    {
        id : 'bar1',
        date : 'xxxx.xx.xx'
    },
    {
        id : 'bar2',
        date : 'xxxx.xx.xx'
    },
];    

const ContactToRegister = () => {
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
    }


    // 날짜 표시바의 위치 지정
    const [pointer, setPointer] = useState(0);

    // 더하기 버튼 클릭 시, 바 보이기
    const AddBar = () => {
        // 중복 등록 막기
        if ((barInfo[0].date != 'xxxx.xx.xx') && (barInfo[1].date != 'xxxx.xx.xx')) 
        {
            if ((barInfo[0].date === barInfo[1].date)) {
                alert('동일한 날짜를 여러번 등록할 수 없습니다.1');
                return;
            }
        }
        if ((barInfo[0].date != 'xxxx.xx.xx') && (barInfo[1].date != 'xxxx.xx.xx') && (barInfo[2].date != 'xxxx.xx.xx') ) 
        {
            if ((barInfo[0].date === barInfo[2].date)) {
                alert('동일한 날짜를 여러번 등록할 수 없습니다.2');
                return;
            }
            if ((barInfo[1].date === barInfo[2].date)) {
                alert('동일한 날짜를 여러번 등록할 수 없습니다.3');
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
                    <div className="circleNum" style={{display: bar1DisplayValue}}>
                        1
                    </div>
                    <div id={barInfo[0].id} style={{width:'200px', height:'30px', backgroundColor:"white", border:"solid", display: bar1DisplayValue }}>
                        {barInfo[0].date}
                    </div>
                </div>
            );
        }

        const Bar1 = () => {
            return (
                <div className="barWrap">
                    <div className="circleNum" style={{display: bar2DisplayValue}}>
                        2
                    </div>
                    <div id={barInfo[1].id} style={{width:'200px', height:'30px', backgroundColor:"white", border:"solid", display: bar2DisplayValue }}>
                        {barInfo[1].date}
                    </div>
                </div>
            );
        }

        const Bar2 = () => {
            return (
                <div className="barWrap">
                    <div className="circleNum" style={{display: bar3DisplayValue}}>
                        3
                    </div>
                    <div id={barInfo[2].id} style={{width:'200px', height:'30px', backgroundColor:"white", border:"solid", display: bar3DisplayValue }}>
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

    return (
        <div className="contactToRegister">
            <Header />
            <div className="wrap">
                <div className="introduction" >
                    <div className="title">
                        <div className="customH1">
                            FROMC 프로그램<br></br>도입 문의
                        </div>
                        <div className="customP">
                            관심있는 교육 프로그램 도입 문의를 주시면<br></br>담당자가 24시간 내에 연락드립니다.
                        </div>
                    </div>
                </div>
                <div className="selectRegion">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                서비스 가능지역
                            </div>
                            <div className="customP">
                                서비스 가능 지역 확인 후 도입 신청을 이용해 주세요. 
                            </div>
                        </div>
                        <div className="mapWrap">
                            <div className="source">
                                <MapKaKao />
                            </div>
                        </div>
                        <div className="information">
                            <div className="wrap">
                                <div className="centerName">
                                    <div className="customH3">
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
                                                    씨큐브코딩 서초코어센터
                                                </div>
                                                <div className="customP">
                                                    서울시 서초구 고무래로 26 쌍동빌딩 동관 3층
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
                                                02-537-2900
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
                                <select style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}>
                                    <option>시/도 선택</option>
                                    <option value=''>서울</option>
                                    <option value=''>경기</option>
                                </select>
                            </div>

                            <div className='list' style={{ width: '40%', height: '70%' }}>
                                <select style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}>
                                    <option>구/군 선택</option>
                                    <option value=''>강남구</option>
                                    <option value=''>노원구</option>
                                    <option value=''>서초구</option>
                                    <option value=''>송파구</option>
                                    <option value=''>양천구</option>
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
                                <select style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}>
                                    <option>선택해주세요.</option>
                                    <option value=''>1</option>
                                    <option value=''>2</option>
                                    <option value=''>3</option>
                                    <option value=''>4</option>
                                    <option value=''>5</option>
                                    <option value=''>6</option>
                                    <option value=''>7</option>
                                    <option value=''>8</option>
                                    <option value=''>9</option>
                                    <option value=''>10</option>
                                    <option value=''>11</option>
                                    <option value=''>12</option>
                                    <option value=''>13</option>
                                    <option value=''>14</option>
                                    <option value=''>15</option>
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
                            <input type="text" placeholder="총 도입 예상 인원" style={{width:'200px', height: '24px', textAlign: 'center'}}></input>
                        </div>
                    </div>
                </div>

                <div className="selectProgram">
                    <div className="wrap">
                        <div className="title">
                            <div className="customH2">
                                프로그램 선택
                            </div>
                        </div>
                        <div className="listWrap">
                            <div className='list' style={{ width: '40%', height: '70%' }}>
                                <select style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}>
                                    <option>선택해주세요.</option>
                                    <option value=''>항목1</option>
                                    <option value=''>항목2</option>
                                    <option value=''>항목3</option>
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
                                <select style={{ width: '200px', height: '24px', border: 'solid 0.1px white' }}>
                                    <option>선택해주세요.</option>
                                    <option value=''>3교시</option>
                                    <option value=''>6교시</option>
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
                                    onClickDay={(value, event) => 
                                    {
                                        SaveDate(value);
                                    }}
                                    calendarType="US"
                                    value={value} 
                                    minDate={new Date()}
                                    // maxDate={new Date("12-31-2022")}

                                    // 하이라이트 처리
                                    tileClassName={({ date, view }) =>  {
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
                            <input type="text" placeholder="신청자 이름" style={{width:'200px', height: '24px', textAlign: 'center'}}></input>
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
                            <input type="text" placeholder="작성자 이메일" style={{width:'200px', height: '24px', textAlign: 'center'}}></input>
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
                            <input type="text" placeholder="휴대폰 번호" style={{width:'200px', height: '24px', textAlign: 'center'}}></input>
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
                                <div className="selectType"></div>
                                <div className="findOrgAddress">
                                    <div className="top">
                                        <div className="title"></div>
                                        <input type="text"></input>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"></div>
                                        <input type="text"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactToRegister;