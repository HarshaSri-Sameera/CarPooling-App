import './Driver.css';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { useState } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { arrowRedoOutline } from 'ionicons/icons';
import customers from '../../assets/listOfCustomers.ts';
import { Link } from 'react-router-dom';

export const Driver = () => {
    const [CurrentLocation, setCurrentLocation] = useState("");

    const getCurrent = () => {
        const success = (position) => {
            // const lat = 17.319632;
            // const long = 81.907016;
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;

            fetch(geoApiUrl)
                .then((res) => res.json())
                .then((data) => {
                    setCurrentLocation(data.city);
                    console.log(data);
                });
        } 
        const error = () => {
            setCurrentLocation("Unable to retrieve your location");
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }  

    return (
        <>
            <IonGrid className="head">
                <IonRow>
                    <IonCol className="headTittle">
                        Your Location: &nbsp; 
                        <button onClick={getCurrent}>GET</button> &nbsp; 
                        <output>{CurrentLocation}</output>
                    </IonCol>
                </IonRow>
            </IonGrid>

            <IonGrid className="body">
                <IonRow>
                    <IonCol className="bodyTittle">List of Customers near your location: &nbsp; </IonCol>  
                </IonRow>

                <div>
                    {customers.map((props) => {
                        return (
                            <IonCard className="card">
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                    <IonRow>
                                        <IonCol style={{color: "#000"}}> 
                                            {props.name}
                                        </IonCol>  
                                        <IonCol style={{textAlign: "right"}}> 
                                            <Link to={`/customer-maps/${props.id}`}> 
                                                <button style={{color:"#000", backgroundColor: "transparent"}}>
                                                    Open 
                                                    <IonIcon icon={arrowRedoOutline} />
                                                </button>
                                            </Link> 
                                        </IonCol> 
                                    </IonRow>
                                        
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        )
                    })}
                </div>
            </IonGrid>
        </>
        
    )
}

export default Driver;