/**
 * Компонент блока "Погода"
 */

const Weather = () => {
	return (
		<div className="weather-block" style={{width: 250}}>
			<a href='#' className="weather-item" style={{textDecoration: 'none'}}>Погода</a>
			<div className="weather-info" style={{ marginTop: 10}}>
				Утром +17,
				<br/>
				днём +20
			</div>
		</div>
	); 
}

export default Weather;