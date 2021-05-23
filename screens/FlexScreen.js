import * as React from 'react';
import { View, Text, Button ,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FlexScreen({ navigation }) {
    

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex : 1 }}>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex1Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex1</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex2Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex2</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex3Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex3</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex4Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex4</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex5Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex5</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex6Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex6</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex7Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex7</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex8Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex8</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex9Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex9</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex10Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex10</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex11Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex11</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Ex12Screen') } >                    
                    <Text style={{ padding : 10 }}>Ex12</Text>
                </TouchableOpacity>
            </View> 
                                  
        </View>
        
    );
}
