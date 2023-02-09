import * as React from 'react';
import {useTheme, Text} from 'react-native-paper';
import {View} from 'react-native';

export default function ThankyouScreen() {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.primary}}>
      <Text>Thankyou Screen</Text>
    </View>
  );
}
