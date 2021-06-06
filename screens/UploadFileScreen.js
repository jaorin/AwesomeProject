import React , { useState, useEffect, useContext  }from 'react';
import { View, Text, TouchableOpacity, Image, Button , LogBox , Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { fb } from '../db_config';


export default function UploadFileScreen({ navigation }) { 

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null); 

    useEffect(() => {                        
        (async () => {             
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                console.log('Sorry, we need camera roll permissions to make this work!');
            }
            const { status2 } = await ImagePicker.requestCameraPermissionsAsync();
            if (status2 !== 'granted') {
               console.log('Sorry, we need camera permissions to make this work!');
            }             
        })();
            LogBox.ignoreLogs(['Setting a timer']);         
    },[]); 
    
    const [modalVisible, setModalVisible] = useState(false);

    const pickImage = async (mode) => {
        let result = null;
        switch(mode){
            case "camera" : 
                result = await ImagePicker.launchCameraAsync();
                break;
            case "library" : 
                result = await ImagePicker.launchImageLibraryAsync();
                break;
        }           
        console.log(result);    
        if (!result.cancelled) {
            console.log(result);
            //SPLIT STRING WITH "/" 
            //GET LAST ITEM IN ARRAY BY POP()
            result.filename = result.uri.split('/').pop();
            setImage(result);
            setUrl(null);
            uploadFileFirebase(result);
        }
    };

    const uploadFileFirebase = async (result) => {        
        console.log("uri : ", result.uri);
        const response = await fetch(result.uri);
        const blob = await response.blob();
        
        //UPLOAD TO FIREBASE
        // Create a reference to 'xxxxxxx.jpg'
        let ref = fb.storage().ref().child(result.filename);
        ref.put(blob)
            .then((snapshot)=>{
                console.log("Upload Success : ");
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('Download URL : ', downloadURL);
                    //UPDATE STATE URL
                    setUrl(downloadURL);
                });
            })
            .catch((error)=>{ console.error("Error : ", error); });
    };



    return (
        <View  style={{ flex: 1, justifyContent : 'center'}}>            
            
            <Text style={{fontSize: 20, textAlign: 'center'}}>
                React Native Upload File Screen
            </Text>            
            <TouchableOpacity  style={{ margin : 10, alignItems : 'center'}}
            onPress={() => { setModalVisible(true); }}  >
                
                <Ionicons name="md-images" size={50} color="#848484" />
                <Text>Select Image</Text>
            </TouchableOpacity>            
            <View style={{ alignItems : 'center'}}>
                <Text>{ image ? image.filename : "" }</Text>
                {(() => {
                   if(url != null){
                       return (

                <Image 
                    source={{uri: url }} 
                    style={{width: 100, height: 100}} 
                    resizeMode="cover" 
                    />
                              );
                                  }                   
                })() }
            </View>
            <View style={{ marginHorizontal : 10 ,marginTop : 100}}>
                <Button title="Save in Todo"  />
            </View>

            <Modal transparent={true} visible={modalVisible} onRequestClose={()=>{ setModalVisible(false); }} >
                <TouchableOpacity  style={{ flex: 1, justifyContent: "center",backgroundColor: 'rgba(0,0,0,0.5)' }} onPress={() => {setModalVisible(false)}} >                     
                    <View style={{ margin: 20, backgroundColor: "white", padding : 15 }}>
                        <TouchableOpacity  style={{ padding  : 15 }}
                            onPress={() => { pickImage("camera"); setModalVisible(false);  }}    >                            
                            <Text>Take Photo ...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{ padding : 15 }}  
                            onPress={() => { pickImage("library"); setModalVisible(false);  }}  >
                            <Text>Select Photo On Phone ...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{ padding : 15 }} onPress={()=>{ setModalVisible(false); }} >
                            <Text>Remove Photo</Text>
                        </TouchableOpacity>
                    </View>                               
                </TouchableOpacity>
            </Modal>


        </View>
    );
}
