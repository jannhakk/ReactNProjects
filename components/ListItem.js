import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
        <View style={styles.textArea}>
          <Text style={styles.title}>{props.singleMedia.title}</Text>
          <Text style={styles.description}>
            {props.singleMedia.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
};

export default ListItem;
