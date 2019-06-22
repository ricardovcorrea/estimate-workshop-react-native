import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from './styles';

import ProjectCardComponent from '../../components/projectCardComponent';

export default class Project extends Component {

  static navigationOptions = ({ navigate, navigation }) => ({
    headerTitle: 'Project',
    headerRight: (
      <TouchableOpacity onPress={() => { navigation.getParam('saveProject')() }}>
        <MaterialIcons name={"done"} style={styles.btnSaveProject} size={30} />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleBtnSaveProjectClick = this.handleBtnSaveProjectClick.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ saveProject: this.handleBtnSaveProjectClick });
    
    const projectInfo = this.props.navigation.getParam('projectInfo', null);
    if (projectInfo) {
      this.setState({ projectInfo: projectInfo })
    }
  }

  handleBtnSaveProjectClick() {
    this.saveProject();
  }

  saveProject() {
    Alert.alert(
      'Atenção',
      'Deseja salvar as alterações no projeto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => this.props.navigation.goBack()
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <View>
        <ProjectCardComponent project={this.state.projectInfo} />
      </View>
    );
  }

}

