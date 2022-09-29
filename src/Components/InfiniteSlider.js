import React, {useEffect, useState} from 'react';

const InfiniteSlider = ({sliderWidth}) => {
    const sliderHeight = parseInt(sliderWidth) * 0.28;
    const sliderElementsWidth = parseInt(sliderWidth)*0.18;
    const sliderSpeed = parseInt(sliderWidth) * 0.43;

    const [Step, SetStep] = useState(0);
    const [transitionTime, SetTransitionTime] = useState(0.2);
   
    const listItems = [
        {
            key : '#444(1)',
            text : `"codeAlive는 정말 재미있습니다."`,
            url : 'url(https://codingbiz.blob.core.windows.net/vlc/classes/thumbnail/20220722/cb7f5661-8ffe-483e-a53b-2204174ddce3.jpg)',
            user : '배정빈 | 아주중3'
        },

        {
            key : '#111',
            text : `"코딩을 중학교에 올라와서 시작했는데"`,
            url : 'url(https://codingbiz.blob.core.windows.net/vlc/classes/thumbnail/20220725/465a7d4a-ad85-4c9d-ba6e-99a4281495ad.jpg)',
            user : '서이 Mom | 늘푸른중1'
        },

        {
            key : '#222',
            text : `"제 아들은 codeAlive를 정말 좋아합니다."`,
            url : 'url(https://codingbiz.blob.core.windows.net/vlc/classes/thumbnail/20220722/d67a02b8-7916-4b5b-b4c2-af50438fbe35.jpg)',
            user : '서준 Dad | 방배초6'
        },

        {
            key : '#333',
            text : `"codeAlive를 사용할 기회가 있어서 정말 기뻤습니다."`,
            url : 'url(https://codingbiz.blob.core.windows.net/vlc/classes/thumbnail/20220722/c17a4ecd-210c-45bc-bd80-8788ee1012e5.jpg)',
            user : '이지현 | 중등교사'
        },

        {
            key : '#444',
            text : `"codeAlive는 정말 재미있습니다."`,
            url : 'url(https://codingbiz.blob.core.windows.net/vlc/classes/thumbnail/20220722/cb7f5661-8ffe-483e-a53b-2204174ddce3.jpg)',
            user : '배정빈 | 아주중3'
        },

        {
            key : '#111(1)',
            text : `"코딩을 중학교에 올라와서 시작했는데'"`,
            url : 'url(https://codingbiz.blob.core.windows.net/vlc/classes/thumbnail/20220725/465a7d4a-ad85-4c9d-ba6e-99a4281495ad.jpg)',
            user : '서이 Mom | 늘푸른중1'
        }
    ];

    useEffect(() => {
        SetStep(-sliderSpeed);    
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextHandler();

        }, 4000);

        return () => clearInterval(timer);
    }, [Step]);


    const sliderList = listItems.map((list) => 
        <div id='SliderElements' 
        className={list.key} 
        key={list.key}
        style={{
            flexDirection: 'column',
            width: `${sliderElementsWidth}px`,
            // slideElement 크기를 줄이거나 키우려면 여기를 변경
            height: '60%', 
            transform: `translateX(${Step}px)`,
            transition: `${transitionTime}s ease-in-out`
            }}>
                <div style={{width:'100%', height:'100%', backgroundSize : 'cover', backgroundImage : list.url, backgroundPosition : 'center'}}></div>
                
            <div id='Profile' style={{width : '100%', height : '100%'}}>
                {list.text}
            </div>
        </div>
    );

    const prevHandler = () => {
        if(Step >= 0) {
            SetTransitionTime(0);
            SetStep(-(sliderSpeed*(listItems.length-2))) // *4
            replaceLastSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step+sliderSpeed);
        }
    }

    const replaceLastSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0.2);
            SetStep(-(sliderSpeed*(listItems.length-3))); // *3
        }, 150, transitionTime)
    }

    const nextHandler = () => {
        if(Step <= -2400) { // *4
            SetTransitionTime(0.2);
            SetStep(Step-sliderSpeed);
            replaceFirstSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step-sliderSpeed);
        }
    }

    const replaceFirstSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0);
            SetStep(-(sliderSpeed)); // *0
        }, 150, transitionTime)
    }

    const SliderNavHandler = () => {
        if(Step === -sliderSpeed * 0)
        {
            return (
                <div className='Wrap'>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 1)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 2)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 3)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } 
        else {
            return (
                <div className='Wrap'>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );            
        }
    }

    return (
        <div className='InfiniteSlider'>
            <div className='titleWrap'>
                <h1 className='customH1'>
                    FromC 프로그램
                </h1>
            </div>
            <div className='Wrap'>
                <div className='SliderWrap'>
                    <a className='PrevBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={prevHandler}>&#60;</a>
                    <div className='Slider' style={{width : sliderWidth, height : `${sliderHeight}px`}}>
                        <div className='SliderList'>
                            {sliderList}
                        </div>
                    </div>
                    <a className='NextBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={nextHandler}>&#62;</a>
                </div>
                <div className='SliderNav'> 
                    <SliderNavHandler />
                </div>                    
            </div>
        </div>
    );
}

export default InfiniteSlider;