import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WeatherScreen from './screens/WeatherScreen';
import {Provider} from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#00804A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#00804A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="WeatherScreen"
            component={WeatherScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
