import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

interface ImageDetailProps {
	title: string;
	imageSource: any;
}

const ImageDetail = (props: ImageDetailProps) => {
	return (
		<View>
			<Image source={props.imageSource} style={{ width: 250, height: 150 }} />
			<Text style={styles.textStyle}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}
});

export default ImageDetail;
