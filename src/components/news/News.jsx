/**
 * Компонент блока с новостями
 */

import './news.css';
const News = (props) => {

 const {data} = props;
   const news = 
	 data.map(item => {
			return (
				<li className="news-item">
					<img src={item.icon} className="news-icon"/>
					<a href={item.link} className="news-link">{item.title}</a>
				</li>
			)
		})
	 
	return (
		<div className="allNews">
			<div className="newsCateroty">
				<a href='#' className="category">Сейчас в СМИ</a>
				<a href='#' className="category">В стране</a>
				<a href='#' className="category">Рекомендуем</a>
			</div>
			<ul className="allItem">
				{news}
			</ul>
		</div>
	); 
}

export default News;