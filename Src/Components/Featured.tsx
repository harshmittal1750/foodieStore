import * as React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
const Featured = () => (
  <>
    <Card>
      {/* <Image
        source={{uri: 'https://picsum.photos/700'}}
        style={{width: '100%', height: 200}}
      /> */}
      {/* <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 20}}>
       
      </TouchableOpacity> */}
      <Button mode="outlined">
        <Text variant="bodyMedium">View More</Text>
      </Button>
    </Card>
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      showsPagination={false}
      autoplay={true}
      // autoplayTimeout={50000}
    >
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  </>
);
const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Featured;
