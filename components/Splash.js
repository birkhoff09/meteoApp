import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class Splash extends React.Component {
  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>Personal meteo app avec React Native Framework</Text>
        <Image source={{uri:"https://www.tunisienumerique.com/wp-content/uploads/meteo14.jpg"}} 
        style={ {height:100, width:100}}></Image>
      </View>
    );
  }

  // async componentDidMount(){
  //   await Font.loadAsync({
  //     'roboto': require('../assets/fonts/Roboto-Bold.ttf'),
  //   });
  //   this.setState({fontLoaded: true});
  // };

  // state = {
  //   fondLoaded: false
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
    // fontFamily: 'roboto',
  }
});
