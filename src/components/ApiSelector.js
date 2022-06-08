import React from 'react';

const ApiDataSelector = ( {listOfDates} ) => {  // ineed to return a list of strings whoch are the dates in this case

    const options = listOfDates.map((eachDate) => {
        return (
            <option key={eachDate} value={eachDate}> {eachDate} </option>
        )
    })
    

    return (
        <>
        <p>Api selctor goes here</p>
        <select>
            <option value="" disabled selected> Choose your date</option>
            {options}
        </select>
        </>
    )
}

export default ApiDataSelector;