import {StyleSheet, View, Platform} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';

const App = () => {
  return (
    <>
      <View style={styles.droidSafeArea}>
        <List />
      </View>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;
