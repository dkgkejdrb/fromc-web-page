import { Link } from 'react-router-dom';

const LineBanner = () => {
    return (
        <div className='lineBanner'>
            <div className='top'>
                <div className='customH6'>
                    아이들의 변화를 이끌어내는 프롬C
                </div>
            </div>
            <div className='bottom'>
                <div className='wrap'>
                    <Link
                        to="/ContactToRegister"
                        className="headerBtn2"
                        target="_blank"
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