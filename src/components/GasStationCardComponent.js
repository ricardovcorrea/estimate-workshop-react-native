import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import GasPriceComponent from './GasPriceComponent';
import RateStarsComponent from './RateStarsComponent';

const styles = StyleSheet.create({
    card: {
        height: 200,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 15,
        padding: 15,
        elevation: 2,
        flex: 1,
        flexDirection: 'column'
    },
    priceContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    priceContainerLine: {
        borderRightColor: 'rgba(0,0,0,0.5)',
        borderRightWidth: 2
    },
    priceValueText: {
        fontWeight: '700',
        fontSize: 18,
        color: 'green',
        marginBottom: 10
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    photo: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black'
    },
    infosContainer: {
        flex: 2,
        flexDirection: 'column',
        paddingHorizontal: 10
    }
});

export default class GasStationCardComponent extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        if (this.props.onPress) {
            this.props.onPress(this.props.model)
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.card} onPress={() => { this.onPress() }} disabled={!this.props.onPress} activeOpacity={0.7}>
                <View style={styles.containerRow}>
                    <View style={styles.containerRow}>
                        <Image source={this.props.model.image ? { uri: this.props.model.image } : require('../assets/images/placeholder.png')} resizeMode={'cover'} style={styles.photo} />
                    </View>
                    <View style={styles.infosContainer}>
                        <Text style={{ fontWeight: '700', marginBottom: 10 }}>{this.props.model.name}</Text>
                        <Text style={{ marginBottom: 10 }} numberOfLines={1}>{this.props.model.address}</Text>
                        <View style={{ flexDirection: 'row'}}>
                            <RateStarsComponent rateCount={this.props.model.rateCount} rate={this.props.model.rate} readOnly />
                        </View>
                    </View>
                </View>
                <GasPriceComponent
                    gasolinePrice={this.props.model.prices ? this.props.model.prices.gasolinePrice : null}
                    alchoolPrice={this.props.model.prices ? this.props.model.prices.alchoolPrice : null}
                    gnvPrice={this.props.model.prices ? this.props.model.prices.gnvPrice : null} />
            </TouchableOpacity>
        );
    }

}

