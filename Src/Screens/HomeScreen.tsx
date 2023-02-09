import * as React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {useAppTheme} from '../../App';

export default function HomeScreen() {
  const {
    colors: {primary},
  } = useAppTheme();
  return (
    <View style={{backgroundColor: primary}}>
      <Text>Home Screen</Text>
    </View>
  );
}
