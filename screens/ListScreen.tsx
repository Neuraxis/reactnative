import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
	const data = [
		{ name: 'Test1' },
		{ name: 'Test2' },
		{ name: 'Test3' },
		{ name: 'Test4' },
		{ name: 'Test5' },
		{ name: 'Test6' },
		{ name: 'Test7' },
		{ name: 'Test8' },
		{ name: 'Test9' },
		{ name: 'Test10' },
		{ name: 'Test11' },
		{ name: 'Test12' }
	];

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			data={data}
			keyExtractor={item => item.name}
			renderItem={({ item, index }) => {
				return <Text style={styles.textStyle}>{item.name}</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 15,
		marginVertical: 50
	}
});

export default ListScreen;
