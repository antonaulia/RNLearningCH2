import { StyleSheet, Text, View, Button } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world ! </Text>
      <Text style={styles.textbox}> 
        Another Piece of text ! asd
      </Text>
      <Button title='OK !' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    margin: 16, 
    borderWidth: 2, 
    borderColor: 'red', 
    padding: 16 
  }
});
