import Header from "./Header";
import { useEffect, useState, useRef } from "react";
import geojson from '../../src/Assets/TL_SCCO_SIG.json'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { formatDate } from "react-calendar/dist/umd/shared/dateFormatter";

const { kakao } = window;

const Map = () => {
    useEffect(() => {
        let data = geojson.features;
        let coordinates = []; // 좌표 저장 배열
        let name = ''; // 행정구 이름
        const nameList = [
            '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구',
            '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구',
            '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구',
            '중구', '중랑구', '성남시 분당구', '안양시동안구'
        ]; // 지도에 표시할 행정구 이름 배열

        let polygons = [];

        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.526826, 126.99), // 지도의 중심좌표
            level: 9, // 지도의 확대 레벨
        };

        const map = new kakao.maps.Map(container, options);

        const displayArea = (coordinates, name) => {
            let path = [];
            let points = [];

            coordinates[0].forEach((coordinate) => {
                let point = {};
                // 폴리곤에 표시할 좌표 저장
                point.x = coordinate[1];
                point.y = coordinate[0];
                points.push(point);
                path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
            });

            let polygon = new kakao.maps.Polygon({
                map: map,
                path: path, // 그려질 다각형의 좌표 배열
                strokeWeight: 3, // 선의 두께입니다
                strokeColor: '#ababab', // 선의 색깔입니다
                strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: '#ababab', // 선의 스타일입니다
                fillColor: 'white', // 채우기 색깔입니다
                fillOpacity: 0.5 // 채우기 불투명도 입니다
            });
            polygons.push(polygon);
        };

        const noDisplayArea = (coordinates, name) => {
            let path = [];
            let points = [];

            coordinates[0].forEach((coordinate) => {
                let point = {};
                // 폴리곤에 표시할 좌표 저장
                point.x = coordinate[1];
                point.y = coordinate[0];
                points.push(point);
                path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
            });

            let polygon = new kakao.maps.Polygon({
                map: map,
                path: path, // 그려질 다각형의 좌표 배열
                strokeWeight: 0, // 선의 두께입니다
                strokeColor: 'white', // 선의 색깔입니다
                strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'solid', // 선의 스타일입니다
                fillColor: 'white', // 채우기 색깔입니다
                fillOpacity: 0.8 // 채우기 불투명도 입니다
            });
            polygons.push(polygon);
        };

        data.forEach((val) => {
            coordinates = val.geometry.coordinates;

            name = val.properties.SIG_KOR_NM; // 지역구 이름이 저장


            if (!(nameList.includes(name))) {
                noDisplayArea(coordinates, name);
            }
            if (nameList.includes(name)) {
                displayArea(coordinates, name);
            }
        });

        // 마커 1 (서초코어센터)
        // 마커가 표시될 위치
        let markerPosition = new kakao.maps.LatLng(37.50234457200206, 127.01124145984154);

        // 마커 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent = '<div style="padding:5px;">서초코어 센터</div>';

        // 인포윈도우를 생성
        let infowindow = new kakao.maps.InfoWindow({
            content: iwContent
        });

        // 마커에 마우스오버 이벤트를 등록한다
        kakao.maps.event.addListener(marker, 'mouseover', function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
            infowindow.open(map, marker);
        });

        // 마커에 마우스아웃 이벤트를 등록한다
        kakao.maps.event.addListener(marker, 'mouseout', function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거
            infowindow.close();
        });



        // 마커를 클릭했을 때, 맵레벨 올라가기
        kakao.maps.event.addListener(marker, 'click', function () {
            const options = {
                center: new kakao.maps.LatLng(37.50234457200206, 127.01124145984154), // 지도의 중심좌표
                level: 4, // 지도의 확대 레벨
            };
            const map = new kakao.maps.Map(container, options);
            marker.setMap(map);
        });


        // 마커 2 (대치 센터)
        // 마커가 표시될 위치
        let markerPosition2 = new kakao.maps.LatLng(37.50208249198855, 127.05738326505887);

        // 마커 생성
        let marker2 = new kakao.maps.Marker({
            position: markerPosition2
        });

        // 마커가 지도 위에 표시되도록 설정
        marker2.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent2 = '<div style="padding:5px;">대치 센터</div>';

        // 인포윈도우를 생성
        let infowindow2 = new kakao.maps.InfoWindow({
            content: iwContent2
        });

        // 마커에 마우스오버 이벤트를 등록한다
        kakao.maps.event.addListener(marker2, 'mouseover', function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
            infowindow2.open(map, marker2);
        });

        // 마커에 마우스아웃 이벤트를 등록한다
        kakao.maps.event.addListener(marker2, 'mouseout', function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거
            infowindow2.close();
        });

        // 마커 3 (목동 센터)
        // 마커가 표시될 위치
        let markerPosition3 = new kakao.maps.LatLng(37.53155479774292, 126.87541328832806);

        // 마커 생성
        let marker3 = new kakao.maps.Marker({
            position: markerPosition3
        });

        // 마커가 지도 위에 표시되도록 설정
        marker3.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent3 = '<div style="padding:5px;">목동 센터</div>';

        // 인포윈도우를 생성
        let infowindow3 = new kakao.maps.InfoWindow({
            content: iwContent3
        });

        // 마커에 마우스오버 이벤트를 등록한다
        kakao.maps.event.addListener(marker3, 'mouseover', function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
            infowindow3.open(map, marker3);
        });

        // 마커에 마우스아웃 이벤트를 등록한다
        kakao.maps.event.addListener(marker3, 'mouseout', function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거
            infowindow3.close();
        });

        // 마커 4 (잠실 센터)
        // 마커가 표시될 위치
        let markerPosition4 = new kakao.maps.LatLng(37.50850142332653, 127.08665908507595);

        // 마커 생성
        let marker4 = new kakao.maps.Marker({
            position: markerPosition4
        });

        // 마커가 지도 위에 표시되도록 설정
        marker4.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent4 = '<div style="padding:5px;">잠실 센터</div>';

        // 인포윈도우를 생성
        let infowindow4 = new kakao.maps.InfoWindow({
            content: iwContent4
        });

        // 마커에 마우스오버 이벤트를 등록한다
        kakao.maps.event.addListener(marker4, 'mouseover', function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
            infowindow4.open(map, marker4);
        });

        // 마커에 마우스아웃 이벤트를 등록한다
        kakao.maps.event.addListener(marker4, 'mouseout', function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거
            infowindow4.close();
        });

        // 마커 5 (중계 센터)
        // 마커가 표시될 위치
        let markerPosition5 = new kakao.maps.LatLng(37.6503798937211, 127.07497976139948);

        // 마커 생성
        let marker5 = new kakao.maps.Marker({
            position: markerPosition5
        });

        // 마커가 지도 위에 표시되도록 설정
        marker5.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent5 = '<div style="padding:5px;">중계 센터</div>';

        // 인포윈도우를 생성
        let infowindow5 = new kakao.maps.InfoWindow({
            content: iwContent5
        });

        // 마커에 마우스오버 이벤트를 등록한다
        kakao.maps.event.addListener(marker5, 'mouseover', function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
            infowindow5.open(map, marker5);
        });

        // 마커에 마우스아웃 이벤트를 등록한다
        kakao.maps.event.addListener(marker5, 'mouseout', function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거
            infowindow5.close();
        });

        // 마커 6 (분당 센터)
        // 마커가 표시될 위치
        let markerPosition6 = new kakao.maps.LatLng(37.36881973200507, 127.10751872868822);

        // 마커 생성
        let marker6 = new kakao.maps.Marker({
            position: markerPosition6
        });

        // 마커가 지도 위에 표시되도록 설정
        marker6.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent6 = '<div style="padding:5px;">분당 센터</div>';

        // 인포윈도우를 생성
        let infowindow6 = new kakao.maps.InfoWindow({
            content: iwContent6
        });

        // 마커에 마우스오버 이벤트를 등록한다
        kakao.maps.event.addListener(marker6, 'mouseover', function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
            infowindow6.open(map, marker6);
        });

        // 마커에 마우스아웃 이벤트를 등록한다
        kakao.maps.event.addListener(marker6, 'mouseout', function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거
            infowindow6.close();
        });

        // 마커 7 (평촌 센터)
        // 마커가 표시될 위치
        let markerPosition7 = new kakao.maps.LatLng(37.384438808471366, 126.96015426027694);

        // 마커 생성
        let marker7 = new kakao.maps.Marker({
            position: markerPosition7
        });

        // 마커가 지도 위에 표시되도록 설정
        marker7.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent7 = '<div style="padding:5px;">평촌 센터</div>';

        // 인포윈도우를 생성
        let infowindow7 = new kakao.maps.InfoWindow({
            content: iwContent7
        });

        // 마커에 마우스오버 이벤트를 등록한다
        kakao.maps.event.addListener(marker7, 'mouseover', function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시
            infowindow7.open(map, marker7);
        });

        // 마커에 마우스아웃 이벤트를 등록한다
        kakao.maps.event.addListener(marker7, 'mouseout', function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거
            infowindow7.close();
        });

    }, []);

    return (
        <div>
            <div id="map" style={{ width: "45%", height: "680px"}}></div>
        </div>
    );
}


// 카카오 지도 불러오기
// const Map = () => {
//     useEffect(() => {
//         const container = document.getElementById('map');
//         const options = {
//             center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//             level: 3
//         };
//         const map = new kakao.maps.Map(container, options);

//         var polygonPath = [
//             new kakao.maps.LatLng(33.45133510810506, 126.57159381623066),
//             new kakao.maps.LatLng(33.44955812811862, 126.5713551811832),
//             new kakao.maps.LatLng(33.449986291544086, 126.57263296172184),
//             new kakao.maps.LatLng(33.450682513554554, 126.57321034054742),
//             new kakao.maps.LatLng(33.451346760004206, 126.57235740081413)
//         ];

//         var polygon = new kakao.maps.Polygon({
//             path: polygonPath, // 그려질 다각형의 좌표 배열입니다
//             strokeWeight: 3, // 선의 두께입니다
//             strokeColor: '#39DE2A', // 선의 색깔입니다
//             strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
//             strokeStyle: 'longdash', // 선의 스타일입니다
//             fillColor: '#A2FF99', // 채우기 색깔입니다
//             fillOpacity: 0.7 // 채우기 불투명도 입니다
//         });

//         polygon.setMap(map);
//     }, [])

//     return (
//         <div>
//             <div id="map" style={{ width: "500px", height: "400px" }}></div>
//         </div>
//     );
// }





const ContactToRegister = () => {
    // 달력용 날짜 스테이트 관리
    const [value, onChange] = useState(new Date());

    // 선택한 날짜 보여주기
    // 날짜.toDateString 반드시 붙일 것
    const ShowDate = () => {
        return (
            <div className="show">
                {value.toLocaleDateString()}
            </div>
        );
    }


    const handleChange = (event) => {
        window.open(event.target.value);
    }

    return (
        <div className="contactToRegister">
            <Header />
            <div className="wrap">
                <div className="introduction" >
                    {/* <div className="customH1"> */}
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
                                <Map />
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

                        {/* 달력 셋팅 */}
                        <div className="calendarWrap">
                            <div className="calendar">
                                <Calendar 
                                    onChange={onChange}
                                    onClickDay={(value, event) => 
                                    {
                                        <ShowDate  />
                                    }}
                                    calendarType="US"
                                    value={value} 
                                    minDate={new Date()}
                                    maxDate={new Date("12-31-2022")}
                                    />
                                <ShowDate />
                            </div>
                        </div>

                        <div className="bars">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactToRegister;