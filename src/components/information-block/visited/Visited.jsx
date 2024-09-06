/**
 * Компонент блока "Посещаемое"
 */

const Visited = () => {
    return (
		<div className="visited-block" style={{width: 250}}>
				<a href='#' className="visited-item" style={{textDecoration: 'none'}}>Посещаемое</a>
				<div className="visited-info" style={{ marginTop: 10}}>
					<ul className="visited-list" style={{listStyleType: "none", padding: 0}}>
						<li className="visited-list-item">Недвижимость</li>
						<li className="visited-list-item">Маркет</li>
						<li className="visited-list-item">Авто.ру</li>
					</ul>
				</div>
			</div>
	)
}

export default Visited;