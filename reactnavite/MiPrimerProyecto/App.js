import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const despedirse = () =>{
    Alert.alert("Mensaje","Adios");
  }
  return (
    <View style={styles.container}>
      <Text>Bienvenido al curso de RN Adrian Bacilio</Text>
      <StatusBar style="auto" />
      <Button 
        title="Ok"
        onPress={() =>{
          Alert.alert("Mensaje","Hola"); 
        }}
      />
      <Button 
        title="Ok"
        onPress={despedirse}
      />
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
});
