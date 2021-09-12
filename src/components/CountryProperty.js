import React, {useState} from 'react';
import CountryPropertyStyles from './CountryProperty.module.css';

const CountryProperty = ({text}) => {
    const [visible, setVisible] = useState(false);

    const clickHandler = () => {
        setVisible(!visible);
    }

    return (
        <div className={CountryPropertyStyles.property}>
            <button className={CountryPropertyStyles.name} onClick={clickHandler}>{text}</button>
            <p className={`${CountryPropertyStyles.content} ${visible ? CountryPropertyStyles.showContent : ""}`}>Bla bla</p>
        </div>
    )
}

export default CountryProperty
