import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({singleMedia, navigation}) => {
  const mediaUrl = 'https://media.mw.metropolia.fi/wbma/uploads/';
  console.log(singleMedia);
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('Single', singleMedia);
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        />
        <View style={styles.textArea}>
          <Text style={styles.title}>{singleMedia.title}</Text>
          <Text style={styles.description}>{singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  picture: {
    width: 100,
    height: '90%',
    flex: 1,
    padding: 2,
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 18,
  },
  textArea: {
    flex: 1,
    padding: 10,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
