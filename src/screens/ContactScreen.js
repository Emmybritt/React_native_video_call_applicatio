import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import contacts from '../VideoCallAssets/data/contacts.json';
// import {useNavigation} from '@react-naviga'

const ContactScreen = ({navigation}) => {
  const [searchTerm, setsearchTerm] = useState('');
  const [filteredContact, setFilteredContact] = useState(contacts);

  useEffect(() => {
    const newContacts = contacts.filter(contact =>
      contact.user_display_name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()),
    );
    setFilteredContact(newContacts);
  }, [searchTerm]);

  function callUserItem(user) {
    console.log(user);
    navigation.navigate('Calling', user);
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.page}>
        <Text>ContactScreen</Text>
        <TextInput
          value={searchTerm}
          onChangeText={setsearchTerm}
          style={styles.searchInput}
          placeholder="Search..."
        />
        <FlatList
          data={filteredContact}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                callUserItem(item);
              }}>
              <Text style={styles.contactName}>{item.user_display_name}</Text>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
});
