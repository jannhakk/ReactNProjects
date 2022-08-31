import {StatusBar} from 'expo-status-bar';
import {Keyboard, TouchableOpacity} from 'react-native';
import {MainProvider} from './contexts/MainContext';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <>
      <MainProvider>
        <TouchableOpacity
          onPress={() => Keyboard.dismiss()}
          style={{flex: 1}}
          activeOpacity={1}
        >
          <Navigator></Navigator>
        </TouchableOpacity>
      </MainProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
