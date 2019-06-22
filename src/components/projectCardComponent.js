import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    projectCard: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 15,
        padding: 15,
        elevation: 2,
        height: 100
    }
});

export default class ProjectCardComponent extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        if (this.props.onPress) {
            this.props.onPress(this.props.project)
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.projectCard} onPress={() => { this.onPress() }} disabled={!this.props.onPress}>
                {this.props.project && <Text>{this.props.project.name}</Text>}
                {this.props.project && <Text>{this.props.project.description}</Text>}
            </TouchableOpacity>
        );
    }

}

