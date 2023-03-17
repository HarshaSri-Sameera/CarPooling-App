import customers from '../../assets/listOfCustomers.ts';
import { useParams } from 'react-router-dom';
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from 'react';

function CustomerMap() {
    const params = useParams();
    let person = "";
    let latitude = 0;
    let longitude = 0;
    let place = "";
    const urlID = params.id;

    function findNameById(id) {
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].id == id) {
                latitude = customers[i].latitude;
                longitude = customers[i].longitude;
                place = customers[i].place;
                return customers[i].name;
            }
        }
    }

    person = findNameById(urlID);

    useEffect(() => {
        const loader = new Loader({
          apiKey: "AIzaSyDi9B-YRSLmc_fiZO7zGGHtcfpoi6QhGsw",
          version: "weekly",
    });

    loader.load().then(() => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        });

    const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        },
        });
    });
    }, [latitude, longitude]);

    return (
        <div>
            <div id="map" style={{ height: "500px" }}></div>;
            latitude: {latitude},
            longitude: {longitude},
            person name: {person},
            Location: {place}
        </div>
    )
}

export default CustomerMap;
