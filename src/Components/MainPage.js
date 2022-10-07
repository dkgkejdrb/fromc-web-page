import Header from './Header';
import Contact from './Contact';
import VideoWrap from './VideoWrap';
import Features from './Features';
import Programs from './Programs';


const MainPage = () => {
    return (
        <div className='MainPage' id='/#home'>
            <Header />
            <Contact />
            <VideoWrap VideoWrapSrc='./video.mp4' />
            <Features />
            <Programs />

            <div className='lineBanner'>
                
            </div>
        </div>
    );
}

export default MainPage;