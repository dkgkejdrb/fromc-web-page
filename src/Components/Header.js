import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header"  id='/#home'>
            <div className="left">
                <Link to="/" className="logo">

                </Link>
            </div>
            <div className="right">
                <Link to="/ProgramsPage" className="headerBtn">
                    <span>프로그램</span>
                </Link>
                <Link to="" className="headerBtn">
                    <span>도입 문의</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;