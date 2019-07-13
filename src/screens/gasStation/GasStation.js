import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Linking, Platform } from 'react-native';

import styles from './styles';

import GasPriceComponent from '../../components/GasPriceComponent';

import RateStarsComponent from '../../components/RateStarsComponent';

export default class GasStation extends Component {

  static navigationOptions = ({ navigate, navigation }) => ({
    headerTitle: 'Gas Station',
    headerRight: (
      <TouchableOpacity onPress={() => { }}>
        <Text style={styles.btnRate}>Avaliar</Text>
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      model: {
        prices: []
      },
      mapBaseUrl: `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCyGMannhsNtTl3xUn0py5ivEliSDGGFC8&zoom=15&center={lat},{lng}&size=300x150&maptype=roadmap&markers=color:red%7Clabel:P%7C{lat},{lng}`
    };
  }

  componentDidMount() {
    const model = this.props.navigation.getParam('model', null);
    if (model) {
      this.setState({ model: model })
    }
  }

  getGoogleMapsImageUri() {
    return this.state.mapBaseUrl.replace(/{lat}/g, this.state.model.latitude).replace(/{lng}/g, this.state.model.longitude);
  }

  openMapOnBrowser() {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${this.state.model.latitude},${this.state.model.longitude}`;
    const label = this.state.model.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  }

  render() {

    return (
      <ScrollView style={{ flex: 1, padding: 20 }} contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ flexDirection: 'column', marginBottom: 10 }}>
          <Text style={styles.gasStationName}>{this.state.model.name}</Text>
          <RateStarsComponent rateCount={this.state.model.rateCount} rate={this.state.model.rate} readOnly size={30} />
        </View>

        <View>
          <Image source={this.state.model.image ? { uri: this.state.model.image } : require('../../assets/images/placeholder.png')} resizeMode={'cover'} style={styles.photo} />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Endereço</Text>
          <TouchableOpacity onPress={() => { this.openMapOnBrowser() }}>
            <Image source={this.state.model.image ? { uri: this.getGoogleMapsImageUri() } : require('../../assets/images/placeholder.png')} resizeMode={'cover'} style={styles.photo} />
          </TouchableOpacity>
          <Text style={[styles.addressText, { marginTop: 5 }]}>{`${this.state.model.address}, ${this.state.model.addressNumber}`}</Text>
          <Text style={styles.addressText}>{this.state.model.neighbourhood}</Text>
          <Text style={[styles.addressText, { marginBottom: 0 }]}>{`${this.state.model.city}, ${this.state.model.state} - ${this.state.model.postalCode}`}</Text>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Preços</Text>
          <View style={{ borderWidth: 1 }}>
            <GasPriceComponent
              gasolinePrice={this.state.model.prices.gasolinePrice}
              alchoolPrice={this.state.model.prices.alchoolPrice}
              gnvPrice={this.state.model.prices.gnvPrice} />
            <Image source={require('../../assets/images/graf-placeholder.png')} resizeMode={'cover'} style={styles.photo} />
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Avaliações</Text>
        </View>


      </ScrollView>
    );
  }

}

