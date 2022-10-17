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
                textDecoration: 'none'
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
                    id={id}>
                        {text}
                    </div>
                </div>
            </Link>
        );
    }

    
    return (
        <div className='programs'>
            <div className='wrap'>
                <div className='title'>프로그램 소개</div>
                <div className='subTitle'>씨큐브코딩의 우수한 연구진들의 전문적인 코딩 지식을 바탕으로 개발된 콘텐츠 프로그램을 소개 합니다.</div>
                <div className='wrap'>
                    <div className='first Row'>
                        <Program title='스크래치 AI' text='티처블 머신과 스크래치로 재미있는 AI 프로그램을 만들어 봅니다.' id='_1_1' to='/ProgramPage1' programScale={programScale1_1} />
                        <Program title='인공지능 앱 만들기' text='AI 기능을 가진 모자일 앱을 만들면서 머신러닝을 배웁니다.' id='_1_2' to='/ProgramPage2' programScale={programScale1_2} />
                        <Program title='캐글 머신러닝 프로젝트' text='‘캐글(Kaggle)’에서 타이타닉 탑승객의 생존 여부를 예측하는 미션을 통해 머신러닝 모델의 원리를 이해할 수 있습니다.' id='_1_3' to='/ProgramPage3' programScale={programScale1_3} />
                    </div>
                    <div className='second Row'>
                        <Program title='메타버스 아두이노' text='가상 아두이노 코딩으로 피지컬 컴퓨팅을 배웁니다.' id='_2_1' to='/ProgramPage4' programScale={programScale2_1} />
                        <Program title='메타버스 파이썬' text='실시간 3D 인터랙티브 프로그래밍으로 코딩 초보자도 쉽게 파이썬을 배울 수 있습니다.' id='_2_2' to='/ProgramPage5' programScale={programScale2_2}/>
                        <Program title='스크래치 게임 메이킹' text='교육용 코딩 프로그램 ‘스크래치’를 사용하여 게임을 만들어봅니다. ' id='_2_3' to='/ProgramPage6' programScale={programScale2_3}/>
                    </div>
                    <div className='third Row'>
                        <Program title='앱인벤터 게임 메이킹' text='교육용 코딩 프로그램 ‘앱인벤터’를 사용하여 게임을 만들어 봅니다.' id='_3_1' to='/ProgramPage7' programScale={programScale3_1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs