import {StyleSheet, View, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallActionBox = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setisMicOn] = useState(true);

  function onReverseCamera() {}
  function onToggleCamera() {
    setIsCameraOn(currentValue => !currentValue);
  }
  function onToggleMicrophone() {
    setisMicOn(currentValue => !currentValue);
  }
  function onHangUp() {
    Alert.alert('Hang up call', 'You have successfully hanged up the call');
  }

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name="ios-camera-reverse" size={30} color="white" />
      </Pressable>
      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <Feather
          name={isCameraOn ? 'camera' : 'camera-off'}
          size={30}
          color="white"
        />
      </Pressable>
      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <FontAwesome
          name={isMicOn ? 'microphone' : 'microphone-slash'}
          size={30}
          color="white"
        />
      </Pressable>
      <Pressable
        onPress={onHangUp}
        style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MaterialCommunityIcons
          name="phone-hangup-outline"
          size={30}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default CallActionBox;

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});
