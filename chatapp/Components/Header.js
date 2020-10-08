import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const Header = () => {
  return (

  <View style={styles.header}>
         <Text style={styles.text}> Chatapp</Text>
  </View>

  );
};

const styles =StyleSheet.create(
	{
		header: {
			height: 60,
			padding: 15,
			backgroundColor: '#373a40',
		},

		text:{
			color: "#19d3da",
			fontSize: 23,
			textAlign: 'left',
		}
	});


export default Header;
