import React from 'react';
import { Alert, StyleSheet, Text, View, Image, Button } from 'react-native';


export default class About extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: "https://www.tunisienumerique.com/wp-content/uploads/meteo14.jpg" }}
          style={{ height: 100, width: 100 }}></Image>
        <Text style={styles.text}>Personal meteo app avec React Native Framework Design by Birkhoff Ak DK</Text>
        <Button
          onPress={() => this.onPressBegin()}
          title="Rechercher une ville"
          color="green"
        />
      </View>
    );
  }

  onPressBegin() {
    this.props.navigation.navigate('Home');
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom:15
  }
});
