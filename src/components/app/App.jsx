/**
 * Компонент приложения, который включает в себя все компоненты
 */

import './app.css';
import News from '../news/News';
import Promo from '../promo/Promo';
import Search from '../search/Search';
import Advertisement from '../advertisement/Advertisement';
import InformationBlock from '../information-block/InformationBlock';

import data from '../news/newsData';

const App = () => {
	return (
		<div className="container">
			<div className="header">
				<News data={data}/> 
				<Promo/>
			</div>

			<div className="search-block">
				<Search/>
			</div>
			
			<Advertisement/>
			<InformationBlock/>
		</div>
	);
}

export default App;
