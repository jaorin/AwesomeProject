import React, { useState, useEffect } from 'react';
import { View, Dimensions, LogBox  } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fb } from '../db_config';


export default function MapUserScreen({ navigation }) {
    
    const [markers, setMarkers] = useState([]); 

    const readdriver_locationsFirebase = async () => {
        fb.firestore().collection("driver_locations")
            .get().then((querySnapshot) => {
                const Newmarkers = querySnapshot.docs.map(doc => doc.data());
                
                // //WRITE TO ASYNC STORAGE
                // writemarkers(markers);

                //SET STATE
                setMarkers(Newmarkers);                           
            });            
    }
    
    

    useEffect(() => {
        //QUERY DATA FROM FROM FIREBASE & SET MARKERS STATE HERE
        readdriver_locationsFirebase(); 
        LogBox.ignoreLogs(['Setting a timer']); 
    },[]);

    return (
        <View style={{ flex: 1, flexDirection : 'column' }}>
            <View style={{ flex: 1 }}>
                {(() => {
                    //IF MARKERS MORE THAN ZERO
                    if(markers.length > 0){
                        return (
                        <MapView 
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                            }}                     
                            initialRegion={{
                                latitude: markers[0].coords.latitude,
                                longitude: markers[0].coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}                            
                            >                            
                            {markers.map(marker => (
                                <Marker
                                coordinate={marker.coords}
                                title={marker.user_id}
                                key={marker.user_id}
                                //description={marker.description}
                                />
                            ))}
                        </MapView>
                        );
                    }
                })()}
            </View>
        </View>

    );
}
