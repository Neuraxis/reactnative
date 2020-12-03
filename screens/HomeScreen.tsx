import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props: any) => {
	console.log('props', props);
	return (
		<View>
			<Text style={styles.textStyle}>Home Screen</Text>
			<Button title="Splash Screen" onPress={() => props.navigation.navigate('SplashScreen')} />
			<TouchableOpacity onPress={() => props.navigation.navigate('ListScreen')}>
				<Text>List Screen</Text>
			</TouchableOpacity>
			<Button title="Image Screen" onPress={() => props.navigation.navigate('ImageScreen')} />
			<Button title="Counter Screen" onPress={() => props.navigation.navigate('CounterScreen')} />
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 15
	}
});

export default HomeScreen;
