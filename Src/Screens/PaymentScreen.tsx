import * as React from 'react';
import {useTheme, Text} from 'react-native-paper';
import {View} from 'react-native';

export default function PaymentScreen() {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.primary}}>
      <Text>Payment Screen</Text>
    </View>
  );
}
