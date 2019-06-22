import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Text, RefreshControl } from 'react-native';

import styles from './styles';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { getProjects } from '../../services/projectService';

import ProjectCardComponent from '../../components/projectCardComponent';

export default class Home extends Component {

  static navigationOptions = ({ navigate, navigation }) => ({
    headerRight: (
      <TouchableOpacity onPress={() => { navigation.getParam('openProjectScreen')() }}>
        <MaterialIcons name={"add"} style={styles.btnNewProject} size={30} />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      projects: []
    };

    this.handleBtnNewProjectClick = this.handleBtnNewProjectClick.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ openProjectScreen: this.handleBtnNewProjectClick });
    this.getProjectsFromService();
  }

  async getProjectsFromService() {
    this.setState({ isLoading: true });
    const projects = await getProjects();
    this.setState({ projects: projects, isLoading: false });
  }

  handleBtnNewProjectClick(projectInfo) {
    this.openProjectScreen(projectInfo);
  }

  openProjectScreen(projectInfo) {
    this.props.navigation.navigate('Project', { projectInfo: projectInfo });
  }

  onPullToRefresh() {
    this.setState({ projects: [] });
    this.getProjectsFromService();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.projects}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => <ProjectCardComponent onPress={this.handleBtnNewProjectClick} project={item.item} />}
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

