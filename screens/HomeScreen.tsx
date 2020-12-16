import { Permissions } from 'expo';
import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Subscription } from '@unimodules/core';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false
	})
});

const HomeScreen = (props: any) => {


	const [expoPushToken, setExpoPushToken] = useState<any>('');
	const [notification, setNotification] = useState<any>(false);
	const notificationListener = useRef<Subscription>();
	const responseListener = useRef<Subscription>();

	const registerForPushNotificationsAsync = async () => {
		let token;
		// if (Constants.isDevice) {
		// 	const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
		// 	let finalStatus = existingStatus;
		// 	if (existingStatus !== 'granted') {
		// 		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		// 		finalStatus = status;
		// 	}
		// 	if (finalStatus !== 'granted') {
		// 		alert('Failed to get push token for push notification!');
		// 		return;
		// 	}
			token = (await Notifications.getExpoPushTokenAsync()).data;
		// 	console.log(token);
		// } else {
		// 	alert('Must use physical device for Push Notifications');
		// }

		if (Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C'
			});
		}

		return token;
	};

	useEffect(() => {
		registerForPushNotificationsAsync().then(token => {
			console.log('token', token)
			setExpoPushToken(token)});

		notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
			setNotification(notification);
		});

		responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
			console.log(response);
		});

		return () => {
			if (notificationListener.current) {
				Notifications.removeNotificationSubscription(notificationListener.current);
			}
			if (responseListener.current) {
				Notifications.removeNotificationSubscription(responseListener.current);
			}
		};
	}, []);

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'space-around'
			}}
		>
			<Text>Your expo push token: {expoPushToken}</Text>
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Text>Title: {notification && notification.request.content.title} </Text>
				<Text>Body: {notification && notification.request.content.body}</Text>
				<Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
			</View>
			<Button
				title="Press to schedule a notification"
				onPress={async () => {
					// await schedulePushNotification();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 15
	}
});

export default HomeScreen;
