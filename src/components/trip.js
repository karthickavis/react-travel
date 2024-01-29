import './tripstyle.css';
import TripData from './tripdata';
import Malimg from "../assets/malimg.jpeg"
import Kashmir from "../assets/kashmirimg.jpeg"
import London from "../assets/londonimf.jpeg"
import Aus from "../assets/ausimg.jpeg"

function Trip (){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destination using Google maps.</p>
            <div className="tripcard">
                <TripData
                image={Malimg}
                heading="Trip in Maldives"
               text="The Maldives consists of 1,192 coral islands grouped in a double chain of 26 atolls, that stretch along a length of 871 kilometres (541 miles) north to south, 130 kilometres (81 miles) east to west."
                />

<TripData
                image={Kashmir}
                heading="Trip in kashmir"
               text="The Kashmir valley is one of the top tourist destinations in India.[108] Gulmarg, one of the most popular ski resort destinations in India, is also home to the world's highest green golf course."
                />

<TripData
                image={London}
                heading="Trip in London"
               text="London, also known as Greater London, is one of nine regions of England and the top subdivision covering most of the city's metropolis. The City of London at its core once comprised the whole settlement."
                />
                                <TripData
                image={Aus}
                heading="Trip in Australia"
               text="Australia is a federal parliamentary constitutional monarchy comprising six states and ten territories. Australia's population of nearly 27 million[10] is highly urbanised and heavily concentrated on the eastern seaboard."
                />
            </div>
        </div>
    )
}
export default Trip;