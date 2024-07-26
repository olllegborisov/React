import { useState } from 'react'
import cities from '../../data/main/cities.json'
import styles from '../../styles/main/Cities.module.css'
import '../../styles/main/Cities.css'


const Cities = () => {
    const [changeCity, setChangeCity] = useState(false)
    const [currentCity, setCity] = useState('Москва')
    const handleChangeBoolean = (e) => {
        setChangeCity(!changeCity)
        e.currentTarget.classList.toggle("active")
    }

    const handleChangeCity = (e) => {
        setCity(e.target.textContent)
        const currentCityElement = document.querySelector(".currentcity");
        currentCityElement.textContent = e.target.textContent;
        currentCityElement.classList.add("active");

    }



    return (
        <div className={styles.wrapper}>
            <span className="currentcity" onClick={handleChangeBoolean}>
                {currentCity}</span>
            <span className={styles.list} onClick={handleChangeBoolean}>{changeCity === true ? <ul className={styles.item}>
                {cities.map((city, i) => {
                    return <li onClick={handleChangeCity} key={i}>{city}</li>
                })}
            </ul> : ''}</span>


        </div>
    )
}

export default Cities