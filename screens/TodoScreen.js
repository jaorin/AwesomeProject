import React , { useState } from 'react';
import { View, FlatList , TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TodoItem  from '../components/TodoItem';
export default function TodoScreen({ navigation }) {  
    
    const [todos , setTodos] = useState(
        [
            { _id : '1' , completed : false,  title : "exercise @ 7.00" },
            { _id : '2' , completed : false,  title : "meeting @ 9.00"},
            { _id : '3' , completed : false,  title : "go to cinema @ 19.00"},
        ]     
    );
    const onCreate = () => {
        let new_data = {
            _id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title : "", //Empty String
            completed : false,
        };
        //CLONE ARRAY
        let t = [...todos];
        //APPEND NEW DATA INTO ARRAY
        t.push(new_data);     
        //UPDATE STATE
        setTodos(t);               
    };

    return (
        <View style={{ flex : 1 }}>  
         <FlatList 
                style={{ marginTop : 15 }}
                data={todos}
                keyExtractor={item => item._id}
                renderItem={ ({ item }) => {
                        return (
                            <TodoItem  item={item}  />                            
                        );
                    }      
                }
                />
            <TouchableOpacity
            onPress={onCreate}                
                style={{
                    
                    backgroundColor: "lightblue" ,
                    padding : 10,
                    width : 50,
                    height : 50,
                    alignItems : "center",
                    alignContent : "center",
                    borderRadius:100,
                    position : 'absolute'  ,
                    right : 10,
                    bottom : 10,
                }}
                >
                <Ionicons name='md-add' size={26} />
            </TouchableOpacity>
        </View>
    );
}
