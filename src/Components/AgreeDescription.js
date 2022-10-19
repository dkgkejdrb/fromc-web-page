const AgreeDescription = ({display}) => {
    return (
        <div className="agreeDescription" 
        style={{
            width:'730px', 
            height: '200px',
            marginTop: '15px',
            paddingTop: '5px',
            overflowY : "scroll",
            display: display,
            fontSize: '16px',
            lineHeight: '1.6rem',
            backgroundColor: 'white',
            color: '#333',
            borderTop: '1px solid  #A8A8A8',
            borderBottom: '1px solid  #A8A8A8'
            }}>
            1. 개인정보의 수집에 대한 동의<br></br>
            회사는 개인정보처리방침의 내용에 대하여 『동의』할 수 있는 절차를 마련하여, 회원이 『동의』버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 간주합니다.
            단, 학부모가 자녀를 추가로 가입하는 경우 학부모가 『동의』버튼을 선택하면 자녀의 개인정보 수집에 대해 동의한 것으로 간주합니다.<br></br><br></br>

            2. 개인정보 수집 항목 및 수집 방법<br></br>
        회사는 회원가입, 상담, 서비스 신청, 서비스 이용을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                <table  style={{ border: '1px solid' }}>
                <tbody><tr>
              <th>구분</th>
              <th colSpan="2">수집항목</th>
            </tr>
            <tr>
              <th rowSpan="2">회원가입 시<br></br>(일반 학부모)</th>
              <td style={{textAlign:"center", width: '50px'}}>필수</td>
              <td>이름, 생년월일, 학부모 아이디, 비밀번호, 이메일, 휴대폰번호만 14세 미만의 경우 법정대리인의 i-Pin 확인 정보</td>
            </tr>
            <tr>
              <td style={{textAlign:"center"}}>선택</td>
              <td>선호 브랜치(만 19세 이상에 한함), 성별, 주소</td>
            </tr>
            <tr>
              <th rowSpan="2">회원가입 시(만 14세 이상 자녀)</th>
              <td style={{textAlign:"center"}}>필수</td>
              <td>이름, 생년월일, 학생 아이디, 비밀번호, 이메일(학생), 학년 및 연령, 학교, 브랜치, 닉네임휴대폰번호(학부모), 이메일(학부모)</td>
            </tr>
            <tr>
              <td style={{textAlign:"center"}}>선택</td>
              <td>휴대폰(학생), 성별, 주소</td>
            </tr>
            <tr>
              <th rowSpan="2">입학 시</th>
              <td style={{textAlign:"center"}}>필수</td>
              <td>이름, 레벨, 생년월일, 이메일, 자택주소, 휴대폰번호, 자택번호, 학교</td>
            </tr>
            <tr>
              <td style={{textAlign:"center"}}>선택</td>
              <td>선호 브랜치(만 19세 이상에 한함), 휴대폰(학생), 성별, 주소</td>
            </tr>
            <tr>
              <th>L.Point 사용 시</th>
              <td style={{textAlign:"center"}}>필수</td>
              <td>회원 고유 번호, 재원중인 지점명, 이름, 생년월일, 휴대폰번호</td>
            </tr>
            <tr>
              <th rowSpan="2">수강료 결제 시</th>
              <td style={{textAlign:"center"}}>필수</td>
              <td>학생이름, 학생아이디, 학부모이름, 학부모 아이디, 브랜치, 레벨, 이메일(학부모), 휴대폰번호</td>
            </tr>
            <tr>
              <td style={{textAlign:"center"}}>선택</td>
              <td>주소(배송교재주문시)</td>
            </tr>
            <tr>
              <th>은행을 통한 환불 시</th>
              <td style={{textAlign:"center"}}>필수</td>
              <td>환불 계좌번호</td>
            </tr>
          </tbody>
          </table>
            <span>






ο 수집방법<br></br>
- 홈페이지를 통한 회원가입, 입학시험 예약, Allim App, Phonics Concert App, 상담게시판, 행사 참가<br></br>
- 제휴사로부터의 제공<br></br>
- 생성 정보 수집 툴을 통한 수집<br></br>
- 학원 시설(강의실 등)에 설치된 CCTV를 통한 정보 수집<br></br>
- 학원에서 학생 관리 및 환불 처리를 위한 정보 수집<br></br>
- 영상정보처리기기(네트워크 카메라 등)를 통한 영상정보 수집<br></br><br></br>
3. 개인정보 수집 및 이용 목적<br></br>
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br></br><br></br>

ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금 정산<br></br>
- 콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 미납요금 추심, 입학시험 일정 안내<br></br><br></br>

ο 회원 관리<br></br>
- 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량 회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령 확인, 학사기록 관리, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만 처리 등 민원처리, 고지사항 전달<br></br><br></br>

ο 마케팅 및 광고에 활용<br></br><br></br>
- 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계<br></br><br></br>

4. 개인정보의 보유 및 이용 기간<br></br>
원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br></br><br></br>

ο 보존 항목 : 로그온 ID<br></br>
- 보존 이유 : 부정사용 방지 및 재가입 금지<br></br>
- 보존 기간 : 3년<br></br><br></br>
ο 보존 항목 : 이름, 자택 전화번호, 자택 주소, 휴대폰 번호, 법정대리인 정보, 결제 기록<br></br>
- 보존 근거 : 전자상거래 등에서의 소비자보호에 관한 법률<br></br>
- 표시ㆍ광고에 관한 기록 : 6월<br></br>
- 계약 또는 청약철회 등에 관한 기록 : 5년<br></br>
- 대금 결제 및 재화 등의 공급에 관한 기록 : 5년<br></br>
- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br></br><br></br>
ο 보존 항목 : Live class 또는 Online 수업을 통한 영상 기록(생성/수집) 및 음성 정보<br></br>
- 보존 이유 : 교육서비스 제공 사실 확인 수업환경 모니터링, VOD형태의 강의자료 활용<br></br>
- 보존 기간 : 1년<br></br><br></br>
5. 개인정보의 파기절차 및 방법에 관한 사항<br></br>
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br></br><br></br>

파기절차<br></br>
- 회원이 회원가입을 위해 입력한 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용 기간 참조) 일정 기간 저장된 후 파기됩니다. 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.<br></br>
- 회원가입 후 1년간 서비스 이용 및 로그인하지 않은 이용자의 개인정보는 휴면회원으로 별도 분리 보관하며, 5년이 경과된 휴면회원의 개인정보는 지체 없이 파기합니다.
파기방법<br></br>
- 종이에 출력된 개인정보 : 분쇄기로 분쇄하거나 소각<br></br>
- 전자적 파일 형태로 저장된 개인정보 : 기록을 재사용할 수 없는 기술적 방법을 사용하여 삭제
        </span>
        </div>
    );
}

export default AgreeDescription;