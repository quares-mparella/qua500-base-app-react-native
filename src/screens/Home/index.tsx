import {StyleSheet, Text, View} from 'react-native';

import ButtonNavigation from '../../components/ButtonNavigation/ButtonNavigation';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primer proyecto React Native</Text>
      <ButtonNavigation url="https://www.google.com" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25,
  },
});
