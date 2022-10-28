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

    const Program = ({title='', 
    text={
        firstLine : '',
        secondLine : '',
        thirdLine : '',
        fourthLine : '',
    }, 
    id='', 
    to='', 
    programScale=''}) => {
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
                    // id={id} dangerouslySetInnerHTML={{__html: text}}
                    // >
                    >
                    {text.firstLine}<br></br>
                    {text.secondLine}<br></br>
                    {text.thirdLine}<br></br>
                    {text.fourthLine}
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
                        <Program title='스크래치 AI 프로젝트' text={ { firstLine : '스크래치를 이용하여 인간처럼 반응하는', secondLine : 'AI 프로그램을 만들어 봅니다.' } } id='_1_1' to='/scratch_ai' programScale={programScale1_1} />
                        <Program title='앱인벤터 AI 프로젝트' text={ { firstLine : '앱인벤터를 이용하여 스마트폰에서 동작하는', secondLine : 'AI 모바일 앱을 만들어 봅니다.' } } id='_1_2' to='/appinventor_ai' programScale={programScale1_2} />
                        <Program title='캐글 머신러닝 프로젝트' text={ { firstLine : '캐글 대회 도전을 통해 데이터 분석과', secondLine : '머신러닝의 기본 원리를 배워 봅니다.' } } id='_1_3' to='/kaggle_ai' programScale={programScale1_3} />
                    </div>
                    <div className='second Row'>
                        <Program title='메타버스 아두이노' text={ { firstLine : '가상세계에서 사물을 제어하는', secondLine : '아두이노 프로그램을 만들어 봅니다.' } } id='_2_1' to='/arduino_metaverse' programScale={programScale2_1} />
                        <Program title='메타버스 파이썬' text={ { firstLine : '가상세계에서 캐릭터와 사물을 동작시키며', secondLine : ' 파이썬을 배워 봅니다.' } } id='_2_2' to='/python_metaverse' programScale={programScale2_2}/>
                        <Program title='스크래치 게임 메이킹' text={ { firstLine : '스크래치를 이용하여 대전 액션과 러닝 액션 장르의 게임 프로그램을 만들어 봅니다.' } } id='_2_3' to='/scratch_gamemaking' programScale={programScale2_3}/>
                    </div>
                    <div className='third Row'>
                        <Program title='앱인벤터 게임 메이킹' text= { { firstLine : '앱인벤터를 이용하여 스마트폰에서 동작하는', secondLine: '캐주얼 장르의 게임 모바일 앱을 만들어 봅니다.' } } id='_3_1' to='/appinventor_gamemaking' programScale={programScale3_1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs