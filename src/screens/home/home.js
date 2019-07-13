import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Text, RefreshControl } from 'react-native';

import styles from './styles';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { getProjects } from '../../services/projectService';

import ProjectCardComponent from '../../components/projectCardComponent';
import GasStationCardComponent from '../../components/GasStationCardComponent';

export default class Home extends Component {

  static navigationOptions = ({ navigate, navigation }) => ({
    headerLeft: (
      <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
        <MaterialIcons name={"menu"} style={styles.btnMenu} size={30} />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      projects: []
    };
  }

  componentDidMount() {
    this.getProjectsFromService();
  }

  async getProjectsFromService() {
    this.setState({ isLoading: true });
    const projects = await getProjects();
    this.setState({ projects: projects, isLoading: false });
  }

  onPullToRefresh() {
    this.setState({ projects: [] });
    this.getProjectsFromService();
  }

  handleCardGasStationCardClick(model) {
    this.openGasStationDetailsScreen(model);
  }

  openGasStationDetailsScreen(model) {
    this.props.navigation.navigate('GasStation', { model: model });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.projects}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => <GasStationCardComponent onPress={() => { this.handleCardGasStationCardClick(item.item) }} model={item.item} />}
          contentContainerStyle={{ paddingBottom: 30 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={() => { this.onPullToRefresh() }}
            />
          }
        />
      </View>
    );
  }

}

