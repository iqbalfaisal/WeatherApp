import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
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

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
