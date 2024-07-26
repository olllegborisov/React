import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useResize } from '../../hooks/useResize';
import navigation from '../../data/navigation'
import Cities from '../main/Cities';
import contactsDetails from '../../data/footer/contactsDetails';
import logo from '../../images/main/header/logo.svg'
import phone from '../../images/main/header/phone.svg'
import styles from '../../styles/header/Header.module.css'


const Header = () => {
    const apdaptive = useResize()
    const [popUp, setPopUp] = useState(false)
    const [crossAnimation, setCrossAnimation] = useState(false)
    const [lineWidth, setLineWidth] = useState('')
    const [lineTop, setLineTop] = useState('')

    useEffect(() => {
        if (apdaptive.isScreenSm === true && apdaptive.isScreenXs === false) {
            setLineWidth('34px')
            setLineTop('21px')
        }
        if (apdaptive.isScreenXs === true && apdaptive.isScreenSm === true) {
            setLineWidth('20px')
            setLineTop('23px')
        }
    }, [apdaptive.isScreenSm, apdaptive.isScreenXs])

    const handleChangeBoolean = () => {
        setPopUp(!popUp)
        
        if (popUp === false ) {
            setCrossAnimation('true')

        }
        else {
            setCrossAnimation(false)
            
        }

    }

    return (
       
        <div className='app-header container-box'>
            {apdaptive.isScreenL === true ? (
                <>
                <img className={styles.logo} src={logo} alt='logo' />
                    <nav className={styles.menu}>
                        <ul className={styles.list}>
                            {navigation.map((nav, i) => {
                                return <NavLink to={nav.name} key={i}>{nav.title}</NavLink>
                            })}
                        </ul>
                    </nav>
                    <Cities /> 
                </>
                    ) : (
                <>
                    <div className={styles.wrapperMobile}>
                        <img className={styles.logo} src={logo} alt='logo' />
                        <div className={styles.titleMobile}>
                            <p>Официальный</p>
                            <p>Сервисный&nbsp;центр </p>
                        </div>
                        <div className={styles.burger} onClick={handleChangeBoolean} >
                            <span className={`${styles.line} `} style={crossAnimation === false ? null : { transform: 'scale(0)' } }></span>
                            <span className={styles.line} style={crossAnimation === false ? null : { transform: 'rotate(45deg)', width: lineWidth, bottom: '24px' } }></span>
                            <span className={styles.line} style={crossAnimation === false ? null : { transform: 'rotate(-45deg)', width: lineWidth, top: lineTop } }></span>
                        </div> 
                    </div>
                    <nav className={styles.menuMobile} style={popUp === true ? {transform: 'translateY(0)'} : null }>
                        <div className={styles.listMobile}>
                            <div className={styles.listWrapper}>
                                {navigation.map((nav, i) => {
                                    return <NavLink to={nav.name} key={i}>{nav.title}</NavLink>
                                })}
                                
                                <div className={styles.phoneWrapper}>
                                    <img src={phone} alt="phone" />
                                    <a className={styles.phoneNumber} href={contactsDetails[0].phoneLink}>{contactsDetails[0].phone}</a>
                                </div>
                                <Cities /> 
                            </div>
                        </div>
                    </nav>
                </> 
            )}
        </div>
    );

};

export default Header;
