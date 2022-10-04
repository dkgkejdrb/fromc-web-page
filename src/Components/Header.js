import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header" id='/#home'>
            <div className="left">
                <Link to="/" className="logo">

                </Link>
            </div>
            <div className="right">
                <Link to="/ProgramsPage" className="headerBtn1">
                    <span>프로그램</span>
                </Link>
                <Link to="/ContactToRegister" className="headerBtn2" target="_blank">
                    <span>도입문의</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;