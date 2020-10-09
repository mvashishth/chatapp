import React from 'react';
import { FlatList, StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
   paddingTop: 0,
   paddingBottom:10,
  },
  item: {
    padding: 20,
    fontSize: 18,
    backgroundColor: "#373a40",
    color: "#19d3da",
  },
});

const FlatListBasics = () => {
    const Data=[
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
          {key: 'Belarus'}


        ];
  return (

    <ScrollView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </ScrollView>
  );
}

export default FlatListBasics;