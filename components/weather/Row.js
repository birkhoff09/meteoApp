import React from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';
import { Font } from 'expo';

moment.locale('fr');

export default class Row extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
        };
        this.componentDidMount();
    }

    async  componentDidMount() {
        await Font.loadAsync({
            'roboto-light': require('../../assets/fonts/roboto/Roboto-Light.ttf'),
            'roboto-black': require('../../assets/fonts/roboto/Roboto-Black.ttf'),
            'roboto-italic': require('../../assets/fonts/roboto/Roboto-Italic.ttf'),
            'roboto-thin': require('../../assets/fonts/roboto/Roboto-Thin.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number

    }

    icon(size = 50) {
        return (
            <Image
                style={{ width: size, height: size }}
                source={{ uri: `https://openweathermap.org/img/w/${this.props.day.weather[0].icon}.png` }}
            />
        )
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd');
        return day.toUpperCase();
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        return date;
    }

    hour() {
        let hour = moment(this.props.day.dt * 1000).format('HH:mm');
        return hour;
    }

    render() {
        if (this.state.fontLoaded) {
            if (this.props.index === 0) {
                return (
                    <View style={[styles.view, styles.firstView]}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View>
                                <Text style={[styles.date, styles.temp]}>{this.day()} {this.date()}</Text>
                                <Text style={[styles.date]}>{this.hour()}</Text>
                                {this.icon(90)}
                            </View>
                            
                        </View>
                        <Text style={styles.temp}>
                            {Math.round(this.props.day.main.temp)} °C
                        </Text>
                    </View>
                )
            } else {
                return (
                    <View style={styles.view}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            {this.icon()}
                            <View>
                                <Text style={[styles.date, styles.temp]}>{this.day()} {this.date()}</Text>
                                <Text style={[styles.date, styles.temp]}>{this.hour()}</Text>
                            </View>
                        </View>
                        <Text style={styles.temp}>
                            {Math.round(this.props.day.main.temp)} °C
            </Text>
                    </View>
                )
            }
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#9BD770',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    firstView: {
        backgroundColor: '#EBF7E3',
    },
    text: {
        fontFamily: 'roboto-light'
    },
    date: {
        color: 'green',
    },
    temp: {
        color: 'green',
        fontWeight: "bold",
        fontFamily: 'roboto-italic'
    }
})