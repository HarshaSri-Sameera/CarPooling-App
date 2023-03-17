import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Customer from '../components/customer/Customer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customer's Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Customer />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
