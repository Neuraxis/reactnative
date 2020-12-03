import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
	const [colors, setColors] = useState<Array<string>>([]);

	return (
		<View>
			<Text style={styles.textStyle}>Color Screen</Text>
			<Button
				title="Add Color"
				onPress={() => {
					setColors([...colors, randomRGB()]);
				}}
			/>
			<FlatList
				keyExtractor={item => item}
				data={colors}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>;
				}}
			></FlatList>
		</View>
	);
};

const randomRGB = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}
});

export default ColorScreen;
