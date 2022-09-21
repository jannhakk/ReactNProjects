import {StyleSheet, View, Platform} from 'react-native';
import PropTypes from 'prop-types';

import List from '../components/List';

const MyFiles = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.droidSafeArea}>
      <List navigation={navigation} myFilesOnly={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
