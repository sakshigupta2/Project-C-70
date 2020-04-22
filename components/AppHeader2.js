import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class AppHeader2 extends React.Component{
  render(){
    return(
      <View>
        <Image 
            source={require("../assets/bed4.jpg")}
            style={{width:700, height:250, justifyContent: 'center'}}
          />
      </View>
    );
  }
}


export default AppHeader2;