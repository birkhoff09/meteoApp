import React from 'react';
import {
  StyleSheet,
  TextInput, StatusBar,
  View, Text, Button, ListView
} from 'react-native';
import style from '../assets/styles/style'
import { createStackNavigator } from 'react-navigation'
import Result from './Result'
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Search extends React.Component {

  static navigationOptions = {
    title: 'Rechercher une ville',
  };


  constructor(props) {
    super(props);
    this.state = { ville: 'Lomé' };
  }

  setVille(ville) {
    this.setState(ville);
  }

  submit() {
    this.props.navigation.navigate('Result', { ville: this.state.ville })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.villeContainer} >
          <TextInput style={styles.ville} placeholder="Tapez votre ville"
            placeholderTextColor="#333" underlineColorAndroid="transparent"
            textDecorationLine="none" 
            onChangeText={(ville) => this.setVille({ ville })}
            onSubmitEditing={() => this.submit()}
            value={this.state.ville} />
          <Button
            onPress={() => this.submit()}
            title="Rechercher"
            color="green"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  villeContainer: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  ville: {
    padding: 5,
    height: 40,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    fontSize: 15,
  },
  text: {
    textAlign: 'center'
  },
  meteoContainer: {
    borderColor: '#ddd',
    borderWidth: 2,
  }
});

const navigationOptions = {
  headerStyle: style.header,
  headerPressColorAndroid: style.headerPressColorAndroid,
  headerTitleStyle: style.headerTitle,
  headerBackImage: <Ionicons name='md-arrow-back' size={25} color="#fff" />,
}


export default createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions
  },
  Result: {
    screen: Result,
    navigationOptions
  }
})