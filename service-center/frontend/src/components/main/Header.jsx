import { NavLink } from 'react-router-dom'
import navigation from '../../data/main/navigation'
import Cities from './Cities';
import logo from '../../images/main/header/logo.svg'
import { useResize } from '../../hooks/useResize';
import styles from './Header.module.css'


const Header = () => {
    const desktopVersion = useResize()
    console.log(desktopVersion);
    return (
       
        <div className='app-header container-box'>
            {desktopVersion.isScreenSm === true ? (
                <>
                <img className={styles.logo} src={logo} alt='logo' />
                    <nav className={styles.menu}>
                        <ul className={styles.list}>
                            {navigation.map((nav, i) => {
                                return <NavLink to={nav.translate} key={i}>{nav.title}</NavLink>
                            })}
                        </ul>
                    </nav>
                    <Cities /> 
                </>
                    ) : (
        <div>The mobile version will be here a bit late.</div> 
        )}
        </div>
    );

};

export default Header;
