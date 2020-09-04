import React from 'react';
 import { FlatList, StyleSheet, Text, View } from 'react-native';
 import { setStatusBarBackgroundColor } from 'expo-status-bar';


const DATA = [
{ title: 'Flight1', source:'Kentucky', destination:'Chicago', totalPassengers: '100 passengers', departure:'Departing' , id: '1'},
{ title: 'Flight2', source:'New York', destination:'Los Angeles', totalPassengers: '300 passengers', departure: 'Arriving',id: '2'},
{ title: 'Flight3',source:'Los Vegas', destination:' Dallas', totalPassengers: '260 passengers', departure:"Arriving", id: '3'},
{ title: 'Flight4',source:'Chicago', destination:' Houston', totalPassengers: '550 passengers', departure:"Arriving", id: '4'},

];


const App = () => {
  return (
    <View style={styles.container}>

      <Text style = {styles.titleText}> Flight Status</Text>

      <FlatList
      data ={DATA}

      renderItem = {({item}) =><Text style = {styles.textStyle}> {item.title}, {item.source}  to  {item.destination}  {'\n'} {item.totalPassengers} {'\n'} {item.departure} </Text>}



      keyExtractor = {item => item.id}
        
      />
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   fontSize:20,
   textAlign:'center',
   justifyContent:'center',
   alignContent:'center'
   
  },
  textStyle: {
    flex: 1,
    paddingTop: 22,
    padding:30,
    fontSize:20,
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: '#ADD8E6',
    borderWidth: 3

  },
  titleText:{

    fontWeight: 'bold',
    fontSize: 32,
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    paddingTop:22
    
}
  


});









