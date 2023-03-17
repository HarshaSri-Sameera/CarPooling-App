import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterOutlet } from '@ionic/react';
import Driver from '../components/driver/Driver';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Driver's Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Driver/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
