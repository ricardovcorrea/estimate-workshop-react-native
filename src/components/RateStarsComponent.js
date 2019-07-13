import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starActive: {
        color: 'gold'
    },
    starInactive: {
        color: '#e3e3e3'
    }
});

export default class RateStarsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            defaultStarSize: 25
        }
    }

    render() {
        return (
            <View style={styles.containerRow}>
                <TouchableOpacity disabled={this.props.readOnly}>
                    <MaterialIcons name={"star"} style={this.props.rate >= 1 ? styles.starActive : styles.starInactive} size={this.props.size || this.state.defaultStarSize} />
                </TouchableOpacity>
                <TouchableOpacity disabled={this.props.readOnly}>
                    <MaterialIcons name={"star"} style={this.props.rate >= 2 ? styles.starActive : styles.starInactive} size={this.props.size || this.state.defaultStarSize} />
                </TouchableOpacity>
                <TouchableOpacity disabled={this.props.readOnly}>
                    <MaterialIcons name={"star"} style={this.props.rate >= 3 ? styles.starActive : styles.starInactive} size={this.props.size || this.state.defaultStarSize} />
                </TouchableOpacity>
                <TouchableOpacity disabled={this.props.readOnly}>
                    <MaterialIcons name={"star"} style={this.props.rate >= 4 ? styles.starActive : styles.starInactive} size={this.props.size || this.state.defaultStarSize} />
                </TouchableOpacity>
                <TouchableOpacity disabled={this.props.readOnly}>
                    <MaterialIcons name={"star"} style={this.props.rate == 5 ? styles.starActive : styles.starInactive} size={this.props.size || this.state.defaultStarSize} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 10 }}>{`(${this.props.rateCount})`}</Text>
            </View>
        );
    }

}

