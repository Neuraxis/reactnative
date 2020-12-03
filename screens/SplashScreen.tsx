import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SplashScreen = () => {
	return (
		<View>
			<Text style={styles.textStyle}>Splash Screen</Text>
			<Text>Splash Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}
});

export default SplashScreen;
