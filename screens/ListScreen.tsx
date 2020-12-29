import React from 'react';
import { ReactNativeAD, ADLoginView } from 'react-native-azure-ad';

const CLIENT_ID = '0579b0c4-c92c-4096-a8ff-436068585593';

const ListScreen = () => {
	const onLoginSuccess = (credentials: any) => {
		console.log('onLoginSuccess');
		console.log(credentials);
		// use credentials.access_token..
	};

	const b2cLogin = new ReactNativeAD({
		client_id: CLIENT_ID,
		redirect_url : 'http://localhost:8080',
		authority_host : 'https://login.microsoftonline.com/2864f69d-77c3-4fbe-bbc0-97502052391a/oauth2/authorize',
		tenant: '2864f69d-77c3-4fbe-bbc0-97502052391a',
		// client_secret: '/Xo8WBi6jzSxKDVR4drqm84yr9iU=',
		// user_flow_policy: 'B2C_1_signupsignin',
		// token_uri: 'https://login.microsoftonline.com/2864f69d-77c3-4fbe-bbc0-97502052391a/v2.0',
		// authority_host: 'https://login.microsoftonline.com',
		redirect_uri: 'msauth://com.angloamerican.digitalscheduler/Xo8WBi6jzSxKDVR4drqm84yr9iU%3D',
		prompt: 'login',
		resources: ['https://graph.microsoft.com']
	});

	return <ADLoginView context={b2cLogin} onSuccess={onLoginSuccess} />;
};

export default ListScreen;
