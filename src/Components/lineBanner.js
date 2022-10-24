import { Link } from 'react-router-dom';

const LineBanner = () => {
    return (
        <div className='lineBanner'>
            <div className='top'>
                <div className='customH6'>
                우리 학교에 딱 맞는 SW교육<br></br>씨큐브코딩과 함께 새로운 여정을 시작해 보세요
                </div>
            </div>
            <div className='bottom'>
                <div className='wrap'>
                    <Link
                        to="/contact"
                        className="headerBtn2"
                    >
                        <div
                            className='customP4'
                        >도입문의</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LineBanner;