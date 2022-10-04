import Header from './Header';
import Contact from './Contact';
import VideoWrap from './VideoWrap';
import Features from './Features';
import Programs from './Programs';


const MainPage = () => {
    return (
        <div className='MainPage'>
            <Header />
            <Contact />
            <VideoWrap VideoWrapSrc='./video.mp4' />
            <Features />
            <Programs />
        </div>
    );
}

export default MainPage;