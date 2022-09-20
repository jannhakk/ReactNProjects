/* eslint-disable camelcase */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {mediaUrl, apiUrl} from '../utils/variables';
import {Avatar, Card, ListItem, Text, Icon} from '@rneui/themed';
import {Video} from 'expo-av';
import {ActivityIndicator, ScrollView} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import {useTag, useUser} from '../hooks/ApiHooks';

const Single = ({route}) => {
  console.log('Single route', route);
  const {filename, title, description, user_id, media_type} = route.params;
  const [videoRef, setVideoRef] = useState(null);
  const [avatar, setAvatar] = useState('https://placekitten.com/160');
  const [username, setUserName] = useState(null);
  const {getFilesByTag} = useTag();
  const {getUserById} = useUser();

  const fetchAvatar = async () => {
    try {
      const avatarArray = await getFilesByTag('avatar_' + user_id);
      const avatarFile = avatarArray.pop();
      setAvatar(mediaUrl + avatarFile.filename);
      console.log('avatarArray', mediaUrl, avatarFile.filename);
    } catch (error) {
      console.error('fetchAvatar', error.message);
    }
  };

  const fetchUserName = async () => {
    try {
      const usernameArray = await getUserById(user_id);
      // const userIdName = usernameArray.pop();
      setUserName(usernameArray.username);
      console.log(usernameArray.username);
      // console.log('avatarArray', mediaUrl, avatarFile.filename);
    } catch (error) {
      console.error('fetchUsername', error.message);
    }
  };

  const handleVideoRef = (component) => {
    setVideoRef(component);
  };

  const unlock = async () => {
    try {
      await ScreenOrientation.unlockAsync();
    } catch (error) {
      // no error needed
    }
  };

  const lock = async () => {
    try {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    } catch (error) {
      // no error needed
    }
  };

  const showFullscreenVideo = async () => {
    try {
      if (videoRef) await videoRef.presentFullscreenPlayer();
    } catch (error) {
      console.log('fs video', error);
    }
  };

  useEffect(() => {
    fetchAvatar();
    fetchUserName();
    unlock();
    const orientSub = ScreenOrientation.addOrientationChangeListener((evt) => {
      console.log('Orientaatio', evt);
      if (evt.orientationInfo.orientation > 2) {
        // Show fullscreen video
        showFullscreenVideo();
      }
    });

    return () => {
      lock();
      ScreenOrientation.removeOrientationChangeListener(orientSub);
    };
  }, [videoRef]);

  return (
    <ScrollView>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        {media_type === 'image' ? (
          <Card.Image
            source={{uri: mediaUrl + filename}}
            PlaceholderContent={<ActivityIndicator />}
            style={{marginBottom: 12}}
          />
        ) : (
          <Video
            ref={handleVideoRef}
            source={{uri: mediaUrl + filename}}
            style={{width: 300, height: 300}}
            onError={(error) => {
              console.log('Video error:', error);
            }}
            useNativeControls
            resizeMode="cover"
          />
        )}
        <Card.Divider />
        <ListItem>
          <Text>{description}</Text>
        </ListItem>
        <ListItem>
          <Avatar source={{uri: avatar}} />
          <Text>{username}</Text>
        </ListItem>
      </Card>
    </ScrollView>
  );
};

/*
    <Card>
      <Card.Title>{title}</Card.Title>
      {media_type === 'image' ? (
        <Card.Image source={{uri: mediaUrl + filename}} />
      ) : (
        <Video  ref={handleVideoRef} source={{uri: mediaUrl + filename}} style={{width: 300, height: 300}}
        onError={(error) => {
          console.log('Video error:', error);
      )}
      useNativeControls
      resizeMode="cover"
      />
      <ListItem>
        <Icon name="description" />
        <Text>Description: {description}</Text>
      </ListItem>
       <ListItem>
          <Text>{user_id}</Text>
        </ListItem>
    </Card>
  );
};
*/

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
