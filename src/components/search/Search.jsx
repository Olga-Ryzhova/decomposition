/**
 * Компонент блока с поиском
 */

import './search.css';

import iconNews from '../../img/search.png';
const Search = () => {
    return (
			<>
				<img src={iconNews} alt="search" className="search-img" />
				<for className="search-item">
					<input type="text" className="search-input"/>
					<button className="search-btn">Найти</button>
				</for>
			</>
    ); 
}

export default Search;