/**
 * Компонент блока "Карта"
 */

const Map = () => {
    return (
        <div className="map-block" style={{width: 250}}>
            <a href='#' className="map-item" style={{textDecoration: 'none'}}>Карта</a>
            <div className="map-info" style={{ marginTop: 10}}>Расписания</div>
        </div>
    ); 
}

export default Map;