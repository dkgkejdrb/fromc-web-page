import { useState } from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
    const [programScale1_1, setProgramScale1_1] = useState('1');
    const [programScale1_2, setProgramScale1_2] = useState('1');
    const [programScale1_3, setProgramScale1_3] = useState('1');
    const [programScale2_1, setProgramScale2_1] = useState('1');
    const [programScale2_2, setProgramScale2_2] = useState('1');
    const [programScale2_3, setProgramScale2_3] = useState('1');
    const [programScale3_1, setProgramScale3_1] = useState('1');

    const mouseOverHandler = (e) => {
        if(e.target.id === '_1_1') {
            setProgramScale1_1('scale(1.05)')
        } else if(e.target.id === '_1_2') {
            setProgramScale1_2('scale(1.05)') 
        } else if(e.target.id === '_1_3') {
            setProgramScale1_3('scale(1.05)')  
        } else if(e.target.id === '_2_1') {
            setProgramScale2_1('scale(1.05)')  
        } else if(e.target.id === '_2_2') {
            setProgramScale2_2('scale(1.05)')  
        } else if(e.target.id === '_2_3') {
            setProgramScale2_3('scale(1.05)')  
        } else if(e.target.id === '_3_1') {
            setProgramScale3_1('scale(1.05)')  
        }
    }

    const mouseOutHandler = (e) => {
        setProgramScale1_1('scale(1)');
        setProgramScale1_2('scale(1)');
        setProgramScale1_3('scale(1)');
        setProgramScale2_1('scale(1)');
        setProgramScale2_2('scale(1)');
        setProgramScale2_3('scale(1)');
        setProgramScale3_1('scale(1)');
    }

    const Program = ({title='', text='', id='', to='', programScale=''}) => {
        return (
            <Link className='program'
            to={to}
            id={id}
            onMouseOver={(e) => mouseOverHandler(e)}
            onMouseOut={(e) => mouseOutHandler(e)}
            
            style={{
                transform: programScale,
                textDecoration: 'none',
            }}>
                <div className='top'>
                    <div className='image'
                    id={id}>
    
                    </div>
                </div>
                <div className='bottom'
                    id={id}>
                    <div className='programTitle'
                    id={id}>{title}</div>
                    <div className='programText'
                    // 리젝션 걸릴 수 있으므로, 나중에 수정
                    id={id} dangerouslySetInnerHTML={{__html: text}}>
                        
                    </div>
                </div>
            </Link>
        );
    }

    
    return (
        <div className='programs'>
            <div className='wrap'>
                <div className='title'>
                    {/* <div className='fromcLogo'> </div> */}
                    <div className='fromcText'>From.C 프로그램</div>
                </div>
                <div className='wrap'>
                    <div className='first Row'>
                        <Program title='스크래치 AI 프로젝트' text='티처블 머신과 스크래치로 재미있는 <br/>AI 프로그램을 만들어 봅니다.' id='_1_1' to='/ProgramPage1' programScale={programScale1_1} />
                        <Program title='앱인벤터 AI 프로젝트' text='AI 기능을 가진 모바일 앱을 만들면서<br/>머신러닝을 배웁니다.' id='_1_2' to='/ProgramPage2' programScale={programScale1_2} />
                        <Program title='캐글 머신러닝 프로젝트' text='‘다양한 캐글 예제를 통해 데이터 분석과<br/>머신러닝 기초부터 차근차근 배웁니다.' id='_1_3' to='/ProgramPage3' programScale={programScale1_3} />
                    </div>
                    <div className='second Row'>
                        <Program title='메타버스 아두이노' text='가상 아두이노 코딩으로<br/>피지컬 컴퓨팅을 배웁니다.' id='_2_1' to='/ProgramPage4' programScale={programScale2_1} />
                        <Program title='메타버스 파이썬' text='실시간 3D 인터랙티브 프로그래밍으로<br/>코딩 초보자도 쉽게 파이썬을 배울 수 있습니다.' id='_2_2' to='/ProgramPage5' programScale={programScale2_2}/>
                        <Program title='스크래치 게임 메이킹' text='스크래치로 게임을 만들며 게임 프로그래밍에 필요한 핵심 블록과 코딩 개념을 배웁니다.' id='_2_3' to='/ProgramPage6' programScale={programScale2_3}/>
                    </div>
                    <div className='third Row'>
                        <Program title='앱인벤터 게임 메이킹' text='누구나 쉽게 앱을 개발할 수 있는 앱인벤터를 활용해 간단한 모바일 게임을 만들어 봅니다.' id='_3_1' to='/ProgramPage7' programScale={programScale3_1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs