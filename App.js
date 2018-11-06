import React from 'react';
import {
  View, StatusBar
} from 'react-native';
import {
  createBottomTabNavigator
} from 'react-navigation';
import Search from './components/Search';
import About from './components/About';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo';


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" hidden={false}
          barStyle="light-content" />
        <View style={{ paddingTop: Constants.statusBarHeight }} />
        <Tabs />
      </View>
    );
  }
}

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Search
  },
  About: {
    screen: About
  },
},
  {
    tabBarPosition: 'bottom',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },

  });