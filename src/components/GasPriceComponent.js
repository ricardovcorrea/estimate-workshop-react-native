import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    priceContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    priceContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    priceContainerLine: {
        borderRightColor: 'rgba(0,0,0,0.5)',
        borderRightWidth: 2,
        height: '70%'
        
    },
    priceValueText: {
        fontWeight: '700',
        fontSize: 18,
        color: 'green',
        marginBottom: 10
    },
    containerRow: {
        flexDirection: 'row'
    }
});

export default class GasPriceComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerRow}>
                <View style={styles.priceContainer}>
                    <View style={styles.priceContent}>
                        <Text style={styles.priceValueText}>
                            {this.props.gasolinePrice || '-'}
                        </Text>
                        <Text>Gasolina</Text>
                    </View>
                    <View style={styles.priceContainerLine}>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.priceContent}>
                        <Text style={styles.priceValueText}>
                            {this.props.alchoolPrice || '-'}
                        </Text>
                        <Text>Álcool</Text>
                    </View>
                    <View style={styles.priceContainerLine}>
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <View style={styles.priceContent}>
                        <Text style={styles.priceValueText}>
                            {this.props.gnvPrice || '-'}
                        </Text>
                        <Text>GNV</Text>
                    </View>
                </View>
            </View>
        );
    }

}

