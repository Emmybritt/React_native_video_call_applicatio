import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CallActionBox from '../components/CallActionBox';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CallingScreen = ({navigation, route}) => {
  const data = route.params;
  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButtn}>
        <Ionicons name="chevron-back" color="white" size={30} />
      </Pressable>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{data.user_display_name}</Text>
        <Text style={styles.PhoneNumber}>ringing +234 701 658 973</Text>
      </View>
      <CallActionBox />
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#7b4e80',
    height: '100%',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  PhoneNumber: {
    fontSize: 25,
    color: 'white',
  },
  backButtn: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 3,
  },
});
