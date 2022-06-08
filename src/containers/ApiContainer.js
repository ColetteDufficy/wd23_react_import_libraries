import React, { useEffect, useState } from 'react';
import ApiDataSelector from '../components/ApiSelector';
import ApiDetails from '../components/ApiDetails';


const ApiDataContainer = () => {

    const [apiDatas, setApiDatas] = useState({})


    const getApiData = () => { 
        console.log("getting api data");
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=TSCO.LON&apikey=demo")
        .then( response => response.json() )
        .then( data => setApiDatas(data)) 
    }

        
    useEffect(() => {
        getApiData(); //calling the function that is defined above
    }, [])
    





    return ( 
        <>
        <h3>I am the api data container</h3>
        <ApiDataSelector />
        <ApiDetails />
        </>
     );
}
 
export default ApiDataContainer;