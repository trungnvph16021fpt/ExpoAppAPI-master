import {Button, FlatList, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [data, setData] = useState([]);
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [address, setAddress] = useState();

    return (
        <View style={styles.container}>

            <TextInput style={{ height : 40,width : 100}} placeholder={'Enter name'} onChangeText={(data) => {
                setName(data)
            }}/>
            <TextInput style={{ height : 40,width : 100}} placeholder={'Enter age'} onChangeText={(data) => {
                setAge(data)
            }}/>
            <TextInput style={{ height : 40,width : 100}} placeholder={'Enter address'} onChangeText={(data) => {
                setAddress(data)
            }}/>
            <Button title={'Save Student'} onPress={()=>{
                // khoi tao http post len server
                // bao thanh cong va cap nhat len Flatlist
            }} />

            <FlatList style={{flex: 1}} data={data} renderItem={({item}) => {
                return (<View>
                    <Text>{item.name}</Text>
                    <Text>{item.address}</Text>
                    <Text>===============================</Text>
                </View>);
            }}/>
            <Button title='Load' onPress={() => {
                // viet request toi website tai day
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                fetch("https://lab78new.herokuapp.com/getUsers", requestOptions)
                    .then(response => response.json())
                    .then(result => setData(result))
                    .catch(error => setData(error.message));
            }}/>
            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
