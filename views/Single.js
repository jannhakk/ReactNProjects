import React from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Card, Icon, ListItem, Text} from '@rneui/themed';

const Single = ({route}) => {
  console.log('Single route', route);
  const {filename, title, description} = route.params;
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Image source={{uri: mediaUrl + filename}} />
      <ListItem>
        <Icon name="description" />
        <Text>Description: {description}</Text>
      </ListItem>
    </Card>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
/*
//import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';


 <SafeAreaView style={styles.container}>
   <Text>{title}</Text>
   <Image
     source={{uri: mediaUrl + filename}}
     style={{width: 200, height: 200}}
   />
  </SafeAreaView>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});
*/
