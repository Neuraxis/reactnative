import * as Linking from 'expo-linking';

export default {
	prefixes: [Linking.makeUrl('/')],
	config: {
		screens: {
			Home: 'home',
			SplashScreen: 'splashscreen',
			ListScreen: 'listscreen',
			ImageScreen: 'imagescreen',
			CounterScreen: 'counterscreen',
			ColorScreen: 'colorscreen',
			Root: {
				screens: {
					TabOne: {
						screens: {
							TabOneScreen: 'one'
						}
					},
					TabTwo: {
						screens: {
							TabTwoScreen: 'two'
						}
					}
				}
			},
			NotFound: '*'
		}
	}
};
