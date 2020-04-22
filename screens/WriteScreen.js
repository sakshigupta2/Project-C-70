import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class WriteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      
    };
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <AppHeader/>
          <TextInput
          style={styles.inputBox}
          placeholder = "Write Your Story Here"
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text} />
          
          
        </View>
      );
    }
  }
   const styles = StyleSheet.create({
  text:{
    marginTop: 20,
    marginBottom: 30,
    color: 'red',
    fontSize: 30,
    
  },
   inputBox: {
    marginTop: 50,
    width: '50%',
    alignSelf: 'center',
    height: 300,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    fontSize: 40,
  },
});