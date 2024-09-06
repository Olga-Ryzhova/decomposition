/**
 * Общий информационный блок
 */

import './informationBlock.css'
import Weather from "./weather/Weather";
import Map from "./map/map";
import Ether from "./ether/ether";
import Visited from "./visited/Visited";
import TvListings from "./tv-listings/TvListings";

const InformationBlock = () => {
    return <div className="information-block">
        <Weather/>
        <Map/>
        <Ether/>
        <Visited/>
        <TvListings/>
    </div>; 
}

export default InformationBlock;