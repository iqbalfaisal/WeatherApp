import * as React from 'react';
import {View, Text} from 'react-native';

function WeatherScreen({
  navigation,
  route: {
    params: {data},
  },
}) {
  console.log(data);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default WeatherScreen;
