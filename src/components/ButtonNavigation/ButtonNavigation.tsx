import {TouchableOpacity, Linking, Text, StyleSheet} from 'react-native';

interface Props {
  url: string;
}

const ButtonNavigation = ({url}: Props) => {
  const handleButtonPress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <Text style={styles.button}>Ir a Google</Text>
    </TouchableOpacity>
  );
};

export default ButtonNavigation;

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    color: 'red',
  },
});
