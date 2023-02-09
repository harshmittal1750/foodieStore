import * as React from 'react';
import {useTheme, Text} from 'react-native-paper';
import {View} from 'react-native';

export default function MarketScreen() {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.primary}}>
      <Text>Market Screen</Text>
    </View>
  );
}
