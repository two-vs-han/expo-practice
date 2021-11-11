import React, { Component, useState, useEffect} from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default Login = ({navigation}) => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    navigation.setOptions({
        title:"Login",
        headerStyle: {
          backgroundColor: '#ecf0f1',
          shadowColor: "none",
        },
        headerTintColor: "#000",
    })
  },[])

  onLogin = (nav) => {
    Alert.alert('Credentials', `Hi, ${username}`);
    nav.navigate('TimeTableApiCall')
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={this.username}
        onChangeText={(username) => setUsername(username)}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={this.password}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.input}
        onPress={() => {onLogin(navigation)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
