/**
 * Компонент блока "Телепрограмма"
 */

const TvListings = () => {
    return (
		<div className="tvListings-block" style={{width: 250}}>
				<a href='#' className="tvListings-item" style={{textDecoration: 'none'}}>Телепрограмма</a>
				<div className="tvListings-info" style={{ marginTop: 10}}>
					<ul className="tvListings-list" style={{listStyleType: "none", padding: 0}}>
						<li className="tvListings-list-item">Новости</li>
						<li className="tvListings-list-item">Время</li>
						<li className="tvListings-list-item">Сейчас</li>
					</ul>
				</div>
			</div>
	) 
}

export default TvListings;