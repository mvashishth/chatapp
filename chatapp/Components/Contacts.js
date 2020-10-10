{/*import React from 'react';
import { FlatList, StyleSheet, Text, ScrollView, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

const styles = StyleSheet.create({
  container: {
   paddingTop: 0,
   paddingBottom:100,
  },
  item: {
    padding: 20,
    fontSize: 18,
    backgroundColor: "#373a40",
    color: "#19d3da",
  },
});

const FlatListBasics = () => {
    var Data=[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Mayur'},
          {key: '123'},
          {key: 'Japan'},
          {key: 'Russia'},
          {key: 'Belarus'},
          


        ];

    var zeta={key: 'Wings'};

  
    var Data2=Data;
    Data2.push(zeta);
    console.log(Data2);

    var zeta={key: ''};
    var Data2=Data;
    Data2.push(zeta);



  return (

    <ScrollView style={styles.container}>
      <FlatList
        data={Data2}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </ScrollView>
  );
}

export default FlatListBasics;
*/}

import React from "react";
import { StyleSheet, Text, View, SafeAreaView, PermissionsAndroid, Button } from "react-native";

const requestCameraPermission = async () => {
  try {

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",

      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const FlatListBasics = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 60,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default FlatListBasics;


