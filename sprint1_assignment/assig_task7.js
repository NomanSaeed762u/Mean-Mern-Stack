function getLocation(loca){                            //pass parameter to function
    const {city,state,country}=loca;                   // district the object to three differnt variables
    console.log(`${city}, ${state}, ${country}`)       //console the variables
    // console.log(state)
    // console.log(country)

}
const location={                                      //object with differnt properties
    city : 'Peshawar',
    state: 'KPK',
    country: 'Pakistan'
}
getLocation(location)                               //call a function and pass arguments
