import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Com 1'/>
      <Button title='Com 2' color="green"/>
      <Button title='Com 3'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row", /* column por defecto*/
    justifyContent: "space-around",  /* flex-start por defecto, flex-end, space-between, space-around*/
    alignItems: "flex-end" /* stretch por defecto, flex-start, flex-end, space-between,alignItems: 'center',*/
  },
});
