/**
 * Компонент блока "Эфир"
 */

const Ether = () => {
	return (
		<div className="ether-block" style={{width: 250}}>
				<a href='#' className="ether-item" style={{textDecoration: 'none'}}>Эфир</a>
				<div className="ether-info" style={{ marginTop: 10}}>
					<ul className="ether-list" style={{listStyleType: "none", padding: 0}}>
						<li className="ether-list-item">Эфир 1</li>
						<li className="ether-list-item">Эфир 2</li>
						<li className="ether-list-item">Эфир 3</li>
					</ul>
				</div>
			</div>
	)
	
}

export default Ether;