import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			<Text style={kata.welcome}>Data Diri</Text>
		)
	}
}
const kata ={
	welcome: {
		fontSize: 24,
		color: '#f00',
		TextAlign: 'center',
		backgroundColor: '#00f',
	}
}
export default Judul;