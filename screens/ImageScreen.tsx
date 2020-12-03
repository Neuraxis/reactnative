import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail title="Forest" imageSource={require('../assets/images/forest.jpg')} />
			<ImageDetail title="Mountain"  imageSource={require('../assets/images/mountain.jpg')}/>
			<ImageDetail title="Beach"  imageSource={require('../assets/images/beach.jpg')}/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}
});

export default ImageScreen;
