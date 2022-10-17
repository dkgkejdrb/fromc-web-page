import Header from './Header';
import Contact from './Contact';
import VideoWrap from './VideoWrap';
import Features from './Features';
import Programs from './Programs';
import LineBanner from './lineBanner';
import Footer from './Footer';

const MainPage = () => {
    return (
        <div className='MainPage' id='/'>
            <Header />
            <Contact />
            <VideoWrap VideoWrapSrc='./video.mp4' />
            <Features />
            <Programs />
            <LineBanner />
            <Footer />
        </div>
    );
}

export default MainPage;