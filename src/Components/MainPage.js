import Header from './Header';
import Contact from './Contact';
import VideoWrap from './VideoWrap';
import Features from './Features';
import Programs from './Programs';
import LineBanner from './lineBanner';
import Footer from './Footer';
import Copyright from './Copyright';

const MainPage = () => {
    return (
        <div className='MainPage' id='/#home'>
            <Header />
            <Contact />
            <VideoWrap VideoWrapSrc='./video.mp4' />
            <Features />
            <Programs />
            <LineBanner />
            <Footer />
            <Copyright />
        </div>
    );
}

export default MainPage;