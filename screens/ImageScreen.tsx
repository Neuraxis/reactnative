import React, { useState } from 'react';
import { Text, StyleSheet, View, Alert, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';
// import { LoginView, adService } from 'ad-b2c-react-native';
import * as SecureStore from 'expo-secure-store';

const ImageScreen = () => {
	const [loginInfo, setLoginInfo] = useState();

	const onLogin = () => {
		Alert.prompt('Logged In');
		console.log('Login');
	};

	const onFail = (reason: any) => {
		console.log('Fail', reason);
		Alert.alert(reason);
	};

	const spinner = () => {
		console.log('Spinner');
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	};

	const getToken = async () => {
		// const test = await adService.fetchAndSetTokenAsync()
		// const tokenResult = await adService.getAccessTokenAsync();
		// console.log('tokenResult', tokenResult);
	};

	return (
	
			// <LoginView
			// 	appId="0579b0c4-c92c-4096-a8ff-436068585593"
			// 	redirectURI="msauth://com.angloamerican.digitalscheduler/Xo8WBi6jzSxKDVR4drqm84yr9iU%3D"
			// 	tenant="AzureADMyOrg"
			// 	loginPolicy="B2C_1_SignUpSignIn"
			// 	passwordResetPolicy="B2C_1_PasswordReset"
			// 	profileEditPolicy="B2C_1_ProfileEdit"
			// 	onSuccess={onLogin}
			// 	onFail={onFail}
			// 	secureStore={SecureStore}
			// 	renderLoading={spinner}
			// />
			<View></View>

	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}
});

export default ImageScreen;
