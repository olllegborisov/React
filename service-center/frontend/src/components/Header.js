import navigation from '../data/navigation.json'
import logo from '../images/header/logo.svg'
import './Header.css';

const Header = () => {
    return (
        <>
            <img src={logo} alt='logo' />
            <nav className='header-menu'>
                <ul className='header-list'>
                    {navigation.map((nav, i) => {
                        return <li key={i}>{nav}</li>

                    })}
                </ul>
            </nav>
        </>
    );

};

export default Header;
