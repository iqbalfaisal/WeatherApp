import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchAll} from '../store/Actions';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state);

  console.log(data);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const Item = ({title, weather, temp}) => (
    <View style={styles.item}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'absolute',
          left: 5,
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.weather}>{weather}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          right: 5,
        }}>
        <Text style={styles.temp}>{temp}</Text>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('WeatherScreen', {data: item})}>
      <Item
        title={item.name}
        weather={item.weather[0].description}
        temp={item.main.temp}
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 25,
    // marginVertical: 5,
    marginHorizontal: 0,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  weather: {
    fontSize: 14,
    color: 'black',
  },

  temp: {
    fontSize: 14,
    color: 'black',
  },
});

export default HomeScreen;
