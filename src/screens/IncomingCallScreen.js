import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IncomingCallScreen = () => {
  function onDecline() {
    Alert.alert('Declined value', 'This is the message for the delined alert');
  }
  function onAccept() {
    Alert.alert('Accepted value', 'This is the message for the Accepted alert');
  }
  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.bg}
        resizeMode="cover"
        source={{
          uri: 'https://media.idownloadblog.com/wp-content/uploads/2020/07/iOS-14-promotional-gradients-iphone-wallpaper-ar72014-idownloadblog-1.jpeg',
        }}>
        <Text style={styles.name}>Emmy Britt</Text>
        <Text style={styles.PhoneNumber}>Finder Video...</Text>
        <View style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconsContainer}>
            <Ionicons name="alarm" color="white" size={30} />
            <Text style={styles.iconTxt}>Remind me</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Entypo name="message" color="white" size={30} />
            <Text style={styles.iconTxt}>Message</Text>
          </View>
        </View>

        <View style={[styles.row, {marginBottom: 50}]}>
          {/* Decline Button */}
          <Pressable onPress={onDecline} style={styles.iconsContainer}>
            <View style={styles.iconButtonContainer}>
              <Feather name="x" color="white" size={40} />
            </View>
            <Text style={styles.iconTxt}>Decline</Text>
          </Pressable>
          {/* Accept Button */}
          <Pressable onPress={onAccept} style={styles.iconsContainer}>
            <View
              style={[
                styles.iconButtonContainer,
                {backgroundColor: 'darkblue'},
              ]}>
              <AntDesign name="check" color="white" size={40} />
            </View>
            <Text style={styles.iconTxt}>Accept</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IncomingCallScreen;

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 8,
  },
  PhoneNumber: {
    fontSize: 18,
    color: 'white',
  },
  bg: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconsContainer: {
    alignItems: 'center',
  },
  iconTxt: {
    color: 'white',
    marginTop: 10,
  },
  iconButtonContainer: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 15,
    margin: 10,
  },
});
