/**
 * Компонент блока с промо возле компонента с новостями
 */

import './promo.css';

import circle from '../../img/circle.png'

const Promo = () => {
    return (
        <div className="promo">
					<img src={circle} alt="promo" className="promo-img"/>
					<a href={'#'} className="promo-link">Здесь реклама</a>
					<div className="promo-sub">Переходите</div>
				</div>
    ); 
}

export default Promo;