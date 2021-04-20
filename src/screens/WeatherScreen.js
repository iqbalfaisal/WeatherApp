import * as React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {View, Text, StyleSheet} from 'react-native';

function WeatherScreen({
  navigation,
  route: {
    params: {data},
  },
}) {
  console.log(data);

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: data.coord.lat,
          longitude: data.coord.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: data.coord.lat, longitude: data.coord.lon}}
        />
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text style={[styles.weather, {fontWeight: 'bold'}]}>
              {data.name}
            </Text>
            <Text style={styles.weather}>{data.weather[0].description}</Text>

            <Text style={styles.weather}>Humidity: {data.main.humidity}</Text>
            <Text style={styles.weather}>Wind Speed: {data.wind.speed}</Text>
            <Text style={styles.weather}>Min Temp: {data.main.temp_min}</Text>
            <Text style={styles.weather}>Max Temp: {data.main.temp_max}</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              flex: 1,
            }}>
            <Text style={[styles.weather, {fontWeight: 'bold'}]}>
              {data.main.temp}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  weather: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
  },
});

export default WeatherScreen;
