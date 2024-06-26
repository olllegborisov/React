import { useState } from 'react'
import cities from '../data/cities.json'
import './Cities.css'

const Cities = () => {
    const [changeCity, setChangeCity] = useState(false)
    const [currentCity, setCity] = useState('Москва')
    const handleChangeBoolean = (e) => {
        setChangeCity(!changeCity)
        e.currentTarget.classList.toggle("active")
    }

    const handleChangeCity = (e) => {
        setCity(e.target.textContent)
        const currentCityElement = document.querySelector(".cities-currentcity");
        currentCityElement.textContent = e.target.textContent;
        currentCityElement.classList.add("active");

    }



    return (
        <div className="cities-wrapper">
            <span className="cities-currentcity" onClick={handleChangeBoolean}>
                {currentCity}</span>
            <span className="cities-list" onClick={handleChangeBoolean}>{changeCity === true ? <ul className="cities-list-item">
                {cities.map((city, i) => {
                    return <li onClick={handleChangeCity} key={i}>{city}</li>
                })}
            </ul> : ''}</span>


        </div>
    )
}

export default Cities