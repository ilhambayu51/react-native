import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			<Text style={kata.welcome}>{this.props.title}</Text>
		)
	}
}
const kata ={
	welcome: {
		fontSize: 24,
		color: '#f00',
	}
}
export default Judul;