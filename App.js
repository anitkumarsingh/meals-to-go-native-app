import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
			<View style={{ padding: 16, backgroundColor: 'green' }}>
				<Text>Search Bar</Text>
			</View>
			<View style={{ flex: 1, padding: 16, backgroundColor: 'blue' }}>
				<Text>Search Items</Text>
			</View>
			<ExpoStatusBar style='auto' />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default App;
