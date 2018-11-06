import React from 'react';
import {
  StyleSheet, Text,
  View, TouchableHighlight,
  ActivityIndicator, FlatList
} from 'react-native';
import WeatherRow from './weather/Row'
import WeatherService from '../services/WeatherService'


export default class Result extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Resultat / ${navigation.state.params.ville}`,
    }
  };


  constructor(props) {
    super(props);
    this.state = {
      ville: this.props.navigation.state.params.ville,
      report: null,
      error: false,
      errormsg: null
    };
    this.fetchWeather();
  }

  fetchWeather() {
    new WeatherService().getWeatherByCity(this.state.ville).then((response) => {
      this.setState({ report: response.data, error: false })
    }).catch((error) => {
      this.setState({ error: true, errormsg: error })
    });
  }

  _onPress(item) {
    console.log(item);
  }
  render() {
    if (this.state.error) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <Text>La ville saisie est incorrecte. Veuillez saisir le nom d'une ville correcte.</Text>
        </View>
      )
    } else if (this.state.report === null) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="green" />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View>
            <FlatList
              data={this.state.report.list}
              renderItem={({ item, index, separators }) =>
                <TouchableHighlight
                  underlayColor="white"
                  onPress={() => this._onPress(item)}
                  onShowUnderlay={separators.highlight}
                  onHideUnderlay={separators.unhighlight}>
                  <WeatherRow day={item} index={parseInt(index)}>{item.main.temp}</WeatherRow>
                </TouchableHighlight>
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

