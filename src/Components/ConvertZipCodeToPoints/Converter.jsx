/* we can use another libarary from react called "react geocode" or "react-places-autocomplete" or "react-google-places-autocomplete
" or "react-geolocation" or simply we can use google maps api to get the exactly current user loaction*/


const Converter = async (zipcode) => {
    fetch(`https://nominatim.openstreetmap.org/search?postalcode=${zipcode}&format=geocodejson`).then(data => data.json()).then(res => res.features.map(item => {
            console.log(item.geometry.coordinates)
        }));
}
 
Converter(92020);