import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CallActionBox from '../components/CallActionBox';

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}></View>
      <CallActionBox />
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#7b4e80',
    height: '100%',
  },
  cameraPreview: {
    height: 150,
    borderRadius: 10,
    width: 100,
    position: 'absolute',
    right: 10,
    top: 100,
    backgroundColor: '#ffff6e',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 10,
  },
  PhoneNumber: {
    fontSize: 25,
    color: 'white',
  },
});
