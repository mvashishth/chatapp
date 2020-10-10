import React from 'react';
import { FlatList, StyleSheet, Text, ScrollView } from 'react-native';
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
    console.log(Data2);

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