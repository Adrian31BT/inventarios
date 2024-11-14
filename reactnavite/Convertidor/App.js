import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [dolares, setDolares] = useState(0);
  const [resultado, setResultado] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text>Convertidor</Text>
      <Text></Text>
      <TextInput 
        style = {styles.cajaTexto}
        placeholder='Ingresar dolares'
        value={dolares}
        onChangeText={(txt)=>{
          setDolares(txt);
        }}
      />
      <Text></Text>
      <Text>Resultado: {resultado}</Text>
      <Text></Text>
      <Button
        title="Pesos Mexicanos"
        onPress={()=>{
          let resultado = parseFloat(dolares)*20.41;
          setResultado(resultado);
        }}
      />
      <Text></Text>
      <Button
        title="Pesos Colombianos"
        onPress={()=>{
          let resultado = parseFloat(dolares)*4478.13;
          setResultado(resultado);
        }}
      />
      <Text></Text>
      <Button
        title="Euros"
        onPress={()=>{
          let resultado = parseFloat(dolares)*0.95;
          setResultado(resultado);
        }}
      />
      <StatusBar style="auto" />
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
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  }
});
