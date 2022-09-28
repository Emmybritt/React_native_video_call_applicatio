import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function handleSignin() {} 
  return (
    // <SafeAreaView>
    <View style={styles.page}>
      <Text style={{textAlign: 'center'}}>LoginScreen</Text>
      <View>
        <TextInput
          value={userName}
          placeholder="Username"
          style={styles.input}
          onChangeText={setUserName}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.button}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
    // </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
  },
  page: {
    padding: 10,
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
});
